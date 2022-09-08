import style from '../styles/SegmentCorouselSlice.module.scss'
import Link from 'next/link'
import SegmentCorouselBody from './SegmentCorouselBody'




const SegmentCorouselSlice = ({resultData}) => {



    return (
        <section className={style.sectionContainer}>
            <div className={style.navContainer}>
                <span className={style.usage}>Milanote is used by:</span>
                <ul>
                    <li>Designers</li>
                    <li>Creative directors</li>
                    <li>Marketers</li>
                    <li>Writers</li>
                    <li>Agencies</li>
                    <li>Startups</li>
                </ul>
            </div>
            
            <SegmentCorouselBody  resultData={resultData}/>
        </section>
    )
}




export default SegmentCorouselSlice

