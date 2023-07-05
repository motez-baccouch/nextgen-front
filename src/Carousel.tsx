import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import Timer from './Timer';


interface QuizSlide {
    question: string;
    answer: string;
}

interface CarouselProps {
    slides: QuizSlide[];
    onNext: number;
    onSlideChange: (userAnswer: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({slides, onNext, onSlideChange}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [userCode, setUserCode] = useState('');
    const [timeUpEventId, setTimeUpEventId] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Array<string>>([]);
    const [globalTimeUp, setGlobalTimeUp] = useState(false);
    useEffect(() => {
        if (globalTimeUp) {
            alert("Time's up! Here are your answers: " + userAnswers.join(', '));
        }
    }, [globalTimeUp, userAnswers]);



    useEffect(() => {
        goToNextSlide();
    }, [onNext]);

    const goToNextSlide = () => {
        let index = activeIndex;
        let slidesLength = slides.length - 1;
      
        if (index === slidesLength) {
          index = 0;
        } else {
          index++;
        }
      
        onSlideChange(userCode); // Send the user's code to the parent component
        setActiveIndex(index);
        setUserCode(''); // Clear the user code for the new question
      };
    const checkAnswer = () => {
        try {
            const result = String(eval(userCode));  // Be aware that using eval can be dangerous
            if (result === slides[activeIndex].answer) {
                goToNextSlide();
            } else {
                alert('Wrong answer, try again.');
            }
        } catch (error) {
            alert('There was an error running your code.');
        }
    };
    const handleSlideChange = (userAnswer: string) => {
        setUserAnswers(prev => [...prev, userAnswer]);
    };
    const handleSlideTimeUp = () => {
        alert("Time's up! Moving to the next question.");
        handleSlideChange('Skipped due to time out');
        setTimeUpEventId(prev => prev + 1);  // Update the event ID
        goToNextSlide();
    };
    return (
        <div  style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
            <Timer initialTime={120} onTimeUp={() => setGlobalTimeUp(true)} onReset={() => {}} />
            <div>
                <h2>{slides[activeIndex].question}</h2>
                  
                <AceEditor
                  setOptions={{ useWorker: false }}
                  mode="javascript"
                  theme="monokai"
                  name="UNIQUE_ID_OF_DIV"
                  editorProps={{ $blockScrolling: true }}
                  value={userCode}
                  onChange={setUserCode}
                />
            </div>
            <button onClick={checkAnswer}>Submit Answer</button>
            <button onClick={goToNextSlide}>Skip</button>
            <Timer initialTime={60} onTimeUp={handleSlideTimeUp} onReset={() => setTimeUpEventId(0)} />
        </div>
    )
};

export default Carousel;