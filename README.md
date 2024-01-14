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
