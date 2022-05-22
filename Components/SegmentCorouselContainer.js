import  { useState } from 'react'
// import SegmentCorouselSlice from './SegmentCorouselSlice'
import style from '../styles/SegmentCorouselContainer.module.scss'
import Image from 'next/image'
import CorouselData from './CorouselData'



const SegmentCorouselContainer = ({responseData}) => {

    const [myId, setMyId] = useState('hi')
    const handleClick = (e) => e.preventDefault()
    const chanceIdOnclick = () => {
        setMyId('hello')
    }

    return (
        <>

            <section className={style.sectionContainer}>
                <header className={style.header}>
                    <h3 className={style.title}>Designers use Milanote to organize their projects</h3>
                </header>
                <div className={style.buttonContainer}>
                    <button className={style.findMe} onClick={chanceIdOnclick} onChange={handleClick}>{myId}</button>
                </div>
                <article className={style.articleContainer}>
                    

                    
                    <Image src='https://images.prismic.io/milanote/171ca694-65fd-4d42-a8dd-eaf6b7e97e87_Carousel-startups+2021+-+November.png' width='150' height='750' layout='responsive'  alt='albad'/>
                </article>
                <CorouselData />
            </section>
        </>
    )
}


export default SegmentCorouselContainer


