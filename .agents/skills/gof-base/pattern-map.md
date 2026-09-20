# Pattern Map

Use this map to correctly lazy-load the detailed GoF pattern instructions depending on the detected code smell or user request.

| Pattern Family | Contains Patterns | Path |
| --- | --- | --- |
| Creational | Abstract Factory, Builder, Factory Method, Prototype, Singleton | `patterns/creational.md` |
| Structural | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy | `patterns/structural.md` |
| Behavioral | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor | `patterns/behavioral.md` |

## Laziness Rule
Do NOT hallucinate pattern structures from prior training data. Always use `read` tool to load the specific category file (e.g. `patterns/creational.md`) before generating or refactoring code for that pattern.