import style from '../styles/FirstBodyComponent.module.scss'
const BodyFirstComponent = () => {



    return (
        <section className={style.firstComponentContainer}>
            <div>
                <section className={style.sectionComponent}>
                   <div className={style.articleContainer}>
                        <article className={style.leftContainer}>
                            <div className={style.container}>
                                <h1>Get orgonized. Stay creative.</h1>
                            
                                <div className={style.IntroComponent}>
                                    <div className={style.introContainer}>
                                        <p>
                                            Milanote is an easy-to-use tool to organize your ideas and projects into visual boards.
                                        </p>
                                    </div>
                                    <button className={style.signUp}>Sign up for free<a href='/'></a></button>
                                </div>
                            </div>
                        </article>
                        <article className={style.rightContainer}>
                                <p>right</p>
                        </article>
                   </div>
                </section>
            </div>
        </section>
    )
}

export default BodyFirstComponent