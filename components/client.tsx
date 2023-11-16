'use client';

import { useEffect, useState } from 'react';

export default function Client() {
    const [data, setData] = useState('error');
    useEffect(() => {
        (async function () {
            try {
                const { body } = await (await fetch(`/api/buloz`)).json();
                setData(body);
            } catch {
                setData('errorbip');
            }
        })();
    }, []);
    return <div>{data}</div>;
}
