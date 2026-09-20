<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Design_patterns_Elements_of_Reusable_Object-Oriented_Software_book_cover.jpg/220px-Design_patterns_Elements_of_Reusable_Object-Oriented_Software_book_cover.jpg" width="120" alt="Gang of Four Book Cover" />
</p>

<h1 align="center">GoF Patterns Agent Skills</h1>

<p align="center">
  A composite skill package for AI coding agents to apply Gang of Four (GoF) Design Patterns.
</p>

<p align="center">
  <a href="https://github.com/tikhomirov/gof-patterns-master/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/tikhomirov/gof-patterns-master?style=flat-square"></a>
  <a href="https://github.com/tikhomirov/gof-patterns-master/blob/main/package.json"><img alt="Node" src="https://img.shields.io/badge/node-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white"></a>
  <a href="https://github.com/tikhomirov/gof-patterns-master/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square"></a>
  <img alt="Agents" src="https://img.shields.io/badge/agents-Claude%20Code%20%7C%20OpenCode%20%7C%20Pi-purple?style=flat-square">
</p>

<p align="center">
  <a href="https://en.wikipedia.org/wiki/Design_Patterns">Design Patterns (Wikipedia)</a> ·
  <a href="https://github.com/tikhomirov/gof-patterns-master/releases">Releases</a>
</p>

---

## English

GoF Patterns Agent Skills is a skill package for AI coding agents.

It turns your agent into a Senior Software Architect capable of performing:
- **Detection**: Analyzes code to find coupling problems and suggests 1-3 suitable patterns.
- **Generation**: Scaffolds exact GoF structures (Creational, Structural, Behavioral) with strict component roles.
- **Refactoring**: Isolates interfaces, resolves class responsibilities, and modifies your code to follow strict Object-Oriented principles.

### Install

Run the interactive installer via npx:

```bash
npx github:tikhomirov/gof-patterns-master install
```

When you run it globally, it installs into `~/.agents/skills`, `~/.claude/skills`, and `~/.pi/skills`.

## Skills

Skills are activated when you mention them in conversation with the agent or call them directly via `/skill_name`.

For example:
- `/gof-patterns analyze this file for code smells.`
- `/gof-patterns generate a Command pattern in PHP.`
- `Please refactor this conditional hell using gof-patterns Strategy.`

## How it works

When the agent triggers `gof-patterns`, it will:
1. Examine what `action` you requested (analyze, generate, or refactor).
2. Look up the specific pattern category (`creational.md`, `structural.md`, or `behavioral.md`).
3. Follow the strict definitions specified in the GoF Knowledge Base.
4. Construct or modify your code based on Object-Oriented principles.

---

## Русский

GoF Patterns Agent Skills — это набор навыков для AI-агентов.

Скилл превращает вашего агента в Senior Software Architect, предоставляя возможности:
- **Анализ**: Ищет в предоставленном коде "запахи" (проблемы связности) и предлагает подходящие паттерны проектирования.
- **Генерация**: Генерирует каркасы всех 23 паттернов (Порождающие, Структурные, Поведенческие), соблюдая все классические роли.
- **Рефакторинг**: Переписывает ваш код с учетом строгих принципов проектирования ("Программируйте на уровне интерфейсов", "Композиция вместо наследования"). 

### Установка

Запустите установщик через npx:

```bash
npx github:tikhomirov/gof-patterns-master install
```

При глобальной установке скиллы будут развернуты в `~/.agents/skills`, `~/.claude/skills` и `~/.pi/skills` и станут доступны во всех ваших проектах.

## Skills

Скиллы активируются, когда вы упоминаете их в разговоре с ИИ или вызываете явно `/имя_скилла` (в режиме командной строки агента).

Например:
- `/gof-patterns проанализируй этот класс`
- `/gof-patterns создай интерфейсы для паттерна Наблюдатель`
- `Сделай рефакторинг этого метода с применением gof-patterns (Фабрика).`

## Как это работает

При упоминании `gof-patterns` агент:
1. Определяет тип вашей задачи: Анализ (Detection), Генерация (Generation) или Рефакторинг (Refactoring).
2. Читает `knowledge-base.md` скилла, чтобы найти соответствующую группу паттернов.
3. Открывает файл с эталонными ролями (`patterns/creational.md`, `structural.md` или `behavioral.md`).
4. Применяет принципы проектирования к вашему коду, гарантируя инкапсуляцию, правильную иерархию и низкую связность.
