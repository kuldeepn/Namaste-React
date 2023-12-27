# Assignment-05-Let's get Hooked

## What is the difference between Named Export, Default export and \* as export?

Whenever we have to export multiple things from same component that time we can use Named Export.
Default Export we can export once in the component this is the recommended way when we have to export single thing.
You can use the export \* as syntax to export all the named exports from a module as an object
`import \* as utils from './utils';`

## What is the importance of `config.js` file

A `config.js` file in a React project, it likely contains custom configurations specific to that project. These configurations could include settings for routing, global constants, API endpoints, or other application-specific parameters.

## What are React Hooks?

React hooks we can say a normal JS functions which has some logic behind it. These are pre-defined functions in react.

- `Eg. useState()` -> It is used to create superpowerful variables.
- const [hello,setHello]=useState([])
- `hello & setHello`-> are state variable
- `[]` -> Initial value of state variable

## Why do we need a `useState` Hook?

It is used to create superpowerful variables. Whenever we want to re-render the component that time we can use useState hook so basically whenever state variable updates react re-renders the component.
`Eg. const [hello,setHello]=useState([])`

# Blue Print

/_
Header
--Logo
--Nav Items
Body
--Search
--RestaurantContainer
--RestaurantCard
Footer
--Copyright
--Address
--Contact
_/
