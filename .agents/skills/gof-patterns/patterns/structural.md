# Structural Patterns

## Adapter
**Intent**: Convert the interface of a class into another interface clients expect.
**Roles**: `Target`, `Client`, `Adaptee`, `Adapter`.

## Bridge
**Intent**: Decouple an abstraction from its implementation so that the two can vary independently.
**Roles**: `Abstraction`, `RefinedAbstraction`, `Implementor`, `ConcreteImplementor`.

## Composite
**Intent**: Compose objects into tree structures to represent part-whole hierarchies.
**Roles**: `Component`, `Leaf`, `Composite`, `Client`.

## Decorator
**Intent**: Attach additional responsibilities to an object dynamically.
**Roles**: `Component`, `ConcreteComponent`, `Decorator`, `ConcreteDecorator`.

## Facade
**Intent**: Provide a unified interface to a set of interfaces in a subsystem.
**Roles**: `Facade`, `Subsystem classes`.

## Flyweight
**Intent**: Use sharing to support large numbers of fine-grained objects efficiently.
**Roles**: `Flyweight`, `ConcreteFlyweight`, `UnsharedConcreteFlyweight`, `FlyweightFactory`, `Client`.

## Proxy
**Intent**: Provide a surrogate or placeholder for another object to control access to it.
**Roles**: `Proxy`, `Subject`, `RealSubject`.
