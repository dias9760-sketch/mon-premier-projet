"""Construit le nouveau classeur de suivi des commandes ZARAHISSI.

Usage : python construire_excel.py ancien_fichier.xlsx nouveau_fichier.xlsx [annee]

- Garde un onglet par mois (JAN 2026 … DEC 2026), mêmes colonnes A→Q et mêmes couleurs,
  avec listes déroulantes, marge, alerte de retard et totaux du mois.
- Ajoute un onglet SUIVI qui rassemble tout seul les commandes en cours de tous les mois,
  et un TABLEAU DE BORD (CA, marge, statuts, sources…).
"""
import sys

import openpyxl
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

from extraire import CHAMPS, MOIS, extraire

# --- Couleurs reprises du fichier d'origine (thème Office : accent5 bleu, accent6 vert) ---
TITRE = "203864"        # bleu foncé (bandeau titre)
ENTETE = "2F5597"       # bleu (entêtes de colonnes)
CLIENT = "DAE3F3"       # bleu très clair (bloc INFORMATIONS CLIENT)
COMMANDE = "B4C7E7"     # bleu clair (bloc INFORMATIONS COMMANDE)
ADRESSE = "C5E0B4"      # vert clair (ADRESSE DE LIVRAISON)
NOUVEAU = "FFF2CC"      # jaune pâle : colonnes calculées ajoutées
ROUGE = "FF0000"

# Statut -> (fond, police, à traiter ?)  -- identiques aux mises en forme conditionnelles d'origine
STATUTS = [
    ("A COMMANDER", "FF0000", "FFFFFF", True),
    ("ATTENTE PAIEMENT", "FFC000", "000000", True),
    ("EN PRODUCTION", "FFFFFF", "000000", True),
    ("ERREUR ÉCRITURE", "990033", "FFFFFF", True),
    ("PRÊT POUR ENVOI", "808080", "FFFFFF", True),
    ("EN ATTENTE D'ENVOI", "FFC000", "FFFFFF", True),
    ("PRODUIT ENVOYE FR", "7030A0", "FFFFFF", False),
    ("PRODUIT ENVOYE YT", "00B0F0", "FFFFFF", False),
    ("PRODUIT ENVOYE RE", "9933FF", "FFFFFF", False),
    ("PRODUIT ENVOYE GUA", "8B5E17", "FFFFFF", False),
    ("PRODUIT ENVOYE MAR", "16FD01", "000000", False),
    ("PRODUIT ENVOYE MONDE", "CC9FEC", "000000", False),
    ("REÇU MAYOTTE", "FFFF00", "000000", False),
    ("VENTE FINALISÉE", "00B050", "FFFFFF", False),
    ("COLIS RETOURNÉ", "FFD966", "000000", False),
    ("PERDU", "CC0000", "FFFFFF", False),
    ("REMBOURSEMENT", "FF00FF", "FFFFFF", False),
]
CONTACTS = [("SITE WEB", None), ("TIKTOK", None), ("INSTAGRAM", "7F6000"), ("FACEBOOK", "0070C0"),
            ("SNAPCHAT", "FFFF00"), ("WHATSAP", None)]
PAIEMENTS = ["CB SITE WEB", "APPLE PAY", "GOOGLE PAY", "PAYPAL SITE WEB", "PAIEMENT PAR LIEN",
             "CB MACHINE", "ESPÈCES", "CADEAU", "PARTENARIAT", "NON PAYE"]
EMBALLAGES = ["Aucun", "Emballage", "Mots", "Emballage + Mots"]
COULEURS = ["OR", "ARGENT", "NOIR", "BOIS", "ROSE", "MULTICOLORS", "AUTRES"]
RECUPERATIONS = [("RETRAIT MAGASIN", None), ("LIVRAISON YT", "FF0000"), ("LIVRAISON FR", None),
                 ("LIVRAISON RE", None), ("LIVRAISON GU", None), ("LIVRAISON MA", None),
                 ("LIVRAISON MONDE", None), ("LIVRAISON LIVREUR", None), ("LIVRAISON MAIL", None),
                 ("POINT RELAIS", "00B050")]
CATEGORIES = [("Colliers", "Collier*"), ("Bracelets", "Bracelet*"), ("Ensembles", "Ensemble*"),
              ("Bagues", "Bague*"), ("Boucles d'oreilles", "Boucle*"), ("Décoration", "D?coration*"),
              ("Drapeaux", "Drapeau*"), ("Bijoux", "Bijou*"), ("Bandes", "Bande*"),
              ("Broches", "Broche*"), ("Peignes", "Peigne*"), ("Porte-clés", "Porte*"),
              ("Produits high-tech", "Produit*")]
MOIS_NOMS = ["JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOÛT",
             "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE"]

POLICE = "Calibri"
fin = Side(style="thin", color="BFBFBF")
BORD = Border(left=fin, right=fin, top=fin, bottom=fin)


def fill(c):
    return PatternFill("solid", fgColor=c)


def font(color="000000", bold=False, size=11, italic=False):
    return Font(name=POLICE, color=color, bold=bold, size=size, italic=italic)


def entete(ws, row, col, texte, couleur=ENTETE, police="FFFFFF"):
    c = ws.cell(row, col, texte)
    c.fill = fill(couleur)
    c.font = font(police, bold=True)
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    c.border = BORD
    return c


# ---------------------------------------------------------------- LISTES
def onglet_listes(wb, produits):
    ws = wb.create_sheet("LISTES")
    colonnes = [
        ("CONTACT", [c for c, _ in CONTACTS]),
        ("PAIEMENT", PAIEMENTS),
        ("EMBALLAGE", EMBALLAGES),
        ("COULEUR", COULEURS),
        ("STATUT", [s[0] for s in STATUTS]),
        ("À TRAITER ?", ["OUI" if s[3] else "NON" for s in STATUTS]),
        ("RÉCUPÉRATION", [r for r, _ in RECUPERATIONS]),
        ("PRODUITS", produits),
    ]
    plages = {}
    for j, (titre, valeurs) in enumerate(colonnes, start=1):
        entete(ws, 1, j, titre)
        for i, v in enumerate(valeurs, start=2):
            c = ws.cell(i, j, v)
            c.font = font()
            c.border = BORD
        L = get_column_letter(j)
        plages[titre] = f"LISTES!${L}$2:${L}${len(valeurs) + 1}"
        ws.column_dimensions[L].width = 34 if titre == "PRODUITS" else 24
    # Couleurs des statuts = légende
    for i, (s, fond, pol, _) in enumerate(STATUTS, start=2):
        ws.cell(i, 5).fill = fill(fond)
        ws.cell(i, 5).font = font(pol, bold=True)
    ws.cell(len(STATUTS) + 3, 5, "Colonne F : OUI = la commande apparaît dans l'onglet SUIVI").font = font("7F7F7F", italic=True)
    ws.freeze_panes = "A2"
    return plages



# ---------------------------------------------------------------- ONGLETS MENSUELS
COLONNES = [  # (entête, largeur, bloc)
    ("CONTACT", 12, CLIENT), ("CLIENT", 26, CLIENT), ("N° Facture/commande", 13, CLIENT),
    ("DATE PAIEMENT", 13, CLIENT), ("PAIEMENT", 16, CLIENT), ("NUMERO", 12, CLIENT),
    ("Emballage/Mots", 14, CLIENT), ("PRODUIT", 26, COMMANDE), ("Couleur", 10, COMMANDE),
    ("PERSONNALISATION", 30, COMMANDE), ("PRIX VENTE", 11, COMMANDE), ("PRIX ACHAT", 11, COMMANDE),
    ("DATE PROD", 12, COMMANDE), ("STATUT", 22, COMMANDE), ("DATE ENVOIE", 12, COMMANDE),
    ("RÉCUPÉRATION", 18, COMMANDE), ("ADRESSE DE LIVRAISON", 34, ADRESSE),
    ("MARGE", 10, NOUVEAU), ("JOURS EN COURS", 10, NOUVEAU), ("ALERTE", 13, NOUVEAU), ("NOTES", 30, NOUVEAU),
]
PREMIERE = 5
DERNIERE = 404          # 400 lignes de saisie par mois (le mois le plus chargé en compte ~230)
ALERTE = "'TABLEAU DE BORD'!$C$5"
EUROS = '#,##0.00 "€";-#,##0.00 "€";"-"'


def nom_onglet(m, annee):
    return f"{MOIS[m]} {annee}"


def ref(onglet, col, abs_=True):
    """Plage d'une colonne d'un onglet mensuel, ex. 'JAN 2026'!$K$5:$K$404."""
    return f"'{onglet}'!${col}${PREMIERE}:${col}${DERNIERE}"


def somme_mois(onglets, modele):
    """Additionne une même formule sur les 12 onglets : modele contient {o} pour le nom d'onglet."""
    return "=" + "+".join(modele.format(o=o) for o in onglets)


def onglet_mois(wb, nom, titre, lignes, plages):
    ws = wb.create_sheet(nom)
    ws.sheet_view.zoomScale = 110
    n = len(COLONNES)
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=n)
    c = ws.cell(2, 1, titre)
    c.fill, c.font = fill(TITRE), font("FFFFFF", bold=True, size=16)
    c.alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[2].height = 28
    for debut, fin_, texte, coul, pol in [(1, 7, "INFORMATIONS CLIENT", TITRE, "FFFFFF"),
                                         (8, 16, "INFORMATIONS COMMANDE", TITRE, "FFFFFF"),
                                         (17, 17, "LIVRAISON", "A9D08E", "000000"),
                                         (18, 21, "CALCULÉ AUTOMATIQUEMENT (ne pas saisir)", "FFD966", "000000")]:
        if fin_ > debut:
            ws.merge_cells(start_row=3, start_column=debut, end_row=3, end_column=fin_)
        entete(ws, 3, debut, texte, coul, pol)
    for j, (t, w, bloc) in enumerate(COLONNES, start=1):
        entete(ws, 4, j, t, ENTETE if j <= 17 else "BF8F00")
        ws.column_dimensions[get_column_letter(j)].width = w
    ws.row_dimensions[4].height = 32

    statuts, a_traiter = plages["STATUT"], plages["À TRAITER ?"]
    for i in range(PREMIERE, DERNIERE + 1):
        for j, (_, _, bloc) in enumerate(COLONNES, start=1):
            c = ws.cell(i, j)
            c.fill = fill(bloc)
            c.border = BORD
            c.font = font(ROUGE if j in (1, 2, 5, 16) else "000000")
            c.alignment = Alignment(vertical="top", wrap_text=j in (10, 17, 21))
        for j in (4, 13, 15):
            ws.cell(i, j).number_format = "DD/MM/YYYY"
        for j in (3, 6):  # n° de commande et téléphone en texte : évite la perte de chiffres (n° TikTok)
            ws.cell(i, j).number_format = "@"
        for j in (11, 12, 18):
            ws.cell(i, j).number_format = EUROS
        ws.cell(i, 18).value = f'=IF(K{i}="","",K{i}-N(L{i}))'
        ws.cell(i, 19).value = (f'=IF(OR(D{i}="",N{i}=""),"",IF(IFERROR(INDEX({a_traiter},'
                                f'MATCH(N{i},{statuts},0)),"NON")="OUI",TODAY()-D{i},""))')
        ws.cell(i, 19).number_format = '0" j"'
        ws.cell(i, 19).alignment = Alignment(horizontal="center", vertical="top")
        ws.cell(i, 20).value = f'=IF(S{i}="","",IF(S{i}>{ALERTE},"⚠ RETARD","En cours"))'
        ws.cell(i, 20).alignment = Alignment(horizontal="center", vertical="top")
        # V (masquée) : rang de la ligne parmi les commandes en cours du mois, utilisé par l'onglet SUIVI
        ws.cell(i, 22).value = f'=IF(ISNUMBER(S{i}),COUNT(S${PREMIERE}:S{i}),"")'

    for i, l in enumerate(lignes, start=PREMIERE):
        for j, champ in enumerate(CHAMPS, start=1):
            ws.cell(i, j).value = l[champ]
        if l["suite"]:  # article supplémentaire : on grise le rappel client pour lisibilité
            for j in (1, 2, 3, 6, 17):
                ws.cell(i, j).font = font("A6A6A6", italic=True)

    zone = lambda L: f"{L}{PREMIERE}:{L}{DERNIERE}"
    for col, cle, strict in [("A", "CONTACT", True), ("E", "PAIEMENT", True), ("G", "EMBALLAGE", True),
                             ("I", "COULEUR", True), ("N", "STATUT", True), ("P", "RÉCUPÉRATION", True),
                             ("H", "PRODUITS", False)]:
        dv = DataValidation(type="list", formula1="=" + plages[cle], allow_blank=True,
                            errorStyle="stop" if strict else "information",
                            showErrorMessage=True,
                            error="Choisissez une valeur dans la liste (onglet LISTES)." if strict
                            else "Produit absent de la liste : pensez à l'ajouter dans l'onglet LISTES.")
        dv.add(zone(col))
        ws.add_data_validation(dv)
    dv = DataValidation(type="decimal", operator="greaterThanOrEqual", formula1="0", allow_blank=True,
                        showErrorMessage=True, error="Le prix doit être un nombre (ex : 22,50)")
    dv.add(f"K{PREMIERE}:L{DERNIERE}")
    ws.add_data_validation(dv)
    dv = DataValidation(type="date", operator="greaterThan", formula1="43831", allow_blank=True,
                        showErrorMessage=True, error="Saisissez une date (ex : 15/10/2026)")
    for col in "DMO":
        dv.add(zone(col))
    ws.add_data_validation(dv)

    # Mises en forme conditionnelles : mêmes couleurs que l'ancien fichier
    cf = ws.conditional_formatting
    for s, fond, pol, _ in STATUTS:
        cf.add(zone("N"), FormulaRule(formula=[f'ISNUMBER(SEARCH("{s}",N{PREMIERE}))'],
                                      fill=fill(fond), font=Font(color=pol, bold=True), stopIfTrue=True))
    for s, pol in CONTACTS:
        if pol:
            cf.add(zone("A"), FormulaRule(formula=[f'ISNUMBER(SEARCH("{s}",A{PREMIERE}))'], font=Font(color=pol)))
    cf.add(zone("E"), FormulaRule(formula=[f'ISNUMBER(SEARCH("PAYPAL",E{PREMIERE}))'], font=Font(color="00B0F0")))
    cf.add(zone("E"), FormulaRule(formula=[f'ISNUMBER(SEARCH("NON PAYE",E{PREMIERE}))'],
                                  fill=fill("FF0000"), font=Font(color="FFFFFF", bold=True)))
    cf.add(zone("G"), FormulaRule(formula=[f'AND(G{PREMIERE}<>"",G{PREMIERE}<>"Aucun")'], font=Font(color="FF0000", bold=True)))
    for s, pol in RECUPERATIONS:
        if pol:
            cf.add(zone("P"), FormulaRule(formula=[f'ISNUMBER(SEARCH("{s}",P{PREMIERE}))'], font=Font(color=pol)))
    cf.add(zone("T"), FormulaRule(formula=[f'T{PREMIERE}="⚠ RETARD"'], fill=fill("FF0000"), font=Font(color="FFFFFF", bold=True)))
    cf.add(zone("R"), FormulaRule(formula=[f'AND(ISNUMBER(R{PREMIERE}),R{PREMIERE}<0)'], font=Font(color="FF0000", bold=True)))
    # Oubli fréquent : livraison sans adresse
    cf.add(zone("Q"), FormulaRule(formula=[f'AND(LEFT(P{PREMIERE},9)="LIVRAISON",Q{PREMIERE}="")'], fill=fill("F4B084")))

    # Totaux du mois, à droite du tableau (comme vos anciennes cases VENTE SITE WEB / SUR PLACE)
    ws.column_dimensions["V"].hidden = True
    ws.column_dimensions["W"].width = 3
    ws.column_dimensions["X"].width = 22
    ws.column_dimensions["Y"].width = 14
    entete(ws, 4, 24, "TOTAUX DU MOIS", TITRE)
    entete(ws, 4, 25, "", TITRE)
    k, l_, a, n_, h = (f"{x}{PREMIERE}:{x}{DERNIERE}" for x in "KLANH")
    totaux = [
        ("TOTAL VENTE", f"=SUM({k})", EUROS),
        ("TOTAL ACHAT", f"=SUM({l_})", EUROS),
        ("MARGE", "=Y5-Y6", EUROS),
        ("VENTE SITE WEB", f'=SUMIF({a},"SITE WEB",{k})', EUROS),
        ("VENTE SUR PLACE", f'=SUMIF({a},"<>SITE WEB",{k})', EUROS),
        ("ARTICLES", f"=COUNTA({h})", "0"),
        ("EN COURS", f"=COUNT(S{PREMIERE}:S{DERNIERE})", "0"),
        ("EN RETARD", f'=COUNTIF(T{PREMIERE}:T{DERNIERE},"⚠ RETARD")', "0"),
    ]
    for i, (lib, f, fmt) in enumerate(totaux, start=5):
        c1, c2 = ws.cell(i, 24, lib), ws.cell(i, 25, f)
        c1.font, c1.fill, c1.border = font(bold=True), fill(CLIENT), BORD
        c2.font, c2.border, c2.number_format = font(bold=True), BORD, fmt
    ws["Y12"].font = font("FF0000", bold=True)

    ws.freeze_panes = f"C{PREMIERE}"
    ws.auto_filter.ref = f"A4:U{DERNIERE}"
    ws.print_title_rows = "4:4"
    ws.print_area = f"A1:U{DERNIERE}"
    ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    return ws


# ---------------------------------------------------------------- SUIVI (commandes en cours, tous mois confondus)
SUIVI_COLS = [  # (entête, colonne source dans l'onglet du mois, largeur)
    ("JOURS", "S", 8), ("STATUT", "N", 21), ("CLIENT", "B", 24), ("N°", "C", 13),
    ("DATE PAIEMENT", "D", 12), ("PRODUIT", "H", 26), ("COULEUR", "I", 10), ("PERSONNALISATION", "J", 34),
    ("EMBALLAGE", "G", 14), ("RÉCUPÉRATION", "P", 18), ("TÉLÉPHONE", "F", 13), ("NOTES", "U", 22),
]


def onglet_suivi(wb, onglets, nb=250):
    ws = wb.create_sheet("SUIVI", 0)
    ws.sheet_view.showGridLines = False
    ws.sheet_view.zoomScale = 110
    nvis = 2 + len(SUIVI_COLS)                       # A = MOIS, B..M = colonnes, N = lien
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=nvis)
    c = ws.cell(1, 1, "SUIVI DES COMMANDES EN COURS — se met à jour tout seul à partir des onglets mensuels")
    c.fill, c.font = fill(TITRE), font("FFFFFF", bold=True, size=15)
    c.alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[1].height = 30

    # Compteurs par statut en cours (mêmes couleurs)
    en_cours = [s for s in STATUTS if s[3]]
    ws.cell(3, 1, "EN COURS").font = font(bold=True)
    ws.cell(4, 1, "EN RETARD").font = font("FF0000", bold=True)
    ws.cell(3, 2, f"=COUNT($Q$7:$Q${6 + nb})")
    ws.cell(4, 2, f"=COUNTIFS($B$7:$B${6 + nb},\">\"&{ALERTE})")
    for r in (3, 4):
        ws.cell(r, 2).font = font("FF0000" if r == 4 else "000000", bold=True, size=14)
        ws.cell(r, 2).alignment = Alignment(horizontal="center")
    for j, (s, fond, pol, _) in enumerate(en_cours, start=4):
        h = ws.cell(3, j, s)
        h.fill, h.font, h.border = fill(fond), font(pol, bold=True, size=9), BORD
        h.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        v = ws.cell(4, j, somme_mois(onglets, 'COUNTIF(' + ref("{o}", "N") + f',"{s}")'))
        v.font, v.border = font(bold=True, size=14), BORD
        v.alignment = Alignment(horizontal="center")
    ws.row_dimensions[3].height = 30

    # Table d'aide masquée : nombre de commandes en cours par mois et décalage cumulé
    # R = nom d'onglet, S = nb en cours, T = nb cumulé avant ce mois
    ws.cell(5, 18, "ONGLET"), ws.cell(5, 19, "EN COURS"), ws.cell(5, 20, "AVANT")
    for m, o in enumerate(onglets):
        r = 6 + m
        ws.cell(r, 18, o)
        ws.cell(r, 19, f"=COUNT({ref(o, 'S')})")
        ws.cell(r, 20, 0 if m == 0 else f"=T{r - 1}+S{r - 1}")
    total = f"SUM($S$6:$S${5 + len(onglets)})"
    avant = f"$T$6:$T${5 + len(onglets)}"

    entete(ws, 6, 1, "MOIS")
    ws.column_dimensions["A"].width = 11
    for j, (t, _, w) in enumerate(SUIVI_COLS, start=2):
        entete(ws, 6, j, t)
        ws.column_dimensions[get_column_letter(j)].width = w
    entete(ws, 6, nvis, "MODIFIER")
    ws.column_dimensions[get_column_letter(nvis)].width = 12
    ws.row_dimensions[6].height = 28

    def choisir(col):
        return "CHOOSE($P{r}," + ",".join(f"'{o}'!${col}:${col}" for o in onglets) + ")"

    for k in range(1, nb + 1):
        r = 6 + k
        # P = n° du mois, Q = n° de ligne dans l'onglet du mois (colonnes masquées)
        ws.cell(r, 16, f'=IF({k}>{total},"",COUNTIF({avant},"<="&{k - 1}))')
        ws.cell(r, 17, f'=IF($P{r}="","",MATCH({k}-INDEX({avant},$P{r}),{choisir("V").format(r=r)},0))')
        ws.cell(r, 1, f'=IF($P{r}="","",INDEX($R$6:$R$17,$P{r}))')
        for j, (_, src, _) in enumerate(SUIVI_COLS, start=2):
            val = f"INDEX({choisir(src).format(r=r)},$Q{r})"
            c = ws.cell(r, j, f'=IF($Q{r}="","",IF({val}="","",{val}))')
            c.font = font(bold=src in ("N", "J"), size=12 if src == "J" else 11)
            c.alignment = Alignment(vertical="top", wrap_text=src in ("J", "U"))
        ws.cell(r, nvis, f'=IF($Q{r}="","",HYPERLINK("#\'"&$A{r}&"\'!N"&$Q{r},"→ ouvrir"))')
        ws.cell(r, nvis).font = font("0563C1")
        ws.cell(r, 2).number_format = '0" j"'
        ws.cell(r, 2).alignment = Alignment(horizontal="center", vertical="top")
        ws.cell(r, 6).number_format = "DD/MM/YYYY"
        for j in (1, nvis):
            ws.cell(r, j).alignment = Alignment(vertical="top")
        for j in range(1, nvis + 1):
            ws.cell(r, j).border = BORD
    for L in "PQRST":
        ws.column_dimensions[L].hidden = True

    zone = f"A7:{get_column_letter(nvis)}{6 + nb}"
    cf = ws.conditional_formatting
    for s, fond, pol, _ in STATUTS:
        cf.add(f"C7:C{6 + nb}", FormulaRule(formula=[f'$C7="{s}"'], fill=fill(fond), font=Font(color=pol, bold=True)))
    cf.add(f"B7:B{6 + nb}", FormulaRule(formula=[f"AND(ISNUMBER($B7),$B7>{ALERTE})"],
                                        fill=fill("FF0000"), font=Font(color="FFFFFF", bold=True)))
    cf.add(f"J7:J{6 + nb}", FormulaRule(formula=['AND($J7<>"",$J7<>"Aucun")'], font=Font(color="FF0000", bold=True)))
    cf.add(zone, FormulaRule(formula=['AND($Q7<>"",MOD(ROW(),2)=0)'], fill=fill(CLIENT)))
    ws.auto_filter.ref = f"A6:{get_column_letter(nvis - 1)}{6 + nb}"
    ws.freeze_panes = "A7"
    ws.print_area = f"A1:{get_column_letter(nvis - 1)}{6 + nb}"
    ws.page_setup.orientation = "landscape"
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.print_title_rows = "6:6"
    return ws


# ---------------------------------------------------------------- TABLEAU DE BORD
def onglet_tableau(wb, onglets, annee):
    ws = wb.create_sheet("TABLEAU DE BORD", 1)
    ws.sheet_view.showGridLines = False
    ws.merge_cells("A2:L2")
    c = ws.cell(2, 1, f"TABLEAU DE BORD {annee} — ZARAHISSI")
    c.fill, c.font = fill(TITRE), font("FFFFFF", bold=True, size=16)
    c.alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[2].height = 28

    ws["A5"], ws["C5"] = "Alerte retard après (jours)", 7
    ws["A5"].font = font(bold=True)
    ws["C5"].fill, ws["C5"].font, ws["C5"].border = fill("FFFF00"), font("0000FF", bold=True), BORD
    ws["D5"] = "← cellule jaune modifiable"
    ws["D5"].font = font("7F7F7F", italic=True)

    ws["F4"], ws["F5"] = "Articles en cours", "dont en retard"
    ws["H4"] = "=SUIVI!B3"
    ws["H5"] = "=SUIVI!B4"
    ws["J4"], ws["J5"] = "CA de l'année", "Marge de l'année"
    for cell in ("F4", "F5", "J4", "J5"):
        ws[cell].font = font(bold=True)
    for cell, coul in (("H4", "FFC000"), ("H5", "FF0000"), ("L4", "00B050"), ("L5", "00B050")):
        ws[cell].fill = fill(coul)
        ws[cell].font = font("FFFFFF", bold=True, size=14)
        ws[cell].alignment = Alignment(horizontal="center")
    ws["L4"].number_format = ws["L5"].number_format = '#,##0 "€"'

    # Résultat mensuel : chaque ligne lit l'onglet du mois
    r0 = 9
    ws.merge_cells(start_row=r0, start_column=1, end_row=r0, end_column=10)
    entete(ws, r0, 1, "RÉSULTAT MENSUEL (lu directement dans chaque onglet mensuel)", TITRE)
    titres = ["MOIS", "ARTICLES", "CA", "PRIX ACHAT", "MARGE", "% MARGE", "VENTE SITE WEB",
              "VENTE SUR PLACE / RÉSEAUX", "REMBOURSEMENTS", "PANIER MOYEN / ARTICLE"]
    for j, t in enumerate(titres, start=1):
        entete(ws, r0 + 1, j, t)
    for m, o in enumerate(onglets):
        r = r0 + 2 + m
        K, A, N, H, L_ = (ref(o, x) for x in "KANHL")
        valeurs = [
            MOIS_NOMS[m],
            f"=COUNTA({H})",
            f"=SUM({K})",
            f"=SUM({L_})",
            f"=C{r}-D{r}",
            f'=IF(C{r}=0,"",E{r}/C{r})',
            f'=SUMIF({A},"SITE WEB",{K})',
            f"=C{r}-G{r}",
            f'=SUMIF({N},"REMBOURSEMENT",{K})',
            f'=IF(B{r}=0,"",C{r}/B{r})',
        ]
        for j, v in enumerate(valeurs, start=1):
            c = ws.cell(r, j, v)
            c.border = BORD
            c.font = font(bold=j == 1)
            c.fill = fill(CLIENT if m % 2 == 0 else "FFFFFF")
            c.number_format = '0.0%' if j == 6 else (EUROS if j > 2 else "0")
        ws.cell(r, 1).hyperlink = f"#'{o}'!A1"
    rt = r0 + 14
    ws.cell(rt, 1, "TOTAL")
    for j in range(2, 11):
        L = get_column_letter(j)
        ws.cell(rt, j, f"=SUM({L}{r0 + 2}:{L}{r0 + 13})" if j not in (6, 10) else
                (f'=IF(C{rt}=0,"",E{rt}/C{rt})' if j == 6 else f'=IF(B{rt}=0,"",C{rt}/B{rt})'))
    for j in range(1, 11):
        c = ws.cell(rt, j)
        c.fill, c.font, c.border = fill(ENTETE), font("FFFFFF", bold=True), BORD
        c.number_format = ws.cell(r0 + 2, j).number_format
    ws["L4"] = f"=C{rt}"
    ws["L5"] = f"=E{rt}"

    # Répartitions sur l'année (somme des 12 onglets)
    rb = rt + 3

    def nb_(col, crit):
        return somme_mois(onglets, f'COUNTIF({ref("{o}", col)},{crit})')

    def ca_(col, crit):
        return somme_mois(onglets, f'SUMIF({ref("{o}", col)},{crit},{ref("{o}", "K")})')

    def bloc(r_deb, col, titre, src, valeurs, couleurs=None, avec_ca=True):
        entete(ws, r_deb, col, titre, TITRE)
        entete(ws, r_deb, col + 1, "NB", TITRE)
        if avec_ca:
            entete(ws, r_deb, col + 2, "CA", TITRE)
        for i, (lib, crit) in enumerate(valeurs, start=1):
            r = r_deb + i
            c = ws.cell(r, col, lib)
            c.border = BORD
            if couleurs:
                fo, po = couleurs[i - 1]
                c.fill, c.font = fill(fo), font(po, bold=True)
            ws.cell(r, col + 1, nb_(src, crit)).border = BORD
            if avec_ca:
                ca = ws.cell(r, col + 2, ca_(src, crit))
                ca.border, ca.number_format = BORD, '#,##0 "€";-#,##0 "€";"-"'

    lit = lambda v: [(x, f'"{x}"') for x in v]
    bloc(rb, 1, "STATUT", "N", lit([s[0] for s in STATUTS]), [(s[1], s[2]) for s in STATUTS], avec_ca=False)
    bloc(rb, 4, "CONTACT", "A", lit([c_ for c_, _ in CONTACTS]))
    bloc(rb + len(CONTACTS) + 3, 4, "CATÉGORIE", "H", [(nom, f'"{motif}"') for nom, motif in CATEGORIES])
    bloc(rb, 8, "PAIEMENT", "E", lit(PAIEMENTS))
    bloc(rb + len(PAIEMENTS) + 3, 8, "RÉCUPÉRATION", "P", lit([r_ for r_, _ in RECUPERATIONS]), avec_ca=False)

    for L, w in zip("ABCDEFGHIJKL", (24, 10, 12, 18, 12, 12, 16, 20, 12, 14, 12, 14)):
        ws.column_dimensions[L].width = w
    return ws


# ---------------------------------------------------------------- MODE D'EMPLOI
def onglet_aide(wb):
    ws = wb.create_sheet("MODE D'EMPLOI")
    ws.sheet_view.showGridLines = False
    ws.column_dimensions["A"].width = 3
    ws.column_dimensions["B"].width = 115
    textes = [
        ("COMMENT UTILISER CE FICHIER", True),
        ("", False),
        ("1. Un onglet par mois, comme avant (JAN 2026 … DEC 2026). Les mois à venir sont déjà prêts (400 lignes chacun).", False),
        ("2. Saisissez uniquement les colonnes A à Q (fond bleu / vert) et NOTES. Les colonnes jaunes R à T se calculent seules.", False),
        ("   → Les totaux du mois (vente, achat, marge, site web / sur place, en cours, en retard) sont à droite, colonnes X-Y.", False),
        ("3. Listes déroulantes sur CONTACT, PAIEMENT, Emballage, Couleur, STATUT, RÉCUPÉRATION : fini les fautes de frappe.", False),
        ("   → PRODUIT propose la liste aussi, mais accepte un nouveau nom (ajoutez-le ensuite dans l'onglet LISTES).", False),
        ("4. Commande avec plusieurs articles : une ligne par article (infos client en gris clair sur les lignes suivantes).", False),
        ("", False),
        ("ONGLET SUIVI", True),
        ("5. SUIVI rassemble tout seul les commandes en cours de TOUS les mois (statuts marqués OUI dans LISTES : A COMMANDER,", False),
        ("   EN PRODUCTION, ERREUR ÉCRITURE, PRÊT POUR ENVOI, EN ATTENTE D'ENVOI, ATTENTE PAIEMENT), de la plus ancienne à la plus récente.", False),
        ("6. En haut : le nombre de commandes par statut. Le nombre de jours passe en rouge au-delà du délai d'alerte", False),
        ("   (7 jours par défaut, réglable dans TABLEAU DE BORD, cellule jaune C5).", False),
        ("7. Pour changer un statut : cliquez « → ouvrir » (dernière colonne), Excel vous emmène sur la bonne ligne du bon mois.", False),
        ("   Dès que le statut passe à « PRODUIT ENVOYE … » ou « VENTE FINALISÉE », la commande disparaît du SUIVI.", False),
        ("", False),
        ("TABLEAU DE BORD", True),
        ("8. CA, achats, marge, ventes site web / sur place mois par mois (lus dans chaque onglet), et répartition par statut,", False),
        ("   réseau, paiement, récupération et catégorie de produit. Cliquez sur un mois pour ouvrir son onglet.", False),
        ("9. Repères visuels : ADRESSE en orange = livraison sans adresse ; ALERTE rouge = en retard ; PAIEMENT rouge = NON PAYE.", False),
        ("", False),
        ("Lien avec RÉSULTAT 2026 : total vente du mois = cellule Y5 de chaque onglet, total achat = Y6", False),
        ("(ou TABLEAU DE BORD, colonnes CA C11:C22 et PRIX ACHAT D11:D22).", False),
        ("Important : ne renommez pas les onglets mensuels, le SUIVI et le TABLEAU DE BORD s'appuient sur leurs noms.", False),
    ]
    for i, (t, gras) in enumerate(textes, start=2):
        c = ws.cell(i, 2, t)
        c.font = font(TITRE if gras else "000000", bold=gras, size=15 if gras else 11)
    return ws


def construire(source, cible, annee=2026):
    lignes = extraire(source, annee)
    produits = sorted({l["produit"] for l in lignes if l["produit"]}, key=str.casefold)
    onglets = [nom_onglet(m, annee) for m in range(12)]
    wb = openpyxl.Workbook()
    wb.remove(wb.active)
    plages = onglet_listes(wb, produits)
    for m, o in enumerate(onglets):
        du_mois = [l for l in lignes if l["mois"] == m + 1]
        assert len(du_mois) <= DERNIERE - PREMIERE + 1, o
        onglet_mois(wb, o, f"{MOIS_NOMS[m]} {annee} : COMMANDES PERSONNALISÉES", du_mois, plages)
    wb.move_sheet("LISTES", offset=len(wb.sheetnames))
    onglet_suivi(wb, onglets)
    onglet_tableau(wb, onglets, annee)
    onglet_aide(wb)
    wb.active = 0
    wb.calculation.fullCalcOnLoad = True
    wb.save(cible)
    return len(lignes)


if __name__ == "__main__":
    n = construire(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 2026)
    print(f"{n} lignes importées")
