import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Timer from './Timer';

interface QuizSlide {
    question: string;
    answer: string;
}

const BugPuzzle: React.FC = () => {
    const slides: QuizSlide[] = [
        {
            question: 'Write a function that adds two numbers.',
            answer: 'function add(a, b) { return a + b; }',
        },
        {
            question: 'Write a function that returns the string "Hello, World!"',
            answer: 'function hello() { return "Hello, World!"; }',
        },
        {
            question: 'Write a function that multiplies two numbers.',
            answer: 'function multiply(a, b) { return a * b; }',
        },
    ];

    const [userAnswers, setUserAnswers] = useState<Array<string>>([]);
    const [globalTimeUp, setGlobalTimeUp] = useState(false);
    const [timeUpEventId, setTimeUpEventId] = useState(0);

    useEffect(() => {
        if (globalTimeUp) {
            alert("Time's up! Here are your answers: " + userAnswers.join(', '));
        }
    }, [globalTimeUp, userAnswers]);

    const handleSlideChange = (userAnswer: string) => {
        setUserAnswers(prev => [...prev, userAnswer]);
    };

   

    return (
        <div>
            <Carousel slides={slides} onNext={timeUpEventId} onSlideChange={handleSlideChange} />
        </div>)
};

export default BugPuzzle;
