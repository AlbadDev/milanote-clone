import CorouselData from "../../Components/CorouselData"




const DataFile  = ({ responseData }) => {

    return (
        <>
            <CorouselData responseData = {responseData}/>
        </>
    )
}

export default DataFile


export const getStaticProps = async () => {
    const requestData = await fetch('https://jsonplaceholder.typicode.com/users')
    const responseData = await requestData.json()

    return {
        props: {responseData}
    }
}