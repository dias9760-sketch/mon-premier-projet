"""Construit le nouveau classeur de suivi des commandes ZARAHISSI.

Usage : python construire_excel.py ancien_fichier.xlsx nouveau_fichier.xlsx [annee]

- Regroupe tous les onglets mensuels dans un seul onglet COMMANDES (mêmes colonnes A→Q,
  mêmes couleurs), avec listes déroulantes, marge, alerte de retard.
- Ajoute un TABLEAU DE BORD (CA, marge, statuts, sources…) et un onglet À TRAITER
  qui se remplit tout seul avec les commandes en cours.
"""
import sys

import openpyxl
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

from extraire import CHAMPS, extraire

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
    ws.cell(len(STATUTS) + 3, 5, "Colonne F : OUI = la commande apparaît dans « À TRAITER »").font = font("7F7F7F", italic=True)
    ws.freeze_panes = "A2"
    return plages



# ---------------------------------------------------------------- COMMANDES
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


def onglet_commandes(wb, lignes, plages, derniere):
    ws = wb.create_sheet("COMMANDES", 0)
    ws.sheet_view.zoomScale = 110
    n = len(COLONNES)
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=n)
    c = ws.cell(2, 1, "ZARAHISSI — COMMANDES 2026 (tous les mois)")
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

    alerte = "'TABLEAU DE BORD'!$C$5"
    statuts, a_traiter = plages["STATUT"], plages["À TRAITER ?"]
    for i in range(PREMIERE, derniere + 1):
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
            ws.cell(i, j).number_format = '#,##0.00 "€";-#,##0.00 "€";"-"'
        ws.cell(i, 18).value = f'=IF(K{i}="","",K{i}-N(L{i}))'
        ws.cell(i, 19).value = (f'=IF(OR(D{i}="",N{i}=""),"",IF(IFERROR(INDEX({a_traiter},'
                                f'MATCH(N{i},{statuts},0)),"NON")="OUI",TODAY()-D{i},""))')
        ws.cell(i, 19).number_format = '0" j"'
        ws.cell(i, 19).alignment = Alignment(horizontal="center", vertical="top")
        ws.cell(i, 20).value = f'=IF(S{i}="","",IF(S{i}>{alerte},"⚠ RETARD","En cours"))'
        ws.cell(i, 20).alignment = Alignment(horizontal="center", vertical="top")
        # V (masquée) : rang de la ligne parmi les commandes à traiter, utilisé par l'onglet À TRAITER
        ws.cell(i, 22).value = f'=IF(ISNUMBER(S{i}),COUNT(S${PREMIERE}:S{i}),"")'

    for i, l in enumerate(lignes, start=PREMIERE):
        for j, champ in enumerate(CHAMPS, start=1):
            ws.cell(i, j).value = l[champ]
        if l["suite"]:  # article supplémentaire : on grise le rappel client pour lisibilité
            for j in (1, 2, 3, 6, 17):
                ws.cell(i, j).font = font("A6A6A6", italic=True)

    zone = lambda L: f"{L}{PREMIERE}:{L}{derniere}"
    # Listes déroulantes
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
    dv.add(f"K{PREMIERE}:L{derniere}")
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

    ws.column_dimensions["V"].hidden = True
    ws.freeze_panes = f"C{PREMIERE}"
    ws.auto_filter.ref = f"A4:U{derniere}"
    ws.print_title_rows = "4:4"
    ws.page_setup.orientation = "landscape"
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    return ws


# ---------------------------------------------------------------- TABLEAU DE BORD
def onglet_tableau(wb, derniere, annee):
    ws = wb.create_sheet("TABLEAU DE BORD", 1)
    ws.sheet_view.showGridLines = False
    R = lambda L: f"COMMANDES!${L}${PREMIERE}:${L}${derniere}"
    D, K, L_, Rm, N, A, E, P, H = (R(x) for x in "DKLRNAEPH")
    ws.merge_cells("A2:L2")
    c = ws.cell(2, 1, "TABLEAU DE BORD — ZARAHISSI")
    c.fill, c.font = fill(TITRE), font("FFFFFF", bold=True, size=16)
    c.alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[2].height = 28

    ws["A4"], ws["A5"] = "Année suivie", "Alerte retard après (jours)"
    ws["C4"], ws["C5"] = annee, 7
    for r in (4, 5):
        ws.cell(r, 1).font = font(bold=True)
        ws.cell(r, 3).fill = fill("FFFF00")
        ws.cell(r, 3).font = font("0000FF", bold=True)
        ws.cell(r, 3).border = BORD
    ws["D4"] = "← cellules jaunes modifiables"
    ws["D4"].font = font("7F7F7F", italic=True)

    # Indicateurs clés du mois en cours
    ws["F4"], ws["F5"] = "Articles à traiter", "dont en retard"
    ws["H4"] = f'=COUNTIF({R("S")},">=0")'
    ws["H5"] = f'=COUNTIF({R("T")},"⚠ RETARD")'
    ws["J4"], ws["J5"] = "CA de l'année", "Marge de l'année"
    ws["L4"] = f"=SUM(D11:D22)"
    ws["L5"] = f"=SUM(F11:F22)"
    for cell in ("F4", "F5", "J4", "J5"):
        ws[cell].font = font(bold=True)
    for cell, coul in (("H4", "FFC000"), ("H5", "FF0000"), ("L4", "00B050"), ("L5", "00B050")):
        ws[cell].fill = fill(coul)
        ws[cell].font = font("FFFFFF", bold=True, size=14)
        ws[cell].alignment = Alignment(horizontal="center")
    ws["L4"].number_format = ws["L5"].number_format = '#,##0 "€"'

    # Tableau mensuel
    r0 = 9
    ws.merge_cells(start_row=r0, start_column=1, end_row=r0, end_column=10)
    entete(ws, r0, 1, "RÉSULTAT MENSUEL (remplace les totaux en bas de chaque onglet mensuel)", TITRE)
    titres = ["MOIS", "ARTICLES", "CA", "PRIX ACHAT", "MARGE", "% MARGE", "VENTE SITE WEB",
              "VENTE SUR PLACE / RÉSEAUX", "REMBOURSEMENTS", "PANIER MOYEN / ARTICLE"]
    for j, t in enumerate(titres, start=1):
        entete(ws, r0 + 1, j, t)
    for m in range(12):
        r = r0 + 2 + m
        deb = f"DATE($C$4,{m + 1},1)"
        fin_ = f"DATE($C$4,{m + 2},1)"
        crit = f'{D},">="&{deb},{D},"<"&{fin_}'
        valeurs = [
            MOIS_NOMS[m],
            f"=COUNTIFS({crit})",
            f"=SUMIFS({K},{crit})",
            f"=SUMIFS({L_},{crit})",
            f"=C{r}-D{r}",
            f'=IF(C{r}=0,"",E{r}/C{r})',
            f'=SUMIFS({K},{crit},{A},"SITE WEB")',
            f"=C{r}-G{r}",
            f'=SUMIFS({K},{crit},{N},"REMBOURSEMENT")',
            f'=IF(B{r}=0,"",C{r}/B{r})',
        ]
        for j, v in enumerate(valeurs, start=1):
            c = ws.cell(r, j, v)
            c.border = BORD
            c.font = font(bold=j == 1)
            c.fill = fill(CLIENT if m % 2 == 0 else "FFFFFF")
            c.number_format = '0.0%' if j == 6 else ('#,##0.00 "€";-#,##0.00 "€";"-"' if j > 2 else "0")
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
    # Les références du haut pointent sur ces lignes
    ws["L4"] = f"=C{rt}"
    ws["L5"] = f"=E{rt}"

    # Blocs de répartition (année entière)
    rb = rt + 3
    crit_an = f'{D},">="&DATE($C$4,1,1),{D},"<"&DATE($C$4+1,1,1)'

    def bloc(col, titre, valeurs, couleurs=None, avec_ca=True):
        entete(ws, rb, col, titre, TITRE)
        entete(ws, rb, col + 1, "NB", TITRE)
        if avec_ca:
            entete(ws, rb, col + 2, "CA", TITRE)
        for i, v in enumerate(valeurs, start=1):
            r = rb + i
            Lc = get_column_letter(col)
            c = ws.cell(r, col, v)
            c.border = BORD
            if couleurs and couleurs[i - 1]:
                fo, po = couleurs[i - 1]
                c.fill, c.font = fill(fo), font(po, bold=True)
            plage = {"STATUT": N, "CONTACT": A, "PAIEMENT": E, "RÉCUPÉRATION": P, "CATÉGORIE": H}[titre]
            ws.cell(r, col + 1, f'=COUNTIFS({crit_an},{plage},{Lc}{r})').border = BORD
            if avec_ca:
                ca = ws.cell(r, col + 2, f'=SUMIFS({K},{crit_an},{plage},{Lc}{r})')
                ca.border, ca.number_format = BORD, '#,##0 "€";-#,##0 "€";"-"'

    bloc(1, "STATUT", [s[0] for s in STATUTS], [(s[1], s[2]) for s in STATUTS], avec_ca=False)
    bloc(4, "CONTACT", [c_ for c_, _ in CONTACTS])
    bloc(8, "PAIEMENT", PAIEMENTS)
    rb_cat = rb + len(CONTACTS) + 3
    # Catégories de produits (recherche par début de nom, ex. « Collier* »)
    rb_save = rb
    rb = rb_cat
    entete(ws, rb, 4, "CATÉGORIE", TITRE)
    entete(ws, rb, 5, "NB", TITRE)
    entete(ws, rb, 6, "CA", TITRE)
    for i, (nom, motif) in enumerate(CATEGORIES, start=1):
        r = rb + i
        ws.cell(r, 4, nom).border = BORD
        ws.cell(r, 5, f'=COUNTIFS({crit_an},{H},"{motif}")').border = BORD
        c = ws.cell(r, 6, f'=SUMIFS({K},{crit_an},{H},"{motif}")')
        c.border, c.number_format = BORD, '#,##0 "€";-#,##0 "€";"-"'
    rb = rb_save + len(PAIEMENTS) + 3
    bloc(8, "RÉCUPÉRATION", [r_ for r_, _ in RECUPERATIONS], avec_ca=False)

    for L, w in zip("ABCDEFGHIJKL", (16, 10, 12, 18, 12, 12, 16, 20, 12, 14, 12, 14)):
        ws.column_dimensions[L].width = w
    ws.column_dimensions["A"].width = 24
    return ws


# ---------------------------------------------------------------- À TRAITER
def onglet_a_traiter(wb, derniere, nb=150):
    ws = wb.create_sheet("À TRAITER", 1)
    ws.sheet_view.showGridLines = False
    ws.merge_cells("A2:J2")
    c = ws.cell(2, 1, "À TRAITER — se met à jour tout seul (commandes non expédiées, de la plus ancienne à la plus récente)")
    c.fill, c.font = fill(TITRE), font("FFFFFF", bold=True, size=14)
    c.alignment = Alignment(horizontal="center", vertical="center")
    ws.row_dimensions[2].height = 26
    cols = [("JOURS", "S", 8), ("STATUT", "N", 20), ("CLIENT", "B", 24), ("N°", "C", 12),
            ("PRODUIT", "H", 26), ("COULEUR", "I", 10), ("PERSONNALISATION", "J", 34),
            ("EMBALLAGE", "G", 14), ("RÉCUPÉRATION", "P", 18), ("TÉLÉPHONE", "F", 13)]
    for j, (t, _, w) in enumerate(cols, start=1):
        entete(ws, 4, j, t)
        ws.column_dimensions[get_column_letter(j)].width = w
    ws.column_dimensions["K"].hidden = True
    for k in range(1, nb + 1):
        r = 4 + k
        # K = n° de ligne de la k-ième commande à traiter dans COMMANDES
        ws.cell(r, 11, f'=IFERROR(MATCH({k},COMMANDES!$V:$V,0),"")')
        for j, (_, src, _) in enumerate(cols, start=1):
            c = ws.cell(r, j, f'=IF($K{r}="","",IF(INDEX(COMMANDES!${src}:${src},$K{r})="","",INDEX(COMMANDES!${src}:${src},$K{r})))')
            c.border = BORD
            c.font = font(bold=j in (2, 7), size=12 if j == 7 else 11)
            c.alignment = Alignment(vertical="top", wrap_text=j == 7)
        ws.cell(r, 1).number_format = '0" j"'
    zone = f"A5:J{4 + nb}"
    cf = ws.conditional_formatting
    for s, fond, pol, _ in STATUTS:
        cf.add(f"B5:B{4 + nb}", FormulaRule(formula=[f'$B5="{s}"'], fill=fill(fond), font=Font(color=pol, bold=True)))
    cf.add(f"A5:A{4 + nb}", FormulaRule(formula=["AND(ISNUMBER($A5),$A5>'TABLEAU DE BORD'!$C$5)"],
                                        fill=fill("FF0000"), font=Font(color="FFFFFF", bold=True)))
    cf.add(zone, FormulaRule(formula=['AND($K5<>"",MOD(ROW(),2)=0)'], fill=fill(CLIENT)))
    ws.freeze_panes = "A5"
    ws.page_setup.orientation = "landscape"
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.print_title_rows = "4:4"
    return ws


# ---------------------------------------------------------------- MODE D'EMPLOI
def onglet_aide(wb):
    ws = wb.create_sheet("MODE D'EMPLOI")
    ws.sheet_view.showGridLines = False
    ws.column_dimensions["A"].width = 3
    ws.column_dimensions["B"].width = 110
    textes = [
        ("COMMENT UTILISER CE FICHIER", True),
        ("", False),
        ("1. Une seule feuille COMMANDES pour toute l'année : plus besoin de créer un onglet par mois.", False),
        ("   → Filtrer un mois : flèche de la colonne DATE PAIEMENT ▸ choisir le mois.", False),
        ("2. Saisissez uniquement les colonnes A à Q (fond bleu / vert) et NOTES. Les colonnes jaunes R à T se calculent seules.", False),
        ("3. Les colonnes CONTACT, PAIEMENT, Emballage, Couleur, STATUT, RÉCUPÉRATION ont une liste déroulante : fini les fautes de frappe.", False),
        ("   → PRODUIT propose la liste aussi, mais accepte un nouveau nom (ajoutez-le ensuite dans l'onglet LISTES).", False),
        ("4. Commande avec plusieurs articles : une ligne par article. Les infos client sont recopiées en gris clair sur les lignes suivantes.", False),
        ("5. Les couleurs de STATUT sont les mêmes qu'avant (VENTE FINALISÉE vert, A COMMANDER rouge, ENVOYE YT bleu ciel…).", False),
        ("6. L'onglet À TRAITER liste seul les commandes en cours (statuts marqués OUI dans LISTES). Le nombre de jours passe en rouge", False),
        ("   au-delà du délai d'alerte (réglable dans TABLEAU DE BORD, cellule jaune C5).", False),
        ("7. Le TABLEAU DE BORD calcule CA, achats, marge, ventes site web / sur place, par mois, statut, réseau, paiement et catégorie.", False),
        ("   → Pour passer à 2027 : changez l'année en C4 et continuez à saisir dans la même feuille.", False),
        ("8. Repères visuels : ADRESSE en orange = livraison sans adresse ; ALERTE rouge = commande en retard ; PAIEMENT rouge = NON PAYE.", False),
        ("", False),
        ("Lien avec RÉSULTAT 2026 (ancien fichier) : les totaux mensuels sont dans TABLEAU DE BORD, colonnes CA (C11:C22) et PRIX ACHAT (D11:D22).", False),
    ]
    for i, (t, gras) in enumerate(textes, start=2):
        c = ws.cell(i, 2, t)
        c.font = font(TITRE if gras else "000000", bold=gras, size=16 if gras else 11)
    return ws


def construire(source, cible, annee=2026):
    lignes = extraire(source, annee)
    produits = sorted({l["produit"] for l in lignes if l["produit"]}, key=str.casefold)
    derniere = PREMIERE + len(lignes) + 1500
    wb = openpyxl.Workbook()
    wb.remove(wb.active)
    plages = onglet_listes(wb, produits)
    onglet_commandes(wb, lignes, plages, derniere)
    onglet_tableau(wb, derniere, annee)
    onglet_a_traiter(wb, derniere)
    onglet_aide(wb)
    wb.active = 0
    wb.calculation.fullCalcOnLoad = True
    wb.save(cible)
    return len(lignes)


if __name__ == "__main__":
    n = construire(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 2026)
    print(f"{n} lignes importées")
