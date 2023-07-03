import React, { useState } from 'react';
import './Spread.scss';
import { Editor, EditorFree } from './Editor';




const Spread: React.FC = () => {
    const examplePart2 = 'let car = {type : "Fiat", model: "500", color: "white"}; ';
    const examplePart31 = `function expandArrays(){
        let result = [];
        for(let i = 0; i < arguments.length; i++) {
            let array = arguments[i];
            for(let j = 0; j < array.length; j++) {
                result.push(array[j]);
            }
        }
        return result;
    }
    
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    console.log(expandArrays(array1, array2));  // Output: [1, 2, 3, 4, 5, 6] ` ;
   
    const examplePart32 = `function expandObjects() {
        let result = {};
        for(let i = 0; i < arguments.length; i++) {
            let object = arguments[i];
            for(let prop in object) {
                if(object.hasOwnProperty(prop)) {
                    result[prop] = object[prop];
                }
            }
        }
        return result;
    }
    
    let obj1 = {a: 1, b: 2};
    let obj2 = {c: 3, d: 4};
    console.log(expandObjects(obj1, obj2));  // Output: {a: 1, b: 2, c: 3, d: 4}
     `;

     const examplePart5 = `let fruits = ["Apple", "Banana", "Mango"];
     let vegetables = ["Carrot", "Potato", "Beans"];
     let food = [...fruits, ...vegetables];
     console.log(food);  // Output: ["Apple", "Banana", "Mango", "Carrot", "Potato", "Beans"]
     
     let book = {title: "Moby Dick", genre: "Fiction"};
     let author = {name: "Herman Melville", nationality: "American"};
     let bookDetail = {...book, ...author};
     console.log(bookDetail);  // Output: {title: "Moby Dick", genre: "Fiction", name: "Herman Melville", nationality: "American"}
     
     `
     const exampleExercice = `
     const breakfast = ["eggs", "toast", "coffee", "orange juice"];
const lunch = ["burger", "fries", "salad", "coffee"];
const dinner = ["steak", "potatoes", "wine", "salad"];

console.log(fullMenu(breakfast, lunch, dinner));
// should return ["burger", "coffee", "eggs", "fries", "orange juice", "potatoes", "salad", "steak", "toast", "wine"]

   `;


    const [code, setCode] = useState(`function fullMenu(breakfast, lunch, dinner) {
      // your code here
    }
    `);
   
    
    
    
    const handleCodeChange = (newCode: string) => {
      setCode(newCode);
    };
  return (
    
        <div className="course-container">
            <img src='https://miro.medium.com/v2/resize:fit:1400/1*dkobBMlN8xVswrMjOks0fg.png'  style={{width:"400px" , height:"200px" , padding:"10px"}}/>
      <h1 className="course-title">JavaScript Course - Expanding Arrays and Objects (Before Spread Function)</h1>
      
      <h2 className="course-section-title">Module Overview:</h2>
      <ul className="course-section-content">
        <li>Creating and manipulating arrays</li>
        <li>Creating and manipulating objects</li>
        <li>Developing a function to expand arrays and objects</li>
        <li>Practical exercise and questions</li>
      </ul>

      <h2 className="course-section-title">Part 1: Arrays in JavaScript</h2>
      <p className="course-section-content">In JavaScript, an array is a special variable, which can hold more than one value at a time. You can create an array using square brackets [] and the values inside these brackets are array items
      <br/>
      For example: let fruits = ["Apple", "Banana", "Mango"];</p>
      <br/>
      Array methods:
push(): Adds new elements to the end of an array.
pop(): Removes the last element from an array.
shift(): Removes the first element from an array.
unshift(): Adds new elements to the beginning of an array.

      <h2 className="course-section-title">Part 2: Objects in JavaScript</h2>
      <p className="course-section-content">Objects in JavaScript are containers for named values, which we call properties. You can create an object using curly brackets {}
      <br/>
      For example:  <pre>{examplePart2}</pre>
      <br/>
      Object methods:
Object.keys(): Returns an array of a given object's property names.
Object.values(): Returns an array of a given object's own enumerable property values.
      </p>

      <h2 className="course-section-title">Part 3: Developing a Function to Expand Arrays and Objects</h2>
      <p className="course-section-content">Imagine a situation where we need to merge two arrays or two objects. We want to create a function that can accept multiple arrays or objects and merge them.  Let's call this function expand.</p>
      <p>Expanding Arrays:</p>
      <Editor value={examplePart31} lines={15} onChange={handleCodeChange} />
      <p>Expanding Objects:</p>
      <Editor value={examplePart32} lines={15} onChange={handleCodeChange} />
      <h2 className="course-section-title">Part 4: Practical Exercise</h2>
      <p className="course-section-content">Now, let's put our expandArrays and expandObjects functions to use. Create two arrays, one containing the names of fruits and the other containing the names of vegetables.  Use the expandArrays function to merge these arrays into one.

Create two objects, one for a book and another for an author. The book object should have properties like 'title' and 'genre', and the author object should have properties like 'name' and 'nationality'. Use the expandObjects function to merge these objects into one.

Questions:
What happens when you try to merge arrays or objects that have common elements or properties?
What would happen if you passed something other than an array or an object to the expandArrays or expandObjects functions?
 we'll reveal an in-built JavaScript function that provides similar functionality. This function is widely used and recognized as a very powerful tool to manipulate arrays and objects. Can you guess what it is?</p>

      <h2 className="course-section-title">Spoiler Alert: The Spread Operator</h2>
      <p className="course-section-content">Welcome back! Ready for the big reveal? The functionality we replicated with our expandArrays and expandObjects functions can be achieved more succinctly with the JavaScript Spread Operator(...). Let's see how we would have done the previous exercises using this operator:</p>
     
      <Editor value={examplePart5} lines={15} onChange={handleCodeChange} />
      <p className="course-section-content"> By knowing how to create these functionalities from scratch, you should now have a better understanding of how the spread operator works.</p>
   
      <h2>Exercise:</h2>

      <p className="course-section-content">Consider a scenario where you have several restaurant menus represented as arrays. Each menu is a list of items available at a specific meal (breakfast, lunch, or dinner).

Your task is to write a function fullMenu that takes in 3 parameters, each an array representing a meal menu: breakfast, lunch, and dinner. The function should return a new array containing all items from all menus, sorted in alphabetical order, and without duplicates.

You should use the spread operator in this exercise.</p>
<h2>Example</h2>
<Editor value={exampleExercice} lines={7} onChange={handleCodeChange} />
<p className="course-section-content">Here's the skeleton of the function to get you started:</p> 
<EditorFree value={code} onChange={handleCodeChange} />
    </div>
  );
}

export default Spread;
