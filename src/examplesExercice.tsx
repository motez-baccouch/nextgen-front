import React, { useState } from 'react';
import './Spread.scss';
import { Editor, EditorFree } from './Editor';




const Guided: React.FC = () => {
    const implementation1 = `function colorFinder1(colorList, colorToFind) {
        for(let i = 0; i < colorList.length; i++) {
            if(colorList[i] === colorToFind) {
                return true;
            }
        }
        return false;
    }
    `;
    const implementation2 = `function colorFinder2(colorList, colorToFind) {
        return colorList.includes(colorToFind);
    }
    ` ;
   
    const implementation3 = `function colorFinder3(colorList, colorToFind) {
        return colorList.find(color => color === colorToFind) !== undefined;
    }
    
     `;

    

     const [code, setCode] = useState("")
    const [code1, setCode1] = useState(`function colorFinder(colorList, colorToFind) {
        //your colorFinderImplementation
    }
    
    function addToColorList(colorList, colorToAdd) {
       // your code
    }
    
    var colors = ["Red", "Blue", "Green"];
    addToColorList(colors, "Yellow"); // Should log "Color added"
    addToColorList(colors, "Blue"); // Should log "Color already exists"
    
    `);
   
    
    
    
    const handleCodeChange = (newCode: string) => {
      setCode(newCode);
    };
    const handleCodeChange1 = (newCode: string) => {
        setCode1(newCode);
      };
  return (
    
        <div className="course-container">
      <h1 className="course-title">Exercise: "Color Finder"</h1>
      
      <h2 >Suppose you have a list of colors, and your job is to create a function that will accept a color name as input and then return whether or not that color is in the list.</h2>
      <h2>i will present you 3 implementations that should help you with the exercice , choose the implementation that you rfind better !</h2>
      <ul className="course-section-content">
        <li>Implementation 1: Using For Loop
        <Editor  valueFix={implementation1} value={implementation1} lines={15} onChange={handleCodeChange} />
        </li>
        <li>Implementation 2: Using Array.prototype.includes() method
        <Editor  valueFix={implementation2} value={implementation2} lines={15} onChange={handleCodeChange} />
        </li>
        <li>Implementation 3: Using Array.prototype.find() method
        <Editor  valueFix={implementation3} value={implementation3} lines={15} onChange={handleCodeChange} />
        </li>
        <li>All these functions do the same thing: they find a color in a list. However, each uses a different approach.</li>
      </ul>

    <h2>Choose one of the implementations above and implement a function called "addToColorList". This function should take in two parameters:</h2>
    <ul>
    <li>A color list array.</li>
    <li>A color to add.</li>
    </ul>
    <h2>
    Your function should add the new color to the color list only if it doesn't exist already. If it exists, it should return a statement saying "Color already exists".
    </h2>
    <h2>Note:paste the colorFinder implementattion you chose or make your own !</h2>
    <h2>Here is a simple template for your task:</h2>
   
      
<EditorFree value={code1} onChange={handleCodeChange1} />
    </div>
  );
}

export default Guided;
