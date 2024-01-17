# Assignment-09-Optimizing Our App

## Q.1 When and why do we need lazy() ?

Whenever there is a big app and we want to optimize our app performance so it is better way to split that one js file into multiple that time we can use lazy().

## Q.2 What is suspense?

Suspense is a component which is used with lazy provided by react basically it holds the particular component enclosed inside it and makes accessible to react whenever it trying to access that components code.

## Q.3 Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- Whenever we want to access new component of lazy loading that component/js bundler file takes some time to get response to the browser that time react is very fast and it does not finds the code, that's why react suspends that component and we get above error.

- So Suspense component handles this state and prevent this error.

## Q.4 Advantages and disadvantages of using this code splitting pattern?

`Advantages`

- Improved Initial Page Load Performance
- Efficient Resource Usage
- Parallel Loading

`Disadvantages`

- It will not be helpful for smaller apps
- Tooling and configuration
