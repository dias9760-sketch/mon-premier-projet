"""Assemble la version simple en UN SEUL fichier HTML autonome (fonctionne sans internet).

Usage : python construire.py  →  ZARAHISSI-Simple.html
"""
from pathlib import Path

ici = Path(__file__).parent
page = (ici / "src" / "index.html").read_text(encoding="utf-8")
morceaux = {
    "/*SHEETJS*/": (ici.parent / "plateforme" / "src" / "vendor" / "xlsx.mini.min.js").read_text(encoding="utf-8"),
    "/*APP*/": (ici / "src" / "app.js").read_text(encoding="utf-8"),
}
for repere, contenu in morceaux.items():
    assert "</script" not in contenu.lower(), repere
    page = page.replace(repere, contenu, 1)
sortie = ici / "ZARAHISSI-Simple.html"
sortie.write_text(page, encoding="utf-8")
print(f"{sortie.name} : {sortie.stat().st_size // 1024} Ko")
