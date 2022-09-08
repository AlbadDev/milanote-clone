import style from '../styles/CollaborateTeamComponent.module.scss'


const CollaborateTeamComponent = () => {


    return (
        <section className={style.sectionContainer}>
            <article className={style.articleContainer}>
                <div className={style.header}>
                    <h2 className={style.title}>Collaborate with your team</h2>
                    <p className={style.paragraph}>
                        Use Milanote as your online whiteboard to brainstorm ideas and work with your team, wherever they`re located.
                    </p>
                </div>
                <div className={style.bodyContainer}>
                    <section className={style.bodySection}>
                        <article className={style.articleContainer}></article>
                    </section>
                </div>
            </article>
        </section>
    )
}

export default CollaborateTeamComponent