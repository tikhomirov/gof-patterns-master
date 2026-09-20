# Behavioral Patterns

## Observer
**Intent**: Define a one-to-many dependency between objects so that when one changes state, all dependents are notified.
**Roles**: `Subject`, `Observer`, `ConcreteSubject`, `ConcreteObserver`.

## Strategy
**Intent**: Define a family of algorithms, encapsulate each one, and make them interchangeable.
**Roles**: `Strategy`, `ConcreteStrategy`, `Context`.

## State
**Intent**: Allow an object to alter its behavior when its internal state changes.
**Roles**: `Context`, `State`, `ConcreteState`.

## Command
**Intent**: Encapsulate a request as an object, letting you parameterize clients with different requests.
**Roles**: `Command`, `ConcreteCommand`, `Client`, `Invoker`, `Receiver`.

## Chain of Responsibility
**Intent**: Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
**Roles**: `Handler`, `ConcreteHandler`, `Client`.

## Template Method
**Intent**: Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
**Roles**: `AbstractClass`, `ConcreteClass`.

## Mediator
**Intent**: Define an object that encapsulates how a set of objects interact.
**Roles**: `Mediator`, `ConcreteMediator`, `Colleague`, `ConcreteColleague`.

## Iterator
**Intent**: Provide a way to access the elements of an aggregate object sequentially.
**Roles**: `Iterator`, `ConcreteIterator`, `Aggregate`, `ConcreteAggregate`.

## Visitor
**Intent**: Represent an operation to be performed on the elements of an object structure.
**Roles**: `Visitor`, `ConcreteVisitor`, `Element`, `ConcreteElement`, `ObjectStructure`.

## Memento
**Intent**: Without violating encapsulation, capture and externalize an object's internal state.
**Roles**: `Memento`, `Originator`, `Caretaker`.

## Interpreter
**Intent**: Given a language, define a representation for its grammar and an interpreter.
**Roles**: `AbstractExpression`, `TerminalExpression`, `NonterminalExpression`, `Context`, `Client`.
