import TestimonialSlice from "../../Components/TestimonialSlice"






const testimonialSlice  = ({ dataResponse }) => {

    return (
        
            <>
                {
                    dataResponse.map( data => <TestimonialSlice data = {data}/> )
                }
            </>
        
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