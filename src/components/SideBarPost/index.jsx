import Link from "next/link";

import sidebar from "./sidebar.module.css";

export function SideBarPost(){
    return (
        <aside className={sidebar.container}>
            <section className={sidebar["most-popular"]}>
                <h3>Mais populares</h3>
                <ul>
                    <li><Link href="/dolby">Como usar o Dolby Atmos ?</Link></li>
                    <li><Link href="/windows-11">Aprenda a atualizar o windows 10 para 11</Link></li>
                    <li><Link href="/manjaro">Instalar o Manjaro 22</Link></li>
                    <li><Link href="/dual-boot">Como fazer dual boot com Windows e Manjaro?</Link></li>
                    <li><Link href="/rufus">Tudo sobre o Rufus</Link></li>
                </ul>
            </section>
            <section className={sidebar["infos"]}>
                <p>
                    Salve nosso site em seus marcadores para poder ficar atualizado sobre
                    nossos posts
                </p>
            </section>
        </aside>
    )
}