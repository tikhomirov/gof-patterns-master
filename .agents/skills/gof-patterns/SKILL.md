---
name: gof-patterns
description: Analyze, Generate, or Refactor code using Gang of Four (GoF) Object-Oriented Design Patterns.
---

# GoF Patterns Master Skill

This composite skill acts as a Senior Software Architect and applies GoF patterns.

## Concept

Always follow core GoF principles:
1. "Program to an interface, not an implementation."
2. "Favor object composition over class inheritance."

## Required Parameters (Implicit JSON Schema)

The user should implicitly or explicitly provide:
- `action`: `'analyze' | 'generate' | 'refactor'`
- `pattern`: Name of the pattern (optional for analyze)
- `code`: The source code to process (optional for generate)
- `language`: Target programming language

## Actions (Routing logic)

Depending on the `action`, execute the following workflow:

### 1. Action: `analyze` (Detection)
**Triggered when:** User asks to check code for "smells" or suggests a pattern.
**Logic:**
- Analyze the code structure.
- Find areas where coupling is high or inheritance is abused.
- Suggest 1-3 suitable GoF patterns.
- Output formatting: Explain *why* the smell exists, propose the pattern, and describe Roles (e.g., Creator, Product).

### 2. Action: `generate` (Generation)
**Triggered when:** User asks for a template, scaffold, or boilerplate for a specific GoF pattern.
**Logic:**
- Identify the requested pattern.
- Read definitions from `knowledge-base.md` and specific recipes mapping.
- Generate a reference implementation in the chosen language.
- Output formatting: Diagram (Mermaid) + Interface definition + Concrete implementations + Client code.

### 3. Action: `refactor` (Refactoring)
**Triggered when:** User asks to rewrite their code using a specific pattern.
**Logic:**
- Identify the pattern boundaries in user code.
- Extract interfaces.
- Build the concrete roles according to the selected GoF pattern.
- Integrate the changes, explaining which new class handles which GoF Role.
- Ensure the result eliminates the code smell from the original implementation.

## Context Mapping

Whenever a concrete `<pattern>` is mentioned, you MUST read the corresponding category documentation before providing an answer:
- `patterns/creational.md` (Abstract Factory, Builder, Factory Method, Prototype, Singleton)
- `patterns/structural.md` (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy)
- `patterns/behavioral.md` (Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor)
