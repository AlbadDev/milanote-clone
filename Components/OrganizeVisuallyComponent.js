import style from '../styles/OrganizeVisuallyComponent.module.scss'



const OrganizeVisuallyComponent = () => {


    return (
        <section className={style.sectionContainer}>
            <article className={style.articleContainer}>
                <div className={style.header}>
                    <h2 className={style.title}>Organize visually</h2>
                    <p className={style.paragraph}>
                    Milanote s flexible drag and drop interface lets you arrange things in whatever way makes sense for your project.
                    </p>
                </div>
                <div className={style.body}>bla bla bla</div>
            </article>
        </section>
    )
}

export default OrganizeVisuallyComponent