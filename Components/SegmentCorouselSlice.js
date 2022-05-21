import style from '../styles/SegmentCorouselSlice.module.scss'
import SegmentCorouselContainer from './SegmentCorouselContainer'
import Link from 'next/link'





const SegmentCorouselSlice = () => {



    return (
        <section className={style.sectionContainer}>
            <div className={style.navContainer}>
                <span className={style.usage}>Milanote is used by:</span>
                <ul>
                    <li><Link href='http://localhost:3000/api/corouselData/3'>Designers</Link></li>
                    <li>Creative directors</li>
                    <li>Marketers</li>
                    <li>Writers</li>
                    <li>Agencies</li>
                    <li>Startups</li>
                </ul>
            </div>
            <SegmentCorouselContainer />
        </section>
    )
}




export default SegmentCorouselSlice

