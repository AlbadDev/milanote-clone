import Image from 'next/image'
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
                     <Image src='https://images.prismic.io/milanote/9038117d-0669-49f3-96fa-54e387fcdd75_Image-sketch-ideas-board.png' width='150' height='780' layout='responsive'  alt='albad' className={style.Image}/>
                </div>
            </article>
        </section>
    )
}

export default CollaborateTeamComponent