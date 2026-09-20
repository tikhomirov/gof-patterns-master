---
name: gof-generator
description: Generate complete, standard GoF boilerplate templates from scratch for any language.
---

# GoF Generator

## Purpose
Scaffold GoF patterns accurately instead of relying on loose hallucinations. Provide standard, textbook-correct structural boilerplates.

## Workflow

When the user calls `/gof-generator <pattern> [language]`:
1. Use `../gof-base/pattern-map.md` to find which category the requested pattern belongs to.
2. Read the specific category file (e.g. `../gof-base/patterns/creational.md`) to extract the exact roles.
3. Write well-commented code in the target programming language that stubs out these roles.
4. Include a dummy `Client` usage block so the user sees how the components interact. 

## Hard rules
Always name the dummy classes so they clearly reflect their GoF Role (e.g., `ShapeFactory` for `ConcreteFactory`), rather than generic variables `Foo` or `Bar`. Do not append extraneous features. Only generate the bare minimum required to satisfy the pattern logic.