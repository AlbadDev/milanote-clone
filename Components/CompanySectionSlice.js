
import style from '../styles/CompanySectionSlice.module.scss'
import Image from 'next/image'



const CompanySectionSlice = ({ responseCompanyData }) => {



    return (
        <section className={style.sectionContainer}>
            <article className={style.container}>
                <h3 className={style.textHeader}>Creative professionals from these companies use Milanote</h3>

                <ul >
                    {responseCompanyData.map(company => (

                        <li className={style.listCompany} id={company.id + 1}><Image src={company.srcLink} width='90' height='90' max-width='130' max-height='80' id={company.id + 2}  className={style.imgLogo} /></li>

                    ))}
                    {/* <li>Hello</li>
                    <li>Hi</li> */}

                </ul>
            </article>
        </section>
    )
}


export default CompanySectionSlice