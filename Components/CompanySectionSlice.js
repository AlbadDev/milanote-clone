
import style from '../styles/CompanySectionSlice.module.scss'
import Image from 'next/image'



const CompanySectionSlice = ({responseCompanyData}) => {



    return (
        <section className={style.sectionContainer}>
            <article className={style.container}>
                <p>Creative professionals from these companies use Milanote</p>
                <ul>
                    <li >
                        {responseCompanyData.map(company => (
                           <Image src={company.srcLink} width='50' height='50' id={company.id}/>
                        ))}
                    </li>
                </ul>
            </article>
        </section>
    )
}


export default CompanySectionSlice