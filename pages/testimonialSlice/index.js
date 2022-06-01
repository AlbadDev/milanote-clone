import TestimonialSlice from "../../Components/TestimonialSlice"
import Home from '../index'




const testimonialSlice  = ({ dataResponse }) => {

    return (
        <section>
            <Home dataResponse = {dataResponse} />
        </section>
    )
}

export default testimonialSlice





export const getServerSideProps = async () => {
   const dataRequest = await fetch('http://localhost:3000/api/testimonialData')
   const dataResponse = await dataRequest.json()


   return {
       props: {
           dataResponse
       }
   }
}