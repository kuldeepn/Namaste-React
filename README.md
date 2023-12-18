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

In React, reconciliation is the process by which the virtual DOM gets updated to reflect changes in the underlying data or state. 
When there are changes in the state or props of a component, React performs a process called reconciliation to determine what changes need to be made in the DOM.

## What is React Fiber?

Fiber was introduced to enhance the rendering pipeline by allowing React to break down the rendering work into smaller chunks or units called fibers. 
This enables React to prioritize and schedule these units more efficiently, making it possible to interrupt and resume rendering tasks, 
handle updates incrementally, and better support concurrent rendering.

## Why we need keys in React? When do we need keys in React?

Whenever we are accesing large array in that case React will not know which element it should give first priority  or second, so if new element is added
in that case React will update all the elements to check all elements are present and this one is new element but if we are giving keys then in that 
case React will render that particular element only.

## Can we use index as keys in React?

It is not recomended to use index as key but if last option is not there in that case we can usen  
