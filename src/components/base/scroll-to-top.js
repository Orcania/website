import { useEffect } from 'react';
import Router from 'next/router';

export default function ScrollToTop() {
    const { pathname } = Router;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
