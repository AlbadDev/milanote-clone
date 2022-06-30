
import style from '../styles/CompanySectionSlice.module.scss'
import Image from 'next/image'



const CompanySectionSlice = ({responseCompanyData}) => {



    return (
        <section className={style.sectionContainer}>
            <article className={style.container}>
                <p>Creative professionals from these companies use Milanote</p>
                
                    <ul >
                        {responseCompanyData.map(company => (
                        
                           <li className= {style.listCompany} id={company.id+1}><Image src={company.srcLink} width='130' height='80' id={company.id+2} /></li>
                        
                        ))}
                    
                    </ul>
            </article>
        </section>
    )
}


export default CompanySectionSlice