# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Screenshot%202023-01-07%20at%209.29.53%20PM.png)
![](./images/Screenshot%202023-01-07%20at%209.30.00%20PM.png)

### Links

- Solution URL: [My GitHub](https://github.com/VSandwar74/product-preview-card-component-main)
- Live Site URL: [My Live Site!](https://stellular-fox-3c8349.netlify.app/)

## My process

### Built with

- Vite
- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

This was my first deep dive into JS and JavaScript integration with events and event handlers, etc.

```js
// Defining async function
async function getapi() {
  
  const url = "https://api.adviceslip.com/advice";
  // Storing response
  const response = await fetch(url);
  
  
  // Storing data in form of JSON
  var data = await response.json();
  
  var id = document.querySelector('#advice-id')
  console.log(id);
  // var id = (data.slip.id)
  var advice = (data.slip.advice)
  
  document.querySelector('#advice-id').textContent = String(data.slip.id)
  document.querySelector('#advice').textContent = String(data.slip.advice)

}
```
```css
.button:hover {
  filter: drop-shadow(0 0 1rem #52FFAA);
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [JS API](https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/) - Helped me understand APIs through JS, which was mainly just syntax as I understand python APIs.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@VSandwar74](https://www.frontendmentor.io/profile/VSandwar74)

