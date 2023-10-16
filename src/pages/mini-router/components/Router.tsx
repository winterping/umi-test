import React, { createContext, useMemo, useState, useEffect, useContext } from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Card, Row } from 'antd';

const RouterContext = createContext();
export let routerHistory: any = null;

const Router = (props) => {
    const history = useMemo(() => {
        routerHistory = createHistory();
        return routerHistory;
    }, [])

    const [location, setLocation] = useState(history.location);

    useEffect(() => {
        const unlisten = history.listen((location) => {
            setLocation(location);
        })
        return function () {
            unlisten && unlisten();
        }
    }, [])
    return (
        <Row>
            <div>router</div>
        </Row>
    )
}
export default Router;