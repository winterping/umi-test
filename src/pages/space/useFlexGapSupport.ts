import React, { useState, useEffect } from "react";
import { detectFlexGapSupported } from './util';

export default () => {
    const [flexible, setFlexible] = useState(false);
    useEffect(() => {
        setFlexible(detectFlexGapSupported())
    }, [])
    return flexible;
}