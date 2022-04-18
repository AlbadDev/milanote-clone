import style from '../../styles/Navbar.module.scss'
import Image from 'next/image'





const Navbar = () => {


    return (
        <section className={style.container}>
            <header className={style.header}>
                <div>
                    {/* <Image src={}/> */}
                    <span className={style.logo}> Milanote</span>
                </div>
                <nav className={style.navContainer}>
                    <div className={style.nav}>
                        <ul className={style.listContainer}>
                            <li>
                                <div className={style.dropDownMenu}>
                                    <a href="/">How people use Milanote</a>
                                </div>
                            </li>
                            <li ><a className={style.logInButton}>Log in</a></li>
                            <li className={style.navButton}><a className={style.signUp}>Sign up for free</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default Navbar