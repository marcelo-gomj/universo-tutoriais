import { ItemBanner } from './ItemBanner';

import banner from './banner.module.css';

export function HomeBanner({ items }){

    const bannerList = items.slice(1, 5)
    return (
        <section className={banner.container}>
            <header>
                <h2>DESTAQUES</h2>
            </header>

            <div className={banner.layout}>
                <div className={banner.cover}>
                    <ItemBanner 
                        key={bannerList[0].sys.id} 
                        item={bannerList[0]} 
                        isExcerpt={true} 
                    />
                </div>

                <div className={banner.posts}>
                    {
                        bannerList.map((item, index) => {
                            if(index){
                                return <ItemBanner key={item.sys.id} item={item}/>
                            }
                        })
                    }
                </div>
            </div>

        </section>
    )
}