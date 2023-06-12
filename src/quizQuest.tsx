import React, { ChangeEvent, FormEvent, useState } from 'react';
import './QuizQuest.scss'

interface FormState {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
  question11: string;
}

const initialFormState: FormState = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
  question8: "",
  question9: "",
  question10: "",
  question11: ""
};

const SurveyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    event.preventDefault();
    // Stringify the answers object and store it
    localStorage.setItem('answers', JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ border: '1px solid lightgray', borderRadius: '5px', padding: '20px', textAlign: 'center' }}>
      <h2 style={{color: 'white'}}>
          This is a small personality test based on the myers & briggs 16 types , there isnt a correct answer just choose the answer that you think is right.
          </h2>
          <br/>
        <div style={{ marginBottom: '10px' }}>
          <p>Question 1: You’ve just been given a complex task to code. What are you most likely to do?</p>
          <label>
            <input
              type="radio"
              name="question1"
              value="A"
              checked={formData.question1 === 'A'}
              onChange={handleChange}
            />
            Get straight into the task by putting in the initial code and prototyping the task.
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="B"
              checked={formData.question1 === 'B'}
              onChange={handleChange}
            />
            Get everyone’s feedback on the problem, discuss all the possible options, then decide the best way to approach the problem given the current situation.
          </label>
        </div>

        {/* Add all other questions here in similar format as above, replace 'question1' with appropriate question number and 'A'/'B' with answer option */}

        <div style={{ marginBottom: '10px' }}>
          <p>Question 2: Comments should be placed:</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="A"
              checked={formData.question2 === 'A'}
              onChange={handleChange}
            />
            To explain anything that may seem ambiguous.
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="B"
              checked={formData.question2 === 'B'}
              onChange={handleChange}
            />
            Only when a programmer isn’t good enough to explain themselves in variable and function names.
          </label>
        </div>

        {/* Similar structure for all the remaining questions */}
        <div style={{ marginBottom: '10px' }}>
          <p>Question 3: Where do you spend most of your time?</p>
          <label>
            <input
              type="radio"
              name="question3"
              value="A"
              checked={formData.question3 === 'A'}
              onChange={handleChange}
            />
            Moving registers around or doing pointer arithmetic (or creating functions)
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="B"
              checked={formData.question3 === 'B'}
              onChange={handleChange}
            />
            Drawing UML diagrams (or making objects)
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 4: Who is a ‘better’ programmer?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="A"
              checked={formData.question4 === 'A'}
              onChange={handleChange}
            />
            Someone who went to university/college and has at least a masters in their field. They should read as many books on a subject as they can find before starting on it.
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="B"
              checked={formData.question4 === 'B'}
              onChange={handleChange}
            />
            Someone who has been coding since they were 5 and simply goes by raw talent alone.          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 5: Which is the ‘best’ way to program?</p>
          <label>
            <input
              type="radio"
              name="question5"
              value="A"
              checked={formData.question5 === 'A'}
              onChange={handleChange}
            />
            In assembly or straight C. I’m in complete control of what the program’s going to do.
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="B"
              checked={formData.question5 === 'B'}
              onChange={handleChange}
            />
            Java or any .net language. Why waste valuable time on memory management and re-inventing the wheel when someone’s handled it for you!
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 6: Approximately what % of a project should be spent in planning?</p>
          <label>
            <input
              type="radio"
              name="question6"
              value="A"
              checked={formData.question6 === 'A'}
              onChange={handleChange}
            />
            ~25% – The best way to complete a task is to plan as you go.
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="B"
              checked={formData.question6 === 'B'}
              onChange={handleChange}
            />
            ~75% – The more planning, the less code you need to write. By the time you code, you should simply be filling in stubs.
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 7: If something needs to be done properly:</p>
          <label>
            <input
              type="radio"
              name="question7"
              value="A"
              checked={formData.question7 === 'A'}
              onChange={handleChange}
            />
            Get the team together and discuss the best way of solving the problem. Then break it up and give each piece based on people’s strengths.
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="B"
              checked={formData.question7 === 'B'}
              onChange={handleChange}
            />
            Do it yourself.
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 8: The ‘perfect’ language will:</p>
          <label>
            <input
              type="radio"
              name="question8"
              value="A"
              checked={formData.question8 === 'A'}
              onChange={handleChange}
            />
            Allow anybody in the world to program.
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="B"
              checked={formData.question8 === 'B'}
              onChange={handleChange}
            />
            Allow me to make the best use of systems resources.
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 9: You’ve been given a task to do that will take one man month, how big is the optimal team?</p>
          <label>
            <input
              type="radio"
              name="question9"
              value="A"
              checked={formData.question9 === 'A'}
              onChange={handleChange}
            />
            5
          </label>
          <br/>
          <label>
            <input
              type="radio"
              name="question9"
              value="B"
              checked={formData.question9 === 'B'}
              onChange={handleChange}
            />
            1
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 10: When you program you:</p>
          <label>
            <input
              type="radio"
              name="question10"
              value="A"
              checked={formData.question10 === 'A'}
              onChange={handleChange}
            />
            Shut the door and the rest of the world out.
          </label>
          <label>
            <input
              type="radio"
              name="question10"
              value="B"
              checked={formData.question10 === 'B'}
              onChange={handleChange}
            />
            Share a desk with a peer and have group meetings often to discuss what to do next.
          </label>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <p>Question 11: White space should be:</p>
          <label>
            <input
              type="radio"
              name="question11"
              value="A"
              checked={formData.question11 === 'A'}
              onChange={handleChange}
            />
            Used sparingly

          </label>
          <br/>
          <label>
            <input
              type="radio"
              name="question11"
              value="B"
              checked={formData.question11 === 'B'}
              onChange={handleChange}
            />
            Used everywhere
          </label>
        </div>
        <button className="custom-btn btn-12" type="submit"><span>now</span><span>submit</span></button>
        </div>
        
    </form>
  );
};

export default SurveyForm;
