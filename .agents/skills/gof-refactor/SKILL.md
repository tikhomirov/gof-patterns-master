---
name: gof-refactor
description: Safely refactor provided code by logically splitting it according to a chosen GoF design pattern constraints.
---

# GoF Refactor

## Purpose
Take existing procedural, messy, or tightly-coupled code and rewrite it mapping logic strictly to the boundaries and roles of a specific Gang of Four pattern.

## Workflow

When the user calls `/gof-refactor <pattern>`:
1. Identify the requested pattern and locate its file via `../gof-base/pattern-map.md`.
2. Load the pattern exact roles definition (e.g. `../gof-base/patterns/structural.md`).
3. Break the user's code into interfaces and concrete implementations.
4. Replace rigid references with aggregations or composition ("Favor composition over inheritance").
5. Modify the client code (the entry point) to use the new pattern structure.
6. Print the unified result, clearly separating the files (or blocks) labeled by their GoF Role (e.g. "Here is your `ConcreteStrategy`").

## Hard rules
Do not break existing business logic. If you extract an interface, ensure all its concrete siblings implement it fully. Do not leave placeholder logic—the code must compile/run after the refactoring.