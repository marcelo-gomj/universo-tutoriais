import footer from "./footer.module.css";
import Link from "next/link";

export function Footer(){
    return (
        <footer className={footer.container}>
            <ul>
                <li>Redes Sociais</li>
                <li><Link href="/Instagram">Instagram</Link></li>
                <li><Link href="/Twitter">Twitter</Link></li>
                <li><Link href="/Facebook">Facebook</Link></li>
                <li><Link href="/Pinterest">Pinterest</Link></li>
            </ul>
            <ul>
                <li>Tags</li>
                <li><Link href="/Otimizacão">Otimizacão</Link></li>
                <li><Link href="/Ùtilitarios">Ùtilitarios</Link></li>
                <li><Link href="/Windows">Windows</Link></li>
                <li><Link href="/Grátis">Grátis</Link></li>
            </ul>
            <ul>
                <li>Categorias</li>
                <li><Link href="/Windows">Windows</Link></li>
                <li><Link href="/Android">Android</Link></li>
                <li><Link href="/Linux">Linux</Link></li>
                <li><Link href="/Outros">Outros</Link></li>

            </ul>
        </footer>
    )
}
