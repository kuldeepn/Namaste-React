# Assignment-07-Finding the path

## Q.1 What are various ways to add images into our App? Explain with code examples

`Using <img> tag`

- We can add images using traditional html `img` tag

```jsx
<div>
  <img src="imgurl" />
</div>
```

`Using Import from local path`

- We can add Images by importing images from local path as well

```javascript
import myImage from "./path/image.jpg";

<div>
  <img src={myImage} />
</div>;
```

## Q.2 What would happen if we do console.log(useState())?

- It will throw an error if you are accessing from outside of functional component
- Inside the function component it will return an array `[undefined,function]` where first element is `state` which is `undefined` and the second one is `setState` function which is `bound dispatchSetState`

## Q.3 How will useEffect behave if we don't add a dependency array ?

- If we don't add dependancy array it will always render whenever component renders

## Q.4 What is SPA?

- A single page application means just to navigate between components.
- Whenever our app loads it load all our code so by using react router `<Link>` we can switch between components so it makes it is a SPA.

## Q.5 What is difference between Client Side Routing and Server Side Routing?

`Client Side Routing`

- In Client Side Routing all codes loads at browser and whenever we are switching between pages so behind the scenes it just components we are switching, so it not makes server calls everytime whenever we are switching between pages.

`Server Side Routing`

- In Server Side Routing everytime it makes call to server whenever we are navigating to pages and all so basically it refreshes the whole app.
