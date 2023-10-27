
# Assignment-01-Inception

## What is Emmet?

Emmet is a web development tool and shorthand syntax for quickly writing HTML and CSS code. It was originally developed as a plugin for text editors like Sublime Text, but it has since been integrated into many popular text editors and integrated development environments (IDEs).

Here are some examples of Emmet abbreviations:

html:5 => generates the basic structure of an HTML5 document.
ul>li*5 => generates an unordered list with five list items.
div.container>div.row>div.col-md-6 => creates a basic Bootstrap-like layout structure.
p.my-paragraph => generates a paragraph element with a class "my-paragraph."

## Difference between a Library and Framework?

In summary, libraries are more like collections of functions and tools that you can use in your code to perform specific tasks, while frameworks are more comprehensive and impose a structure and conventions on your application, requiring you to fit your code into their predefined architecture.

## What is CDN? Why do we use it?

React is a popular JavaScript library for building user interfaces. While React applications are typically developed using package managers like npm or Yarn, it's also possible to include React via a CDN (Content Delivery Network) in a web project. This is useful for quickly prototyping or adding React to a simple web page without setting up a development environment.

## Why is React known as React?

The name "React" is derived from the library's core concept of "reactive" or "declarative" programming. In React, you define how your user interface should look based on the application's current state, and React automatically updates the user interface when the underlying data or state changes. This concept of declarative rendering, where you specify what the UI should look like in response to changes, and React takes care of making those changes efficiently, is at the heart of React's design philosophy.

## What is cross-origin in the script tag?

In practice, the crossorigin attribute is most commonly used with <img>, <script>, and <link> elements when loading external content that may be subject to CORS restrictions. By specifying the appropriate crossorigin value, you can ensure that the browser behaves in a way that aligns with the security and access requirements of the external resource you are trying to use. This helps prevent security vulnerabilities and ensures a safer web browsing experience.

## What is the difference between React and ReactDOM?

React is the library responsible for defining and managing UI components and their state, while ReactDOM is the package within the React ecosystem that handles the rendering of those components in the browser's DOM

## react.development.js vs react.production.js files via CDN?

during development, you should use react.development.js to take advantage of the helpful debugging information and warnings it provides. However, when deploying your application to a production environment, you should switch to using react.production.js to reduce the file size and improve performance
