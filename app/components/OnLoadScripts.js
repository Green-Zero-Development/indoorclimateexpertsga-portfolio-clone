'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function OnLoadScripts({ pageData }) {
    const topbarData = pageData.global_sections[0];
    const pathname = usePathname();
    useEffect(() => {
        const topbarDiv = document.getElementById('topbar');
        for (let i = 0; i < topbarData.acf.page_visibility.length; i++) {
            if (topbarData.acf.page_visibility[i].includes(pathname) === true && pathname !== '/') {
                topbarDiv.classList.remove('hide-topbar');
                break;
            } else {
                topbarDiv.classList.add('hide-topbar');
            }
        }
    }, []);
    return (
        <>
        
        </>
    )
}