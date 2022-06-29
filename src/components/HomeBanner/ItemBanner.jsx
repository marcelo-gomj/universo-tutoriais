import Link from 'next/link';
import Image from 'next/image';

import { Tags } from '../Tags';

import banner from './banner.module.css';


export function ItemBanner({ item, isExcerpt }){
    const { tags } = item.metadata;
    const link = `/${item.fields.url}`
    const src = 'https:' + item.fields.imagePost.fields.file.url;
    const alt = item.fields.imagePost.fields.description;
    const excerpt = item.fields.excerpt.split('')
        .filter((_, word) => word < 120).join('') + '...';

    return (
        <Link href={link}>
            <a>
                <article className={banner.post}>
                    <div>
                        <div className={banner.image}>
                            <Image 
                                src={src}
                                alt={alt}
                                layout='fill'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className={banner.description}>
                        <h3>{ item.fields.title }</h3>
                        { isExcerpt && <p>{excerpt}</p> }
                    </div>
                </article>
            </a>
        </Link>
    )
}