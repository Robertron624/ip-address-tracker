# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

### Links

- Solution URL: [Solution URL](https://github.com/Robertron624/ip-address-tracker)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Saas](https://sass-lang.com/) - For styles
- [Ipify API](https://geo.ipify.org/) - for IP address data
- [Leaflet](https://leafletjs.com/) - for map
- [React Leaflet](https://react-leaflet.js.org/) - for map in React
- [axios](https://www.npmjs.com/package/axios) - for API calls

### What I learned

With this project I learned how to create a custom hook for reusable API calls, I also learned how to use the leaflet library for maps and how to use the ipify API to get the IP address data.

custom hook for API calls:
```js
export const UseIp = <T,>(ip: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(ip);
                setData(response.data);
            } catch (error:any) {
                setError(error.message);
            }
            setLoading(false);
        };
        fetchData();
    }, [ip])

    return { data, loading, error };
}
```

### Continued development

I want to keep working in projects that involve the use of APIs to perfectionate my asynchronous programming skills, I'll be using React for this kind of project and maybe a caching library like ReactQuery.

### Useful resources

- [React Reusable API Calls With Custom Hooks](https://betterprogramming.pub/react-reusable-api-calls-with-custom-hooks-typescript-obviously-a62fda7df1b6) - This helped me to create an easier way to make API calls in React. I'd recommend it to anyone still learning this concept.
- [react-leaflet documentation](https://react-leaflet.js.org/docs/start-setup/) - This is the official documentation for react-leaflet. I'd recommend it to anyone who wants to learn how to use this library.
- [Forms and Events](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/) - This is a good documentation for handling react forms and events with TypeScript. I'd recommend it to anyone who wants to learn how to use this library. 

## Author

- Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
- Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
- Twitter - [@robertdowny](https://www.twitter.com/robertdowny)