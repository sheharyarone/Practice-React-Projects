 React Router Patterns   

Demo

React Router Patterns

*   [React Router Patterns](#)
    *   [React Router Dog Finder](#part-1-react-router-dog-finder)
        *   [Recommended Structure](#recommended-structure)
    *   [Further Study: React Router Calculator](#further-study-react-router-calculator)

React Router Patterns
=====================

React Router Dog Finder
-----------------------

Build an app that allows a user to browse dogs.

At the top of the app, add a navbar that displays the current active route.

The app should have the following routes:

*   /dogs is the homepage and shows all three dogs
*   When you’re on the homepage, you can click on a dog to view more information on that dog. Each dog should have its own unique route. For example, clicking on Whiskey will take you to /dogs/whiskey.
*   Every other endpoint not listed should redirect you to /dogs.

Make the website responsive (if you have time). The solution uses bootstrap to add a responsive navbar and grid layout.

### Recommended Structure

You can preload the <App /> component with the following `defaultProps` for convenience:

App.defaultProps \= {
  dogs: \[
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: \[
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      \]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: \[
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      \]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: \[
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      \]
    }
  \]
}

The <App /> should render:

*   a <Nav /> component with the dogs’ names passed as props
*   a <Switch> with your <Route /> declarations

Further Study: React Router Calculator
--------------------------------------

It’s time to build another routing-based calculator, but this time with React Router!

Build a calculator that supports routes like:

/add/1/2

should render a component that displays 3.

/subtract/3/2

should render a component that displays 1.

/multiply/6/4

should render a component that displays 24.

/divide/20/5

should render a component that displays 4.

As a bonus, try to do this without using a different component for each of the four math operations!

Good luck!