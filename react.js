// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.
console.log('#1 - check out commented out code')


// import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return <h1>I am a component!</h1>;
//   }
// }

// export default Welcome


// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

console.log("#2 - " + names.map(element => `${element} is ${element.length} characters long.`).join(" "))

//were you looking for each to return on a new line? If so im not sure how to do that.

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)

// }


// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

var {name, home, dislikes} = this.state

console.log(`#3 - destrucured variables = name: ${name}, home: ${home}, dislikes: ${dislikes} `)

// 4. Write a React method that would add one and update the state of the count each time the method is called.
console.log("#4 - complete")

this.state = {
  count: 0
}

updateCount = () => {
  this.setState({count: 1})
}


// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

// import React, { Component } from 'react';

// class Recipes{
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes:
//         {name: 'Meatballs'},
//         {name: 'Mac & Cheese'}
//     }
//   }

//   render() {
//     return(
//       let recipe = this.state.recipes.map(recipe => {
//         return(
//           <li key={this.state.recipes.name}>{this.state.recipes.name}</li>
//         )
//       })
//       <ul>
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default Recipes
