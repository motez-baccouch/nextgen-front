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
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
  };



  const [code, setCode] = useState("");
  const [code1 , setCode1]=useState("");
  const [code2 , setCode2]=useState("");
  useEffect(() => {
    localStorage.setItem('code', code);
  }, [code]);
  useEffect(() => {
    localStorage.setItem('code1', code1);
  }, [code1]);
  useEffect(() => {
    localStorage.setItem('code2', code2);
  }, [code2]);
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  
  const handleCodeChange1 = (newCode: string) => {
    setCode1(newCode);
  };
  const handleCodeChange2 = (newCode: string) => {
    setCode2(newCode);
  };

  const [localData, setLocalData] = useState<{
    answers: string,
    code: string,
    code1: string,
    code2: string
  }>({
    answers: '',
    code: '',
    code1: '',
    code2: ''
  });

  useEffect(() => {
    const answers = localStorage.getItem('answers');
    const code = localStorage.getItem('code');
    const code1 = localStorage.getItem('code1');
    const code2 = localStorage.getItem('time');

    if (answers && code && code1 && code2) {
      setLocalData({
        answers,
        code,
        code1,
        code2
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
        const code2 = localStorage.getItem('code2');
    
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
        addMultiLineText(`code2 ${code2}`);
    
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
            <li >Micro Project</li>
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
            <li className="is-active">Podcast</li>
            <li>Micro Project</li>
            <li>Small Course</li>
            <li>Project</li>
          </ul>
        </div>
        <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dsXBgROjSqc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
         </>
      )}
      
      {currentStep === 2 && (
        <><div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>Podcast</li>
            <li >Podcast</li>
            <li className="is-active">Micro Project</li>
            <li>Small Course</li>
            <li>Project</li>
          </ul>
        </div><div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white' }}>Write a simple code that calculate the pgcd of 2 given number(you aer free to use any programming language)</h2>
            <br/>
            <h3 style={{color:"#75707f"}}>
            here is a description of how to calculate the Greatest Common Divisor (GCD) in English using the Euclidean algorithm.
<br/>

Assume you have two numbers for which you want to find the GCD, let's call them A and B.
<ul>
<li>Start by dividing the larger number (A) by the smaller number (B).</li>
<li>If A is divisible by B, then B is the GCD.</li>
<li>If A is not divisible by B, note the remainder (R).</li>
<li>Replace A with B and B with R (the remainder of the previous division operation).</li>
<li>Repeat steps 2 to 5 until A is divisible by B. At this point, B will be the GCD.</li>
</ul>
Here's an example:

Let's say you have two numbers: 48 and 18.
<ul>
<li>Divide 48 (A) by 18 (B), which gives a quotient of 2 and a remainder of 12 (R).</li>
<li>Now replace 48 with 18 and 18 with the remainder 12. So, A becomes 18 and B becomes 12.</li>
<li>Repeat the process. Divide 18 (A) by 12 (B), which gives a quotient of 1 and a remainder of 6 (R).</li>
<li>Again replace A with B and B with R. So, A becomes 12 and B becomes 6.</li>
<li>Repeat the process one more time. Divide 12 (A) by 6 (B). Now, A is divisible by B and hence B is the GCD.</li>
</ul>
So, the GCD of 48 and 18 is 6.
</h3>
            
            <EditorFree value={code} onChange={handleCodeChange} />
          </div></>
      )}

      {currentStep === 3 && (
        <><div className="container-fluid">
        <br /><br />
        <ul className="list-unstyled multi-steps">
          <li>Personality Test</li>
          <li >Podcast</li>
          <li>Micro Priject</li>
          <li className="is-active">Small Course</li>
          <li>Project</li>
        </ul>
      </div>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' , fontSize:"2em"}}>
        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png"  style={{ width: '300px', height:'300px' ,margin: 'auto' , display:"block" ,transform:'scaleX(1)', rotate: '0deg' }} />
        
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

<p style={{color:"#75707f"}}>JavaScript uses arithmetic and logical operators:

Arithmetic operators: `+ - * / % ++ --`
Logical operators: `&& || !`</p>

<h2 style={{color:'white'}}>5. Conditional Statements</h2>

<p style={{color:"#75707f"}}>If-else, switch are conditional statements that perform different actions based on different conditions.</p>

<Editor lines={5} value="if (age > 18) {
    console.log('You are an adult!');
} else {
    console.log('You are a minor!');
}" onChange={setCode} />

<br/>
<h2 style={{color:'white'}}>6. Loops</h2>

<p style={{color:"#75707f"}}>Loops are used to repeatedly run a block of code until a certain condition is met.</p>

<Editor lines={2} value="for(let i=0; i<10; i++) {
    console.log(i);}" onChange={setCode} />

<br/>
<h2 style={{color:'white'}}>7. Functions</h2>

<p style={{color:"#75707f"}}>Functions are a block of code designed to perform a particular task.</p>

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
            <li >Podcast</li>
            <li>Micro Project</li>
            <li>Small Course</li>
            <li className="is-active">Project</li>
          </ul>
        </div>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', fontSize: "2em" }}>
            <h2 style={{ color: "white" }}>Exercise: </h2>
            <p style={{color:"#75707f"}}>Now that you know the basics, let's apply them to a programming exercise.</p>
            <h2 style={{ color: "white" }}>Task: </h2>
            <p style={{color:"#75707f"}}>Write a JavaScript function that accepts a string as input and reverse the string.</p>
            <h2 style={{ color: "white" }}>Hint: </h2>
            <p style={{color:"#75707f"}}>You can use string and array methods like split, reverse, and join.</p>
            <h2 style={{ color: "white" }}>Good luck and happy coding!</h2>
            <EditorFree value={code1} onChange={handleCodeChange1} />
            <h2 style={{ color: "white" }}>Exercise:The Mysterious Array </h2>
            <p style={{color:"#75707f"}}>Consider the following JavaScript code:</p>
            <Editor lines={10} value="function processArray(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            numbers[i] *= 2;
        } else {
            numbers[i] *= 3;
        }
    }
    return numbers;
}

let myNumbers = [1, 2, 3, 4, 5];
console.log('Before processing: ' + myNumbers);
console.log('After processing: ' + processArray(myNumbers));
console.log('Original array: ' + myNumbers);
" onChange={setCode} />

            <h2 style={{ color: "white" }}>When you run this code, it triples the odd numbers and doubles the even numbers in the array. However, something unexpected happens when you print out the original array myNumbers after the processArray function is run.</h2>
            <p style={{color:"#75707f;"}}>Identify and fix the unexpected behavior of the code.
            <br/>
Explain why the original code behaved the way it did.
<br/>
Suggest improvements to ensure the function does not modify the original array.</p>
            <h2 style={{ color: "white" }}>please answer the following questions: </h2>
            <ul >
            <li style={{color:"#75707f"}}>What was the issue in the code?</li>
            <li style={{color:"#75707f"}}>How did you fix it?</li>
            <li style={{color:"#75707f"}}>Can you explain why the original code didn't work as expected?</li>
            <li style={{color:"#75707f"}}>What improvements did you make to the code?</li>
            <li style={{color:"#75707f"}}>What did you learn from this exercise?</li>
            </ul>

            <h2 style={{ color: "white" }}>Hint: </h2>
            <p style={{color:"#75707f;"}}> Consider how arrays are handled in JavaScript when passed as function arguments.</p>
            <h2 style={{ color: "white" }}>Good luck and happy coding!</h2>
            <EditorFree value={code2} onChange={handleCodeChange2} />
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
