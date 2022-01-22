# Tech Decisions

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



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
