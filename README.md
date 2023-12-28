# Assignment-06-Exploring the World

## What is a Microservice?

Microservice is a project architecture which industry follows. It called as `signle responsibilty architecture or separation of concerns`.

- It has different microservices that are independent itself like UI,BE,DB & etc.
- So we can have our UI written in different tech and our BE in different language.
- All these services are running on different ports like UI:1234, BE:3000 & etc.
- So these all MS are connected through domain URL like for BE it will be like /Api.

## What is Monolith architecture?

- Monolith architecture has all service binded means all are dependent and it is big project in one bucket.
- If suppose we need to build new feature like changing color of button then in that case we have to compile all UI code and BE code and everything inside that project and again deploy in production.

## What is the difference between Monolith and Microservice?

### Monolith

- We need to compile and deploy everything on if new feature is being introduce in UI or BE
- So it slows down the developer experience as well performance of system.
- Everything needs to build in single language

### Microservice

- We don't need to compile every service only compiling UI is fine if new feature is related to UI
- Because all services are independent it fasten the process of developer experience
- We can build all services in different language `like UI in React and BE in Jave or any.`

## Why do we need a useEffect Hook?

- So when we need to render our component first and after that API contents.
- So to render things after components renders then we need useEffect.
- `Syntax: useEffect(()=>{},[])`

## What is Optional Chaining?

Optional chaining means it allows to access properties or method of an object without checking it is defined or not.
`Eg.`

```javascript
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zipCode: "10001",
    // street is not defined
  },
};
```

In normal way of accessing

```javascript
console.log(person.address.street);
```

```output
undefined
```

but if property itself is undefined in that case it will return an error.

```javascript
console.log(person.gender?.street);
```

```output
 undefined
```

it will not return an error means it will not break the code istead it will return undefined

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
