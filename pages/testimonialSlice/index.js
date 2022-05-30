






const testimonialSlice  = ({ responseData }) => {

    return (
        
            <>
                <CorouselData responseData = {responseData}/>
            </>
        
    )
}

export default testimonialSlice


export const getStaticProps = async () => {
    const requestData = await fetch('http://localhost:3000/api/corouselData')
    const responseData = await requestData.json()

    return {
        props: {responseData}
    }
}