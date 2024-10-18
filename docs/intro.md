---
sidebar_position: 1
---
# Tutorial Intro

Welcome to HydraFP, a powerful and intuitive functional programming library designed to elevate your Java development experience. HydraFP brings the elegance and robustness of functional programming paradigms to the Java ecosystem, enabling developers to write cleaner, more maintainable, and safer code.

## Why Choose HydraFP?

HydraFP stands out in the Java landscape by offering:

1. **Pure Functional Approach**: Embrace immutability and side-effect-free programming to enhance code predictability and reduce bugs.

2. **Powerful Effect System**: Manage and compose side effects with ease, bringing better control and transparency to your applications.

3. **Rich Functional Toolset**: From monads to lenses, HydraFP provides a comprehensive suite of functional programming constructs.

4. **Java-First Design**: Tailored specifically for seamless integration with existing Java projects, allowing for gradual adoption.

5. **Performance Optimized**: Enjoy the benefits of functional programming without sacrificing performance, thanks to features like tail call optimization, memoization, and lazy evaluation.

## Key Features

- 🛡️ **Effect System**: Safely compose and manage side effects in your applications.
- 🧩 **Algebraic Data Types**: Leverage `Option`, `Either`, `Try`, and more to write more expressive and type-safe code.
- 🔄 **Immutable Collections**: Work with thread-safe, persistent data structures for concurrent programming peace of mind.
- 🔍 **Pattern Matching**: Utilize expressive and type-safe pattern matching in Java, enhancing code readability and reducing errors.
- 🚀 **Performance Optimizations**: Write efficient functional code with built-in optimizations.

## Quick Start Examples

Let's dive into some quick examples to see HydraFP in action:

### Working with Option

```java
import hydrafp.io.core.adt.Option;

Option<String> maybeName = Option.of("Alice");
String greeting = maybeName
    .map(name -> "Hello, " + name + "!")
    .getOrElse("Hello, guest!");

System.out.println(greeting);  // Output: Hello, Alice!
```

### Error Handling with Either

```java
import hydrafp.io.core.adt.Either;

Either<String, Integer> result = Either.right(42);
String message = result.fold(
    error -> "Error: " + error,
    value -> "Success: " + value
);

System.out.println(message);  // Output: Success: 42
```

### Managing Side Effects

```java
import hydrafp.io.core.effect.Effect;
import hydrafp.io.core.effect.Effects;

// Define an effect that simulates a database operation
Effect<String> fetchUserData = Effects.defer(() -> {
    System.out.println("Fetching user data from database...");
    return Effects.pure("User: John Doe");
});

// Define another effect that simulates sending an email
Effect<String> sendEmail = Effects.defer(() -> {
    System.out.println("Sending welcome email...");
    return Effects.pure("Email sent successfully");
});

// Compose multiple effects
Effect<String> userOnboardingProcess = fetchUserData.flatMap(userData -> 
    sendEmail.map(emailResult -> userData + ", " + emailResult)
);

// Create a runtime to execute the effect
SimpleRuntime runtime = new SimpleRuntime();

// Execute the composed effect
String result = userOnboardingProcess.unsafeRunSync(runtime);

System.out.println("Final result: " + result);

// Output:
// Fetching user data from database...
// Sending welcome email...
// Final result: User: John Doe, Email sent successfully
```

### Using Immutable List

```java
import hydrafp.io.core.collections.ImmutableList;

ImmutableList<Integer> list = ImmutableList.of(1, 2, 3, 4, 5);
ImmutableList<Integer> doubled = list.map(x -> x * 2);

System.out.println(doubled.toReadableString());  // Output: [2, 4, 6, 8, 10]
```

## Getting Started

Integrating HydraFP into your project is straightforward. Add the JitPack repository to your build file:

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

Then, include HydraFP as a dependency:

```xml
<dependency>
    <groupId>com.github.mahmoudxyz</groupId>
    <artifactId>HydraFP</artifactId>
    <version>Tag</version>
</dependency>
```

## Dive Deeper

HydraFP offers a wealth of features and concepts to explore. Our comprehensive documentation and examples will guide you through:

- Using the Effect system for side-effect management
- Working with Algebraic Data Types like Option, Either, and Try
- Leveraging Immutable Collections for concurrent programming
- Applying Pattern Matching for more expressive code
- Optimizing performance with HydraFP's built-in features

## Join the HydraFP Community

We believe in the power of community-driven development. Join us on our journey to make functional programming in Java more accessible and powerful:

- Contribute to the project on GitHub
- Share your experiences and ask questions in our community forums
- Follow us on social media for the latest updates and tips

## License

HydraFP is open-source software, released under the MIT license. Feel free to use, modify, and distribute it in your projects.

Embrace the power of functional programming in Java with HydraFP. Start writing cleaner, safer, and more maintainable code today!