# Rick and Morty Character Guide

A guide to all the weird and wacky characters in the Rick and Morty TV show, created by Dan Harmon and Justin Roiland.

https://www.imdb.com/title/tt2861424/

# Table of Contents

- [Application Overview](#application-overview)
- [Tech Decisions](#tech-decisions)
- [Types](#types)
- [State Management](#state-management)
- [Testing](#testing)
- [Future Improvements](#testing)


# Application Overview

This React SPA showcases Rick and Morty characters from the brilliant [Rick and Morty API](https://rickandmortyapi.com/). The site has the following three pages:

- Home page (`/`) - Displays the top 5 fan favourite characters in a character list.
- Characters page (`/characters`) - Displays all the characters in the character list, paginated with 20 characters per page. A filter button is displayed above the characters list, which upon selection allows for filtering the characters list (currently only supporting a `species` filter). Each character list item displays the character's avatar image, name and species badge.
- Character page (`/characters/:id`) - Displays the character's full profile, including the following information:
    
    - Image: The character's avatar image
    - Name: The name of the character
    - Status: Whether the character is alive
    - Species: The species of the character
    - Type (optional): The subspecies of the character
    - Origin: The name of the characters origin
    - Location: The character's last known location endpoint.
    - Gender: The gender of the character ('Female', 'Male', 'Genderless' or 'unknown')
    - Profile Created: Date at which the character was created in the database

## Brownie Points

The following features are additional functionality either outlined as optional extras, or not outlined in the spec:

### Inclusion of the `species` filter

The requirements specified displaying a list of **human** characters, but I thought it would be more interesting to display **all** the rick and morty characters by default. This gave me the opportunity to extend the application design and implement filtering functionality to still adhere to the requirements.

For simplicity only a single filter type is included, `species`, but this allows the user to filter down the characters list to display only the human characters if desired, or any other type of species.

This allowed the illustration of handling form data, and displaying fixed overlays. The fixed overlays were created by adding the component to the end of the layout, to ensure they are nearer to the end of the body tag. 

### Persisting `page` & `species` query params

By updating the URL with the latest `page` & `species` query params, performing a full reload, or paginating will still retain both the intended page and applied filters, ensuring the user is retrieving the page of characters they are expecting.

### Displaying character image

A character avatar image is displayed in each the character list item, which are shown on both the home and characters pages with a large border radius. A full sized image list is also displayed on the character profile page.

### Including the date the character was created

Along with all the other character information displayed on the character profile page, the date the character was added to the 'Rick and Morty API' database is also displayed.

### Loading state

Before fetching either the paginated characters list or a single character, a `fetchingCharacters` boolean is updated in the characters state object, which is used to display a loading message on the page. This is a simplistic example where the text 'Loading...' is displayed in the centre of the screen, but illustrates how the management of displaying components and providing feedback to users before the intended data has been fetched would work in a commercial application.


# Tech Decisions

The following outlines my technical decisions for the project, and the reasons I used particular tools.

## Package Management: Choosing Yarn over NPM

`npm` is the default package manager which is still prevalent across many projects, however the more recent package management tool `yarn` provides numerous benefits:

- Stability: yarn provides more confidence in replicated builds across different machines, due to its better handling of package version resolutions.
- Speed: multiple packages can be downloaded in parallel with yarn, vs npm where each package is sequentially downloaded. Yarn also allows downloading packages through a local cache.
- Dedicated community and improvements continually being added from big players like Facebook.

## Styling Framework: Flexibility With TailwindCSS

- It is a framework intended for developers that want flexibility in implementing a design
- CSS is much easier to maintain for larger projects when there aren't a large set of CSS files and classes. Styles are instead defined on the elements that require styling. Updates to font size, background colour etc just require finding the component you want to change.
- For simplicity in this challenge, I'm also using a service provided by Tailwind that I personally signed up for: [TailwindUI](https://tailwindui.com/). It just provides commonly used and nicely styled components that speed up the creation of an MVP.

## Coding Standards: Simplified with Automated Tools Prettier & ESLint

- [Prettier](https://prettier.io/) is an opinionated code formatter that makes code format opinions and discussions irrelevant. Familiarise yourself with how prettier formats your code, and you never have to think about whether brackets should start on the same line as the function declaration, or the line underneath
- [ESLint](https://eslint.org/) is a Javascript linter that analyses your code as you're writing it, and highlights any issues that arise. Whether it's because you're missing a semicolon at the end of a line, or you're referencing a Typescript interface that hasn't been imported yet, ESLint outlines the issue and in many cases will automatically fix it for you
- ESLint and Prettier go together like cheese and crackers on a warm Summer day down at the park on a picnic! They are only a couple of tools I would use in a project, and while they may be overkill for this simple project, I think it's still warranted with the trivial amount of effort it takes to add them.

## Typescript

It allows React applications to be more maintainable, easily readable and understandable. For a little extra initial project configuration, it's a no brainer really.

## Webpack

Manages loading Typescript using `ts-loader`. Bundles Javascript, handles code splitting and has many other features. There are alternatives to Webpack that I'm less familiar with.

## Lodash

While not used very much throughout this project, it is a package with a vast number of useful Javascript functions. Considering it's relatively small package size, it's a worthwhile addition to most projects.

Lodash allows complex functionality to be implemented in a single line, providing functions that are not available in the lastest ES version. One example of an incredibly useful function that is tiresome to implement in each project manually is the `cloneDeep` function. It allows a multiple nested object to be cloned and stored in another variable.

## Heroicons

[Heroicons](https://heroicons.dev/) is a nice looking, simple icon pack used for the few icons throughout the app.

# Types

This section explains how I ensured the application utilises Typescript throughout the project.

## Rick and Morty API

Thankfully the Rick and Morty API provides a [fully typed Javascript client](https://www.npmjs.com/package/rickmortyapi). To assist with development and ensuring the application uses an up to date collection of Typescript interfaces, these types should be imported directly from the `rickmortyapi` package. This allows us to not have to create and maintain the types ourselves, and we can ensure the types match the response data from the REST API.



## Component Types

To provide high quality React Hooks, return types and prop types are included in each tsx file.

## Custom Types

Types provided by the packages used are always favoured, such as the rick and morty API mentioned above, or the API success/failure return types from Axios. For custom funcitonality and everywhere else required, custom interfaces and types are created.

Reusable types are located in `src/common/types/*`, and provide a common location to find types used throughout the application, from state management types, API responses

# State Management

Data needs to be stored and manipulated across pages and components. The following outlines how that works in this application.

## React Context Instead of Redux

While the most common state management strategy and package used for state management in React is Redux, this project is utilising the simple yet powerful Context API. Some further information on reasons for projects not requiring Redux can be found here, written by the creator of Redux:
- https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367

The project structure to realise this solution includes the following three files located in `src/state`:

- `actions` - All of the asynchronous data fetching logic is contained here, and is performed before any data is persisted to state management.
- `context` - Creates the context, initialises the character state object, and declares the context provider function.
- `reducer` - Commits data to the character state object, using payloads provided by the action responses, and also directly from components for utility action types like toggling the filter overlay.

Coming together the above provides a maintainable and easily extendable way for components to access state in a reactive way (through `useContext(Context)`), and updating state via `dispatching` updates to the characters state object when data when an action needs to be performed.

# Testing

The testing suite has been focused on unit testing the REST API, to ensure the critical site functionality of fetching characters, paginating and filtering the characters list works as expected.

These tests can be categorised into the two endpoints used to fetch data for the site

1. Fetching all characters
2. Fetching a single character

This ties in with the error handling provided in this site's API actions, to ensure HTTP GET errors are handled effectively, particularly for `404` errors when fetching character data, likely to return when applying multiple filters.

Extending this testing suite, I would include component testing to ensure the components displaying the fetched data are accurately handling the loading states and displaying the correct elements.

# Future Improvements

Adding transitions and animations, to allow smoother page transitions, and allowing a right slide in transition of the filter overlay.

- Further information at https://reactjs.org/docs/animation.html

Better handling of initial state, and loading display to reduce Cumulative Layout Shift (CLS) and improve the visual aesthetics of the site when data is being fetched. This also ties in to lazy loading images to prevent content 'jumping around the page' as content is loaded in.

# Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

To install all the dependencies. This command is required before first running the app in development mode. 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
