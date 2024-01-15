# Assignment-08-Let's Get Classy

## Q.1 How do you create Nested Routes react-router-dom cofiguration

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);
```

## Q.2 Read about createHashRouter, createMemoryRouter from React Router docs.

`createHashRouter`

This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

`createMemoryRouter`

Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

## Q.3 What is the order of life cycle method calls in `Class Based Component` ?

- constructor()
- render()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

## Q.4 Why do we use `componentDidMount` ?

We use componentDidMount() for API calling because it calls after constructor and render so all the schema will be loaded first after that API call wil take place.

## Q.5 Why do we use `componentWillUnmount` ? Show with example.

- `componentWillUnmount` is used to cleanup the app basically when we use the component and switch to another one so previous component should be clean up for seamless performance of the app.
- As React app is a SPA.

## Q.6 (Research) Why do we use `super(props)` in constructor?

super(props) is used to inherit the properties and access of variables of the React parent class when we initialize our component.
The main difference between super() and super(props) is this.props is undefined in child's constructor if we use super(), but if we use this.props in super(props) then it contains the passed props.

## Q.7 Why can't we have the `callback funtion` of  `useEffect async` ?

useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when function is unmounted). If we make the callback function as async then it will return `promise` and it will affect the callback funciton being called.