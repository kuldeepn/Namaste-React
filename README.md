# Assignment-04-Talk is cheap show me the code

## Is JSX mandatory for React?

No, it is not mandatory to use JSX in react we can use React.createElement.

## Is ES6 mandatory for React?

No, ES6 is not mandatory for React we can achieve React by using older scripts as well.

## How can I write comments in JSX?

{/_ This is a JSX comment _/}

## What is <React.Fragment></React.Fragment> and <></> ?

Using React.Fragment or the shorthand <> and </> allows you to group elements without affecting the DOM structure, which can be especially useful in situations where you need to return adjacent JSX elements without wrapping them in a div or other container.

## What is Virtual DOM?

Virtual DOM is a blueprint of Real DOM whenever particular node changes it checks with Real DOM and only that particular node changes that way react makes faster app reloading.

## What is Reconciliation in React?

When the state of a React component changes, React needs to figure out how to update the DOM to reflect these changes. It does so through a process called reconciliation, where it compares the newly generated element tree with the previous one and determines the minimum number of changes needed to update the UI.

## What is React Fiber?

The primary goal of React Fiber is to improve the performance and responsiveness of React applications, especially for complex and asynchronous tasks. It's an internal architecture change that allows React to work in a more incremental and prioritized manner, making it capable of handling interruptions, splitting work into chunks, and optimizing the rendering process.

##
