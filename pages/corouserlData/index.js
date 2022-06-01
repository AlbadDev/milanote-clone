import CorouselData from "../../Components/CorouselData"




const corouselData  = ({ responseData }) => {

    return (
        
            <>
                <CorouselData responseData = {responseData}/>
            </>
        
    )
}

export default corouselData


export const getServerSideProps = async () => {
    const requestData = await fetch('http://localhost:3000/api/corouselData')
    const responseData = await requestData.json()

    return {
        props: {responseData}
    }
}