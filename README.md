# Assignment-11-Data is the new oil

## Q.1 What is prop drilling?

- Prop drilling is nothing but sharing the props to the nested components where mediator components are just the mediator for sharing the props.
- For example component A is a parent of B and B is a parent of C now if component want to share the props with component C so A has to use component B to reach C that is called as props driliing.

## Q.2 What is lifting the state up?

- Lifting the state up means parent controlling the child component that is called as `controlled component` and the component which has it's own state and managing by itself knows as `uncontrolled component`.

## Q.3 What is Context Provider and Context Consumer?

`Context Provider`

- Context Proider is used to provide the context props to throughout the app & whenever we need to update the default value at that time we can use the context provider.

`Context Consumer`

- Context Consumer is alternative way of hook useContext generally used for class based components

## Q.4 If you don’t pass a value to the provider does it take the default value?

- No it will throw an error because whenever we are using provider we have to mention the value prop for it.
