# GoF Patterns Master

A composite skill for AI coding agents to detect, generate, and refactor code using Gang of Four (GoF) Object-Oriented Design Patterns.

## Installation

This skill provides an installer modeled after `dandy-code-skills`.

### Global Installation

To install globally to `~/.agents` and `~/.claude` (and `~/.pi`):

```bash
npm install -g gof-patterns-master
gof-patterns-install install --global
```

### Local Installation

To install into the current workspace directory (`./.agents` etc.):

```bash
npx gof-patterns-master install
```

## Features

- **Detection**: Analyzes source code to identify code smells where GoF patterns apply.
- **Generation**: Scaffolds boilerplate pattern code using the correct Roles (e.g. `AbstractFactory`, `Product`).
- **Refactoring**: Safely refactors user-provided code logically splitting it across required abstract constraints and composite interfaces.

## Usage in Prompt

Just ask your AI agent:

- _"Run gof-patterns to analyze this component."_
- _"Refactor this conditional hell using gof-patterns Strategy."_
- _"Generate an Abstract Factory pattern boilerplate in TypeScript using gof-patterns."_
