import { useEffect, useState } from 'react';

interface TimerProps {
    initialTime: number;
    onTimeUp: () => void;
    onReset: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp, onReset }) => {
    const [seconds, setSeconds] = useState(initialTime);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        } else {
            if (interval !== null) {
                clearInterval(interval);
            }
            onTimeUp();
            setSeconds(initialTime); // Reset the timer
            onReset();
        }
        return () => {
            if (interval !== null) {
                clearInterval(interval);
            }
        };
    }, [seconds, onTimeUp, onReset, initialTime]);

    return (
        <div>
            Time left: {seconds}
        </div>
    )
};

export default Timer;
