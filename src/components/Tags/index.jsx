import Link from 'next/link';

import tag from './tags.module.css';

export function Tags({ tags }){
    return (
        <ul className={tag.container}>
            {   tags.slice(0, 2).map((tag, index) => {
                    const ids = tag.sys.id;

                    return (
                        <li key={index}>
                            <Link href={`/tags/${ids}`}><a>
                                { ids }
                            </a></Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}