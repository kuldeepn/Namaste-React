# Assignment-06-Exploring the World

## Q.1 What is a Microservice?

Microservice is a project architecture which industry follows. It called as `signle responsibilty architecture or separation of concerns`.

- It has different microservices that are independent itself like UI,BE,DB & etc.
- So we can have our UI written in different tech and our BE in different language.
- All these services are running on different ports like UI:1234, BE:3000 & etc.
- So these all MS are connected through domain URL like for BE it will be like /Api.

## Q.2 What is Monolith architecture?

- Monolith architecture has all service binded means all are dependent and it is big project in one bucket.
- If suppose we need to build new feature like changing color of button then in that case we have to compile all UI code and BE code and everything inside that project and again deploy in production.

## Q.3 What is the difference between Monolith and Microservice?

### Monolith

- We need to compile and deploy everything on if new feature is being introduce in UI or BE
- So it slows down the developer experience as well performance of system.
- Everything needs to build in single language

### Microservice

- We don't need to compile every service only compiling UI is fine if new feature is related to UI
- Because all services are independent it fasten the process of developer experience
- We can build all services in different language `like UI in React and BE in Jave or any.`

## Q.4 Why do we need a useEffect Hook?

- So when we need to render our component first and after that API contents.
- So to render things after components renders then we need useEffect.
- `Syntax: useEffect(()=>{},[])`

## Q.5 What is Optional Chaining?

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

it will not return an error means it will not break the code istead of it will return undefined

## Q.6 What is Shimmer UI?

A UI which fake's the actual UI called as `Shimmer UI`. It is like skeleton of page.

## Q.7 What is the difference between JS expression and JS statement.

- `Value Output:` Expressions always evaluate to a value, whereas statements may or may not produce a value.
- `Usage:` Expressions can be used within statements, but statements cannot be used inside expressions.

## Q.8 What is Conditional Rendering, explain with a code example

The rendering which is based on the condition called as conditional rendering.
`Eg.  `

```javascript
student.length==0?<Shimmer/>:return()
```

So here if condition is true it will return shimmer ui otherwise it will return whaterver inside the return statement.

## Q.9 What is CORS?

- CORS stands for Cross-Origin Resource Sharing. It's a security feature implemented in web browsers that controls access to resources on a web page from a different origin (domain, protocol, or port) than the one from which the resource originated.
- So it is restricted from accessing local to web server.
- So we need to install Allow CORS extension or in server Access-Control-Allow-Headers.

## Q.10 What is aync and await?

- `async await` are feature of javascript to achive asyncronous operation in synchronous way.
- whenever `async` keyword is used infront of function it always returns a promise by using `await` keyword inside it.
- `await` kwyword make sure it resolves whenever promise returns something.

```javascript
const Data = async () => {
  const result = await fetchData();
  console.log(result);
};
```

## Q.11 What is the use of `const json = await data.json();` in getRestaurants() ?

- It gives the json formated data received from the response here `data` is the response.

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
