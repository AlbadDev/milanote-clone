




const CorouselData = ({responseData}) => {


    return (
        <>
            {
                responseData.map(data => (
                    <h2>{data.title}</h2>
                ))
            }
        </>
    )
}

export default CorouselData