# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications (true/false) true
- React will only render on the server using Node.js (true/false) false <https://daveceddia.com/do-i-need-nodejs-backend-for-react-angular/>
- React is a full stack framework for modern web applications (true/false) false
- React is a flexible library that plays the role of V in an MVC framework (true/false) true with som ambiguity
-     <https://www.tutorialsteacher.com/mvc/mvc-architecture#targetText=MVC%20stands%20for%20Model%2C%20View,model%20state%20in%20a%20database.>
      <https://medium.com/javascript-inside/what-if-react-was-really-only-the-v-in-mvc-5854fd6f601c>
- You should always update a component's state directly using this.state (true/false)false
- React is made up of encapsulated components that manage their own state (true/false) yes
- React components render HTML (true/false) false; JSX 

1b. Add an interesting TRUE fact about React to the list.
-React is a Javascript framework
2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: Smart components update state. Dumb components don't.

  Researched answer: Dumb/Presentational components' only responsibility is to present something to the DOM. They don't have internal state to manage. In contrast, smart/container components keep track of state and pass the data down to the dumb/presentational components.
  <https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43>

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: yarn spins up the application

  Researched answer: yarn add [package] installs that package as a dependency to your project. It also updates your package.json & yarn.lock
https://yarnpkg.com/lang/en/docs/cli/add/


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: state is the global state of the component that can be passed down to children components in the form of props.

  Researched answer: state in a componenet is its own local state that can't be accessed or modified outside of the component. Props in essence are a snapshot of the state that can be modified and accessed externally.  
  https://codeburst.io/react-state-vs-props-explained-51beebd73b21



5. How would you explain state to a friend who doesn't know code?

  Your answer: Think of it as though you are back in high school. State is your locker - it contains all of the books you'll need through the day. Your locker is locked and the books cannot be transferred to friends unless you open your locker and make a copy of the book for your friend to borrow. 
  
  
  
  
