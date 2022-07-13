# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- I practiced using React.useEffect() to call to an API and use a dependency array to avoid the effect being called after every render. In the call I added an if statement to check if a user was valid if it wasn't then it would throw an error and setValid to false so "No results" can show on the page.

```js
React.useEffect(() => {  
    fetch(`https://api.github.com/users/${finalName}`)
      .then(res => res.json())
      .then(info => 
       {if(info.message !== "Not Found"){
         setValid(true)
         setUserInfo(info)
       }else{
         setValid(preValid => !preValid)
         throw console.error("User not found");
       }
         
      })
  }, [finalName])
```
- I practiced with ternary operator for dark/light mode 
```js
  const inputClassName = colorTheme ? "lightMode" : "darkMode"
  const bgStyle = {
    backgroundColor: colorTheme ? "#F6F8FF" : "#141D2F"
  } 
```
- I learned how to add a project to netlify through command line and git commands add, commit, and push so everytime I pushed something the web page would be updated as well. 

### Continued development

- I will continue to practice with useEffect() and APIs 

### Useful resources

- [StackOverflow](https://stackoverflow.com/questions/6291225/convert-date-from-thu-jun-09-2011-000000-gmt0530-india-standard-time-to - This helped with converting a string to a date
- [levelupcoding](https://levelup.gitconnected.com/how-to-deploy-a-react-app-with-netlify-set-up-continuous-deployment-via-github-53859dcdaf40) - This helped deploy my website on netlify



## Author

- Frontend Mentor - [@paolas771](https://www.frontendmentor.io/profile/paolas771)




