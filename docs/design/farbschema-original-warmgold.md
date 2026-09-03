# Farbschema: Original (Warm-Gold)

Das Farbschema, mit dem die Website bis 2026-09-03 lief, bevor auf dem Branch
`farbschema-experiment` ein neues Schema (Schwarz/Petrol-Teal) ausprobiert
wurde. Hier abgelegt, damit es sich jederzeit wiederherstellen lässt, ohne im
Git-Verlauf danach suchen zu müssen.

## Werte

Aus `app/globals.css`, Stand vor dem Farbexperiment:

```css
:root {
  --background: #17140f;
  --foreground: #efe9dc;
}

@theme inline {
  --color-ink: #17140f;
  --color-bone: #efe9dc;
  --color-brass: #b8925a;
  --color-brass-bright: #d4a968;
  --color-brass-deep: #8c6a3a;
  --color-rust: #8a4a34;
  --color-slate: #4a5049;
}
```

## Rollen

| Token               | Wert      | Rolle                                                             |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `--color-ink`        | `#17140f` | Dunkler Section-Hintergrund (Hero, Leistungen) und Fließtext auf hellem Grund |
| `--color-bone`       | `#efe9dc` | Warmes Creme: heller Section-Hintergrund (Problem, Referenzen) und Text auf dunklem Grund |
| `--color-brass`      | `#b8925a` | Haupt-Akzentfarbe (Eyebrows, Hero-Highlight, Icons, Buttons auf dunklem Grund) |
| `--color-brass-bright` | `#d4a968` | Hover-Zustand für Brass-Elemente                                  |
| `--color-brass-deep` | `#8c6a3a` | Akzentfarbe für Text auf hellem Bone-Hintergrund (mehr Kontrast nötig) |
| `--color-rust`       | `#8a4a34` | Kleine dekorative Akzente (z. B. Bullet-Marker in der Problem-Section) |
| `--color-slate`      | `#4a5049` | Dezente Rahmen/Trennlinien                                          |

## Wiederherstellen

Die einfachste Variante: `app/globals.css`s `:root`- und `@theme inline`-Block
mit den Werten oben überschreiben. Betroffen sind ausschließlich CSS-Variablen
in dieser einen Datei — keine Komponenten-Klassen mussten für das
Farbexperiment umbenannt werden (nur `--color-ink-soft` kam als neuer Token
dazu, der bei Rückkehr zu diesem Schema wieder entfernt werden kann).

Alternativ per Git direkt aus diesem Commit-Zeitpunkt holen:

```sh
git show <commit-vor-farbexperiment>:app/globals.css
```

oder, falls gesetzt, über den Tag:

```sh
git show farbschema-original:app/globals.css
```
