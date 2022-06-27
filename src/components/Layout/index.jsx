import { Header } from '../Header';
import { Footer } from '../Footer';

import layout from './layout.module.css';

export function Layout({ children }){
    return (
        <div className={layout.container}>
            <Header />
            <div className={layout["container-main"]}>
                { children }
                <Footer />
            </div>
        </div>
    )
}
