---
name: gof-review
description: Review project, module, or file to detect code smells and determine if a GoF pattern can improve the architecture.
---

# GoF Review

## Purpose
Analyze a codebase, file, or code fragment for high coupling, poor abstraction, or rigid logic. Suggest a suitable Gang of Four (GoF) design pattern to fix the root cause. This skill acts mainly as an inspector.

## Invocation Modes

### Direct invocation
User calls `/gof-review` or asks to check their architecture.
1. Understand the code context.
2. Search for common Object-Oriented smells (e.g. massive conditionals -> Strategy, deep switch cases -> Factory, god objects -> Facade/Mediator, tight coupling -> Adapter).
3. Open `../gof-base/pattern-map.md`.
4. Decide which patterns might resolve the problem.
5. Read the relevant pattern file (e.g. `../gof-base/patterns/behavioral.md`).
6. Present the proposed pattern, explaining which class should assume which GoF Role. **Do not modify code unless asked**.

### Contextual invocation
Keep code edits purely logical if the user requested a review inside another task. Suggest a pattern briefly rather than narrating heavy textbook theory.