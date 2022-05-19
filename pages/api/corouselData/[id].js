import { corouselData } from "../../../dataJson";



const handler = (req, res) => {
    const filterCorousel = corouselData.filter(doc => doc.id === req.query.id)


    if(filterCorousel.length > 0) {
        res.status(200).json(filterCorousel)
    } else {
        res.status(404).json(filterCorousel[0])
    }
}

export default handler