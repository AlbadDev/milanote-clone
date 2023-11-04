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
                    <span className={style.title}>Collect everything in&nbsp;one&nbsp;place</span>
                </div>
                <div className={style.cardContainer}>
                    <div className={style.articleContainer}>
                        <article className={style.card}>
                            <div className={style.cardChildBody} id={style.cardHead}> 
                                <div className={style.ImageContainer}>
                                    {/* <div className={style.firstImage}></div> */}
                                    <Image src='https://images.prismic.io/milanote/45cf75e0-22ed-40df-ac23-4e8dfe6f1744_image-write-notes-lists.png' width={270} height={300} alt='img' className={style.firstImage}/>
                                </div>
                            </div>
                            <div className={style.cardChildFooter}>
                                <h2 className={style.header}>Write notes & to-do lists</h2>
                                <p>Simple text editing and task management make it easy to add your thoughts to a board.</p>
                            </div>
                        </article>
                    </div>

                    <article className={style.card}>
                        <div className={style.cardChildBody} id={style.cardHead}>
                            <div className={style.ImageContainer}>
                            <Image src='https://images.prismic.io/milanote/225d281d-c602-45c3-b070-822e24e10331_image-upload-files.png' width={270} height={400} alt='img' className={style.thdImage}/>
                                {/* <div className={style.secondImage}></div> */}
                            </div>
                        </div>
                        <div className={style.cardChildFooter}>
                            <h2 className={style.header}>Upload images & files</h2>
                            <p>Milanote supports all common file types including JPGs, PDFs, Word, Excel, common design files and many more.</p>
                        </div>
                    </article>
                    <article className={style.card}>
                        <div className={style.cardChildBody} id={style.cardHead}>
                            <div className={style.ImageContainer} >
                                <Image src='https://images.prismic.io/milanote/0c215c36-0679-49c0-b9e7-5be46235e0b1_image-save-test-images-links%402x.png' width={250} height={270} alt='img' className={style.thdImage}/>                         
                                {/* <div className={style.thdImage}></div> */}
                            </div>
                        </div>
                        <div className={style.cardChildFooter} id={style.thFooter}>
                            <h2 className={style.header}>Save text, images & links from the web</h2>
                            <p>The <a href="/download-web-clipper">Milanote Web Clipper</a> lets you save inspiration and ideas from any website with a single click.</p>
                        </div>
                    </article>
                    <article className={style.card}>
                        <div className={style.cardChildBody} id={style.cardHead}>
                            <div className={style.ImageContainer}>
                            <Image src='https://images.prismic.io/milanote/8d93749e-4d08-450e-8e91-97f22f64106c_image-add-notes.png' width={270} height={410} alt='img' className={style.thdImage}/>
                                {/* <div className={style.fthImageContainer}></div> */}
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