import style from '../styles/Navbar.module.scss'
import logo from '../public/logo.png'
import Image from 'next/image'
import { GoChevronDown } from "react-icons/go";
import {HiMenu} from 'react-icons/hi'



const Navbar = () => {


    return (
        <section className={style.container}>
            <header className={style.header}>
                <div className={style.logoContainer}>
                
                    <Image src={logo} className={style.logoIcon}/>
                    <span className={style.logo}> Milanote</span>
                </div>
                <nav className={style.navContainer}>
                    <div className={style.nav}>
                        <ul className={style.listContainer}>
                            <li>
                                <div className={style.dropDownMenu}>
                                    <a href="/">How people use Milanote</a>
                                    <GoChevronDown clasName={style.downIcon}/>
                                </div>
                            </li>
                            <li ><a className={style.logInButton}>Log in</a></li>
                            <li className={style.navButton}><a className={style.signUp}>Sign up for free</a></li>
                        </ul>
                    </div>
                </nav>
                <div className={style.menu}>
                    <HiMenu className={style.menuIcon}/>
                </div>
            </header>
        </section>
    )
}

export default Navbar