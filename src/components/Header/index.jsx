import Link from "next/link";
import header from "./header.module.css";

import HomeIcon from "../../assets/home.svg";
import Windows from "../../assets/windows.svg";
import Android from "../../assets/android.svg";
import Linux from "../../assets/linux.svg";
import Lamp from "../../assets/lamp.svg";
import About from "../../assets/about.svg";
import Search from "../../assets/search.svg";

export function Header(){
    return (
        <header className={header.header}>
            <div className={header.container}>
                <div className={header["container-main"]}>
                    <div className={header.logo}>UM</div>
                    <nav className={header["container-menu"]}>
                        <ul className={header.menu}>
                            <li><Link href="/"><HomeIcon /></Link></li>
                            <li><Search /></li>

                            <li><Link href="/windows"><Windows /></Link></li>
                            <li><Link href="/android"><Android /></Link></li>
                            <li><Link href="/linux"><Linux /></Link></li>
                            <li><Link href="/outros"><Lamp /></Link></li>
                            <li><Link href="/sobre"><About /></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
