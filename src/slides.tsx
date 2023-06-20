import React, { useEffect, useState } from 'react';
import './slides.scss';
import './progressBar.scss';
import SurveyForm from './quizQuest';
import {Editor , EditorFree} from './Editor';
import Timer from './Timer';
import jsPDF from 'jspdf';



const Slideshow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
  };



  const [code, setCode] = useState("");
  const [code1 , setCode1]=useState("");
  useEffect(() => {
    localStorage.setItem('code', code);
  }, [code]);
  useEffect(() => {
    localStorage.setItem('code1', code1);
  }, [code1]);
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  
  const handleCodeChange1 = (newCode: string) => {
    setCode1(newCode);
  };

  const [localData, setLocalData] = useState<{
    answers: string,
    code: string,
    code1: string,
    time: string
  }>({
    answers: '',
    code: '',
    code1: '',
    time: ''
  });

  useEffect(() => {
    const answers = localStorage.getItem('answers');
    const code = localStorage.getItem('code');
    const code1 = localStorage.getItem('code1');
    const time = localStorage.getItem('time');

    if (answers && code && code1 && time) {
      setLocalData({
        answers,
        code,
        code1,
        time
      });
    }
  }, []);

  const handleSubmit = () => {
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.getHeight();
        const lineHeight = doc.getLineHeight();
    
        const answers = localStorage.getItem('answers');
        const code = localStorage.getItem('code');
        const code1 = localStorage.getItem('code1');
        const time = localStorage.getItem('time');
    
        let currentHeight = 10; // Initial height for first line of text
    
        const addMultiLineText = (content: string) => {
          if (content) {
            const splitContent = doc.splitTextToSize(content, doc.internal.pageSize.getWidth() - 20);
            splitContent.forEach((line: string) => {
              if (currentHeight > pageHeight - 20) {
                doc.addPage();
                currentHeight = 10;
              }
              doc.text(line, 10, currentHeight);
              currentHeight += lineHeight;
            });
            currentHeight += lineHeight;
          }
        }
    
        addMultiLineText(`Answers: ${answers}`);
        addMultiLineText(`Code: ${code}`);
        addMultiLineText(`Code 1: ${code1}`);
        addMultiLineText(`Time: ${time}`);
    
        doc.save('Result.pdf');
  };

  return (
    <div className="demo-form">
      {currentStep === 0 && (
        <><div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li className="is-active">Personality Test</li>
            <li>Reading Test</li>
            <li >Micro Priject</li>
            <li>Small Course</li>
            <li>Project</li>
          </ul>
        </div>
        <SurveyForm /></>)}
      
      {currentStep === 1 && (
        <><div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>Personality Test</li>
            <li className="is-active">Reading Test</li>
            <li>Micro Priject</li>
            <li>Small Course</li>
            <li>Project</li>
          </ul>
        </div>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' ,  border: '1px solid lightgray', borderRadius: '5px', padding: '20px', textAlign: 'center' , color: "#75707f"}}>
            
            <h2 style={{ color: 'white' }}>read this patiently and thoroughly(stp the button when you have finished reading):</h2>
            <h2>Life, dear reader, is an absolutely absurd, enchanting rollercoaster of an experience, filled with equally absurd characters that we are, for some reason, obliged to love. It's like a never-ending sitcom, where we play all roles, from the tragically comedic janitor to the charismatic lead.

              Life can be as unpredictable as a cat on a hot tin roof or as predictable as your grandma's insistence that her 'secret' cookie recipe is a classified family heirloom. One moment you're chomping down on your favorite donut, and the next, you're desperately trying to remember if you turned off the stove or not. Ah, the sweet, sometimes scary, spice of unpredictability.

              Every sunrise brings new storylines and plot twists that even the most creative novelists couldn't dream up. You might stumble upon an old friend, fall in love with the smell of fresh rain, or have an enlightening conversation with a stranger who eerily resembles that fictional wizard you idolize.

              The biggest plot twist, though? Despite the chaos, despite the 'why did I enter this room' moments, and the 'why did I say that' cringes, life is utterly beautiful. It’s in the laughter that bubbles up when you least expect it, in the warm tears shed over a touching gesture, in the soft whispers of love shared in the dark.

              In life's theater, we're not just the actors; we're the audience too, clapping, gasping, and laughing at our own performances. So here’s to life: the most hilariously chaotic, dramatically emotional, and thrillingly beautiful show on Earth. It's weird, it's wonderful, and by golly, it’s worth every moment.
            </h2>
            <Timer />
          </div></>
      )}
      
      {currentStep === 2 && (
        <><div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>Personality Test</li>
            <li >Reading Test</li>
            <li className="is-active">Micro Priject</li>
            <li>Small Course</li>
            <li>Project</li>
          </ul>
        </div><div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white' }}>Write a simple code that calculate the pgcd of 2 given number(you aer free to use any programming language)</h2>
            <EditorFree value={code} onChange={handleCodeChange} />
          </div></>
      )}

      {currentStep === 3 && (
        <><div className="container-fluid">
        <br /><br />
        <ul className="list-unstyled multi-steps">
          <li>Personality Test</li>
          <li >Reading Test</li>
          <li>Micro Priject</li>
          <li className="is-active">Small Course</li>
          <li>Project</li>
        </ul>
      </div>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' , fontSize:"2em"}}>
        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png"  style={{ width: '300px', height:'300px' ,margin: 'auto' , display:"block"}} />
        
        <h2 style={{color:'white'}}> let's dive into the basics of JavaScript.</h2>
        

<h2 style={{color:'white'}}>1. Variables</h2>

<p style={{color:"#75707f;"}}>Variables are like containers that hold values. In JavaScript, you declare a variable using the `var`, `let`, or `const` keyword.</p>
<Editor lines={2} value="let name = 'Alice';
const age = 25;" onChange={setCode} />
<br/>

<h2 style={{color:'white'}}>2. Data Types</h2>

<p style={{color:"#75707f;"}}>JavaScript has several data types including Number, String, Boolean, Object, and others.</p>

<Editor lines={3} value="let number = 10; // Number
let text = 'Hello, world!'; // String
let isAlive = true; // Boolean" onChange={setCode} />

<br/>
<h2 style={{color:'white'}}>3. Arrays</h2>

<p style={{color:"#75707f;"}}>Arrays in JavaScript are a type of object used for storing multiple values in a single variable.</p>

<Editor lines={2} value="let fruits = ['Apple', 'Banana', 'Cherry'];" onChange={setCode} />

<br/>

<h2 style={{color:'white'}}>4. Operators</h2>

<p style={{color:"#75707f;"}}>JavaScript uses arithmetic and logical operators:

Arithmetic operators: `+ - * / % ++ --`
Logical operators: `&& || !`</p>

<h2 style={{color:'white'}}>5. Conditional Statements</h2>

<p style={{color:"#75707f;"}}>If-else, switch are conditional statements that perform different actions based on different conditions.</p>

<Editor lines={5} value="if (age > 18) {
    console.log('You are an adult!');
} else {
    console.log('You are a minor!');
}" onChange={setCode} />

<br/>
<h2 style={{color:'white'}}>6. Loops</h2>

<p style={{color:"#75707f;"}}>Loops are used to repeatedly run a block of code until a certain condition is met.</p>

<Editor lines={2} value="for(let i=0; i<10; i++) {
    console.log(i);}" onChange={setCode} />

<br/>
<h2 style={{color:'white'}}>7. Functions</h2>

<p style={{color:"#75707f;"}}>Functions are a block of code designed to perform a particular task.</p>

<Editor lines={4} value="function greet(name) {
    return 'Hello, ' + name;
}
console.log(greet('Alice'));" onChange={setCode} />



        </div></>
      )}

{currentStep === 4 && (
  <><div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>Personality Test</li>
            <li >Reading Test</li>
            <li>Micro Priject</li>
            <li>Small Course</li>
            <li className="is-active">Project</li>
          </ul>
        </div>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', fontSize: "2em" }}>
            <h2 style={{ color: "white" }}>Exercise: </h2>
            <p style={{color:"#75707f;"}}>Now that you know the basics, let's apply them to a programming exercise.</p>
            <h2 style={{ color: "white" }}>Task: </h2>
            <p style={{color:"#75707f;"}}>Write a JavaScript function that accepts a string as input and reverse the string.</p>
            <h2 style={{ color: "white" }}>Hint: </h2>
            <p style={{color:"#75707f;"}}>You can use string and array methods like split, reverse, and join.</p>
            <h2 style={{ color: "white" }}>Good luck and happy coding!</h2>
            <EditorFree value={code1} onChange={handleCodeChange1} />
          </div></>
      )}

      <div className="form-navigation">
        {currentStep > 0 &&
        <div style={{ width:"100px"  , float:"left" , display:"block" }}>
          <button className="custom-btn btn-15" type="button" onClick={handlePrevious} >&lt; Previous</button>
          </div>
          }
        {currentStep < 4 && <div style={{ width:"100px" , marginRight: "30px" , marginLeft: "auto"  , display:"block" }}><button className="custom-btn btn-15" type="button" onClick={handleNext} >Next &gt;</button></div>}
        {currentStep === 4 &&  <div style={{ width:"100px" , marginRight: "30px" , marginLeft: "auto" , display:"block" }}><button className="custom-btn btn-15" onClick={handleSubmit} >Submit</button></div>}
      </div>
    </div>
  );
};

export default Slideshow;
