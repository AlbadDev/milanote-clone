import style from '../styles/RegisterFormFooter.module.scss'
import Image from 'next/image'



const RegisterFormFooter = () => {



    return (
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <article className={style.background}>
                    <div className={style.backgroundImg}>
                        {/* <Image src='https://images.prismic.io/milanote/63d2e479-ad44-4cee-ae46-c25e4ed07091_register-footer-bg%402x.jpg' width='2000' height='750' loading="lazy"/> */}
                    </div>
                </article>
                <article>Form Footer</article>
            </div>
        </section>
    )
}

        
export default RegisterFormFooter