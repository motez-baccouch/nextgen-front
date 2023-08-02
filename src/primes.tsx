import React, { useEffect, useState } from 'react';
import {Editor , EditorFree} from './Editor';
import './slides.scss';




const Primes: React.FC = () => {
    const codeString = `
    // Create the empty arrays
    let multiplesArray = [];
    let primeArray = [];
    
    // your code ...


    console.log("Multiples of 3 or 5: ", multiplesArray);
    console.log("Prime numbers: ", primeArray);
    
    `;


    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsVisible(!isVisible);
      };

  const [code, setCode] = useState(codeString);
  
 
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  


 
  return (
    
      
    
       <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white' }}> <b>Exercise:</b> Multiples and Primes</h2>
            <br/>
            <h3 style={{color:"#75707f"}}>Exercise Description:
            <h3 style={{color:"#75707f"}}>Create a JavaScript program that identifies and separates numbers into two different categories: multiples of 3 or 5, and prime numbers. The program will consider numbers from 1 up to 1000, inclusive.</h3>
</h3>
<br/>
<form>
  <div style={{color :"white"}}>
  Details:
<ul>
<li>1- <b>Multiples of 3 or 5: </b>The program should identify numbers that are multiples of either 3 or 5. These numbers should be stored in an array.</li>
<br/> 
<li>2- <b>Prime numbers:</b> The program should also identify prime numbers. These should be stored in a different array.</li>
<br/> 
<li><b>Result:</b> At the end of the program, output both arrays using console.log()</li>
</ul>
<br/>

<button onClick={handleClick}>
        {isVisible ? 'Hide details' : 'example implementation'}
      </button>
      {isVisible && (
        <div>
          
          
          <h3>Steps:</h3>
          <ol>
            <li>Create two empty arrays. One for the multiples of 3 or 5, and the other for the prime numbers.</li>
            <li>Create a function, isMultipleOf3or5(), that takes a number and returns true if the number is a multiple of 3 or 5, and false otherwise.</li>
            <li>Create a second function, isPrime(), that takes a number and returns true if the number is prime, and false otherwise.</li>
            <li>Create a loop that goes through every number from 1 to 1000 (inclusive).</li>
            <li>In each iteration of the loop, check if the current number is a multiple of 3 or 5 using the isMultipleOf3or5() function. If it is, add it to the first array.</li>
            <li>In the same iteration, check if the current number is prime using the isPrime() function. If it is, add it to the second array.</li>
            <li>After the loop ends, print both arrays to the console using console.log().</li>
          </ol>
        </div>
        
      )}

   
    
    
  </div>
</form>
<br/>
<input  className="form-control" id="Question1"  placeholder="can you please describe what the task is exactly:"  style={{ backgroundColor: 'transparent', color: 'white' }} />

<br/> 
<EditorFree value={code} onChange={handleCodeChange} />
          </div>
  );
};

export default Primes;
