import { useCallback, useEffect, useRef, useContext, createContext } from 'react';

export const LogContext = createContext({});

export default function useLog() {
    const message = useContext(LogContext);
    const listenDOM = useRef<any>(null);

    const reportMessage = useCallback(function (data, type) {
        if (type === 'pv') {
            console.log('pv', message, data);
        } else if (type === 'click') {
            console.log('click', data);
        }
    }, [message])

    useEffect(() => {
        const handleClick = function (e) {
            reportMessage(e.target, 'click');
        }

        if (listenDOM.current) {
            listenDOM.current.addEventListener('click', handleClick);
        }

        return function () {
            listenDOM.current && listenDOM.current.removeEventListener('click', handleClick);
        }

    }, [reportMessage])

    return [listenDOM, reportMessage];
}