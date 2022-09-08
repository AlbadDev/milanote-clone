import style from '../styles/TestimonialSlice.module.scss'
import Image from 'next/image'

const TestimonialSlice = ({testimonialResult}) => {



    return (
        <section className={style.container}>
          <div className={style.testimonialWrap}>
              <section className={style.testimonialContainer}>
                    {testimonialResult.map(data => (
                    <section className={style.testimonial}>
                        <div className={style.quote}>
                            {data.quote}
                        </div>
                        <div className={style.user}>
                            <article className={style.userAvatar}>
                                <Image src={data.userAvatar} width='50' height='50' className={style.avatar}/>
                            </article>
                            <article className={style.userInfo}>
                               <div className={style.userName}> <h6>{data.userName}</h6></div>
                                <div className={style.userTitle}><p>{data.userTitle}</p></div>
                            </article>
                            <article className={style.companyLogo}>
                                <Image src={data.companyLogo} width='80' height='30'/>
                            </article>
                        </div>
                    </section>
                    ))}
              </section>
            
          </div>
        </section>
    )
}


export default TestimonialSlice