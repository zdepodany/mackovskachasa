# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Web pro **Mackovskou chasu z. s.** (mackovskachasa.cz) — spolek z Mackovic, Jižní Morava, pořádající krojované hody.

### Tech stack

Vanilla HTML, CSS, JS — žádné frameworky, žádný bundler.

### Sekce / stránky

- Hero / úvod
- Cíle spolku
- Krátká historie
- Členové
- Stanovy
- Kontakt
- **Podstránky pro každé hody** (i připravované): datum, vystupující, lidé v krojované chase, program, sponzoři

### Design direction

Web má dýchat nádechem krojovaných hodů a Jižní Moravy (folklórní estetika, teplé barvy, lidové ornamenty), zároveň využívat moderní UX přístupy a být lehce prozkoumatelný.

## Installed Skills

Three design skills jsou nainstalované v `.agents/skills/`:

- **design-taste-frontend** — anti-template frontend skill; infers design direction from context before writing code.
- **high-end-visual-design** — enforces high-end agency aesthetics: specific fonts, spacing, shadows, card structures, animations.
- **emil-design-eng** — UI polish, component design, animation decisions, invisible details.

Aktivovat pomocí `/design-taste-frontend`, `/high-end-visual-design`, nebo `/emil-design-eng` při práci na UI. Pro tento projekt je vhodné kombinovat všechny tři.
