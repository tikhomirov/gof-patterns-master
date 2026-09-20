# Creational Patterns

## Factory Method
**Intent**: Define an interface for creating an object, but let subclasses decide which class to instantiate.
**Roles**: `Product`, `ConcreteProduct`, `Creator`, `ConcreteCreator`.

## Abstract Factory
**Intent**: Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
**Roles**: `AbstractFactory`, `ConcreteFactory`, `AbstractProduct`, `ConcreteProduct`, `Client`.

## Builder
**Intent**: Separate the construction of a complex object from its representation so that the same construction process can create different representations.
**Roles**: `Builder`, `ConcreteBuilder`, `Director`, `Product`.

## Prototype
**Intent**: Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.
**Roles**: `Prototype`, `ConcretePrototype`, `Client`.

## Singleton
**Intent**: Ensure a class only has one instance, and provide a global point of access to it.
**Roles**: `Singleton`.
