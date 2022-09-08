/* eslint-disable jsx-a11y/alt-text */
import style from '../styles/SecondBodyComponent.module.scss'
import secondBackground from '../public/secondBackground.png'
import Image from 'next/image'
import userImage from '../public/userImage.png'




const BodySecondComponent = () => {
   
    return (
        <section  className={style.section}>
            <article className={style.pageContainer}>
                <div className={style.titleComponent}>
                    <h2 className={style.title}>Collect everything in&nbsp;one&nbsp;place</h2>
                </div>
                <div className={style.cardContainer}>
                    <article className={style.card}>
                        <div className={style.cardChildBody}> 
                            <div className={style.ImageContainer}>
                                <div className={style.firstImage}></div>
                            </div>
                         </div>
                        <div className={style.cardChildFooter}>
                            <h2 className={style.header}>Write notes & to-do lists</h2>
                            <p>Simple text editing and task management make it easy to add your thoughts to a board.</p>
                        </div>
                    </article>
                    <article className={style.card}>
                        <div className={style.cardChildBody}>
                            <div className={style.ImageContainer}>
                                <div className={style.secondImage}></div>
                            </div>
                        </div>
                        <div className={style.cardChildFooter}>
                            <h2 className={style.header}>Upload images & files</h2>
                            <p>Milanote supports all common file types including JPGs, PDFs, Word, Excel, common design files and many more.</p>
                        </div>
                    </article>
                    <article className={style.card}>
                        <div className={style.cardChildBody}>
                            <div className={style.ImageContainer}>
                                <div className={style.thdImage}></div>
                            </div>
                        </div>
                        <div className={style.cardChildFooter}>
                            <h2 className={style.header}>Save text, images & links from the web</h2>
                            <p>The <a href="/download-web-clipper">Milanote Web Clipper</a> lets you save inspiration and ideas from any website with a single click.</p>
                        </div>
                    </article>
                    <article className={style.card}>
                        <div className={style.cardChildBody}>
                            <div className={style.ImageContainer}>
                                <div className={style.fthImageContainer}></div>
                            </div>
                        </div>
                        <div className={style.cardChildFooter}>
                            <h2 className={style.header}>Add notes & photos from your phone</h2>
                            <p>Anything you save in the <a href="/download-mobile-app">Milanote app</a> will be ready to organize as soon as you re back at your computer.</p>
                        </div>
                    </article>
                </div>
            </article>
        </section>
    )
}


export default BodySecondComponent