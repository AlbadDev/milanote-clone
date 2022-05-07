import style from '../styles/SegmentCorouselContainer.module.scss'




const SegmentCorouselContainer = () => {



    return (
        <section className={style.sectionContainer}>
            <header className={style.header}>
                <h3 className={style.title}>Designers use Milanote to organize their projects</h3>
            </header>
            <div className={style.buttonContainer}>
                <button className={style.findMe}>Find out how</button>
            </div>
            <article className={style.articleContainer}>
                Hello Im A Container
            </article>
        </section>
    )
}


export default SegmentCorouselContainer