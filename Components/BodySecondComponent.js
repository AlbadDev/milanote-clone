import style from '../styles/SecondBodyComponent.module.scss'
import secondBackground from '../public/secondBackground.png'

const BodySecondComponent = () => {
   
    return (
        <section  className={style.section}>
            <article className={style.pageContainer}>
                <div className={style.titleComponent}>
                    <h2 className={style.title}>Collect everything in&nbsp;one&nbsp;place</h2>
                </div>
                <div className={style.cardContainer}>
                    <article className={style.card}>card 1</article>
                    <article className={style.card}>card 2</article>
                    <article className={style.card}>card 3</article>
                    <article className={style.card}>card 4</article>
                </div>
            </article>
        </section>
    )
}


export default BodySecondComponent