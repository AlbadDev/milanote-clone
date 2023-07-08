import Image from 'next/image'
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
                <div className={style.bodyContainer}>
                    <Image src='https://images.prismic.io/milanote/184fed5a-5b9e-4369-8b65-51d4e9005f76_Image-Article-Research-Board.png' width='150' height='780' layout='responsive'  alt='albad' className={style.Image}/>
                    {/* <section className={style.bodySection}>
                         <article className={style.articleContainer}></article> 
                        
                    </section> */}
                </div>
            </article>
        </section>
    )
}

export default OrganizeVisuallyComponent