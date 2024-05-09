import React, { useState, useEffect } from 'react';

const PageViewCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/api/page-views')
            .then(response => response.json())
            .then(data => setCount(data.views));
    }, []);

    return (
        <div>
            Aceasta pagina a fost vizitata de {count} ori.
        </div>
    );
};

export default PageViewCounter;