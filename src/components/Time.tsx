import { useEffect, useState } from 'react';

const UPDATE_INTERVAL_MS = 60_000;

export function getFormattedDate(now: Date) {
    return {
        day: new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(now),
        date: new Intl.DateTimeFormat(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(now),
    };
}

export function Time() {
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const update = () => {
            const formatted = getFormattedDate(new Date());
            setDay(formatted.day);
            setDate(formatted.date);
        };

        update();
        const intervalId = setInterval(update, UPDATE_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col justify-center font-Inter text-lg font-bold max-md:text-sm">
            <time>{day}</time>
            <time className="text-light-blue">{date}</time>
        </div>
    );
}
