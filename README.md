# Assignment-12-Let's Build Our Store

## Q.1 useContext vs Redux

`useContext` and Redux are both state management tools in React, but they serve different purposes and have some key differences. Let's explore each one:

### `useContext`:

1. **Core Purpose:**

   - `useContext` is a React Hook that allows you to subscribe to React context without introducing a global state management library.
   - It is used for sharing values like themes, authentication status, or any other data between components without having to pass props through every level of the component tree.

2. **Scope:**

   - Limited to the component tree where the context provider is placed. It's generally best suited for smaller to medium-sized applications.

3. **Simplicity:**

   - Simpler to set up and use compared to Redux, especially for smaller projects.

4. **Integration:**
   - Built into React, so there's no need to install additional libraries.

### Redux:

1. **Core Purpose:**

   - Redux is a global state management library for managing complex state in larger applications.
   - It provides a centralized store that holds the entire state of the application, and components can interact with this store through actions and reducers.

2. **Scope:**

   - Global state management, suitable for large-scale applications where managing state in a centralized manner becomes crucial.

3. **Predictability and Control:**

   - Redux enforces a unidirectional data flow and a predictable state, which can make it easier to reason about the state changes in the application.

4. **Middleware:**
   - Redux supports middleware, allowing you to introduce custom logic between the dispatching of an action and the moment it reaches the reducer. This is beneficial for tasks like asynchronous operations.

### When to use each:

- **Use `useContext` when:**

  - You have a small to medium-sized application.
  - The state you're managing is localized to a specific part of your component tree.
  - You want a simple and straightforward solution without introducing additional dependencies.

- **Use Redux when:**
  - You have a larger application with complex state management needs.
  - You need a predictable state container and a clear way to manage actions and side effects.
  - Inter-component communication becomes challenging without a centralized state.

### Combining `useContext` and Redux:

It's also worth noting that you can use both in the same application. For instance, you might use `useContext` for simple local state management within certain components and use Redux for managing the global state of the application. This hybrid approach allows you to leverage the simplicity of `useContext` where appropriate and the power of Redux for more complex state scenarios.
