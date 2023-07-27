import React, { useEffect, useState } from 'react';
import {Editor , EditorFree} from './Editor';
import './slides.scss';




const Reverse: React.FC = () => {
    const codeString = `
    function generateWelcomeMessage(name, language) {
        let message = "";
        if(language === 'English'){
            message = \`Hello, \${name}! Welcome to our site.\`;
        } else if(language === 'Spanish'){
            message = \`Hola, \${name}! Bienvenido a nuestro sitio.\`;
        } else {
            message = \`Hi, \${name}! You are welcome.\`;
        }
        console.log(message);
    }
    
    generateWelcomeMessage('John', 'English');
    `;


  
  const [code, setCode] = useState(codeString);
  
 
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  


 
  return (
    
      
    
       <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white' }}> This is simple JavaScript project, it has a small function that generates a welcome message.</h2>
            <br/>
            <h3 style={{color:"#75707f"}}>Here's the original code:</h3>
<br/>
<EditorFree value={code} onChange={handleCodeChange} />
<form>
  <div style={{color :"white"}}>
  Your task is to tinker with the function to change its behavior in the following ways:
<ul>
<li>1- Add support for French. If the language is French, the message should be Bonjour, (name)! Bienvenue sur notre site.</li>
<br/> 
<li>2- Change the default message (when the language is neither English, Spanish, nor French) to Hello, (name)! We're happy to see you here.</li>
<br/> 
<li>3- Instead of logging the message to the console, return the message as a string from the function. Create another function logMessage() that takes a string as an argument and logs it to the console. Call logMessage() with the message returned from generateWelcomeMessage().
   
</li>
</ul>
<br/>
<input  className="form-control" id="Question1"  placeholder="can you please describe what the task is exactly:"  style={{ backgroundColor: 'transparent', color: 'white' }} />

Please make the necessary modifications in the code and test it to ensure it works as expected. Happy coding!


    
    
  </div>
</form>
<br/>

            
            
          </div>
  );
};

export default Reverse;
