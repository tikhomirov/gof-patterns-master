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

| Skill | Use when |
|---|---|
| `gof-review` | You want to check code/file for architectural smells and find a matching GoF pattern. |
| `gof-refactor` | You already have a mess and want the agent to strictly rewrite it using a designated pattern. |
| `gof-generator` | You strictly need a boilerplate GoF scaffolding from scratch. |

For example:
- `/gof-review`
- `/gof-refactor Please rewrite this using the Strategy Pattern.`
- `/gof-generator Abstract Factory in TypeScript`

## How it works

The package relies on lazy-loading, similar to Dandy Code.
Agents load the files in exactly this order:
1. The triggered `SKILL.md` (e.g. `gof-review/SKILL.md`).
2. `gof-base/pattern-map.md` to map the detected smell or user request to a category.
3. The specific detailed recipe (e.g. `gof-base/patterns/behavioral.md`).

This prevents the agent from hallucinating properties of patterns and breaking context limitations.

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

| Skill | Когда использовать |
|---|---|
| `gof-review` | Вы хотите проанализировать файл/код на наличие «запахов» и подобрать паттерн. |
| `gof-refactor` | У вас есть монолитный метод/класс и нужно переписать его с применением конкретного паттерна. |
| `gof-generator` | Нужно сгенерировать готовый каркас (boilerplate) для любого паттерна. |

Примеры вызова:
- `/gof-review`
- `/gof-refactor Перепиши этот метод через паттерн Стратегия.`
- `/gof-generator Абстрактная Фабрика на Go`

## Как это работает

Система использует «ленивую загрузку» (lazy-loading) инструкций, чтобы не перегружать контекст:
1. Агент читает выбранный `SKILL.md` (например, `gof-refactor`).
2. Затем подгружает «карту паттернов» `gof-base/pattern-map.md`.
3. Загружает только нужную часть базы знаний (например, `gof-base/patterns/behavioral.md`).

Такая маршрутизация гарантирует, что агент не будет выдумывать (галлюцинировать) детали паттернов из старой памяти, а использует эталонные правила ООП.
