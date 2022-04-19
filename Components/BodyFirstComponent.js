import style from '../styles/FirstBodyComponent.module.scss'
const BodyFirstComponent = () => {



    return (
        <section className={style.firstComponentContainer}>
            <div>
                <section className={style.sectionComponent}>
                   <div className={style.articleContainer}>
                        <article className={style.leftContainer}>
                               <p>left</p>
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