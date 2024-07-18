import style from '../styles/FirstBodyComponent.module.scss'
import Image from 'next/image'
import userImage from 'public/userImage.png'
import companyIcon from '../public/companyIcon.png'


const BodyFirstComponent = () => {



    return (
        <section className={style.firstComponentContainer}>
            {/* <div> */}
                <section className={style.sectionComponent}>
                   <div className={style.articleContainer}>
                        <article className={style.leftContainer}>
                            <div className={style.container}>
                                <span className={style.leftTitle}>Get orgonized. Stay creative.</span>
                            
                                <div className={style.IntroComponent}>
                                    <div className={style.introContainer}>
                                        <p>
                                            Milanote is an easy-to-use tool to organize your ideas and projects into visual boards.
                                        </p>
                                    </div>
                                    <button className={style.signUp}><a href="">Sign up for free</a></button>
                                
                                    <div className={style.testimonialContainer}>
                                        <section className={style.testimonialComponent}>
                                            <article className={style.quote}>
                                                The Evernote for Creatives               
                                            </article>
                                            <article className={style.userInfo}>
                                               <div className={style.userInfonContainer}>
                                                    <div className={style.userImage}>
                                                        <Image src={userImage} width='40' height='40' alt='userImage' className={style.image}/>                                
                                                    </div>
                                                    <div className={style.user}>
                                                        <section className={style.userInfoHeader}>
                                                            <div className={style.name}>Bryan Clark</div>   
                                                            <div className={style.meta}>The Next Web</div>
                                                        </section>
                                                    </div>
                                               </div>
                                                <div className={style.company}><Image src={companyIcon} width='50' height='20' alt='userImage' className={style.companyIcon}/></div>               
                                            </article>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className={style.rightContainer}>
                            <div className={style.firstComponentRightImage}></div>
                        
                        </article>
                   </div>
                </section>
            {/* </div> */}
        </section>
    )
}

export default BodyFirstComponent