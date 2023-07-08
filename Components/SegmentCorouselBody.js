import {useState, useEffect} from 'react'
import style from '../styles/SegmentCorouselContainer.module.scss'
import Image from 'next/image'




const SegmentCorouselBody = ({resultData}) => {
    const [myId, setMyId] = useState()
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
                    <button className={style.findMe} onClick={chanceIdOnclick} onChange={handleClick}>Find out how</button>
                </div>
                <article className={style.articleContainer}>
                    
                    {/* {
                        resultData.map(data => (
                            <>
                                <h3>{data.title}</h3>
                            </>
                        ))
                    } */}
                   
                    
                    {/* {
                        resultData.map(project => {
                            const filteredData =  project.filter(prj => prj.id === 1)
                            setMyId(filteredData)
                            // <>
                            //     { project.id == 1 &&
                            //             <h2 key={project.id}>{project.title}</h2>
                            //     }
                            // </>https://images.prismic.io/milanote/171ca694-65fd-4d42-a8dd-eaf6b7e97e87_Carousel-startups+2021+-+November.png
                    })
                    } */}
                    <Image src='https://images.prismic.io/milanote/281e769e-a20f-4baa-8966-e95bf03ea3f9_Carousel-designers+2021+-+November.png' width='150' height='780' layout='responsive'  alt='albad' className={style.Image}/>
                </article>
            </section>
          
        </>
    )
}


export default SegmentCorouselBody


































// const SegmentCorouselBody = ({resultData}) => {



//     return (
//         <>
            
//             {
//                 resultData.map( project => (
//                     //<>
//                         <h3 key={project.id}>{project.name}</h3>
//                     //</>
//                 ))
//             }
//         </>
//     )
// }

// export default SegmentCorouselBody