<<<<<<< HEAD
import { corouselData } from "../../../dataJson";
=======
import { corouselData } from "../../../dataJson"



>>>>>>> 1a539a62dbf887aff4f203a38eed234c9a730229



const handler = (req, res) => {
<<<<<<< HEAD
    const filterCorousel = corouselData.filter(doc => doc.id === req.query.id)


    if(filterCorousel.length > 0) {
        res.status(200).json(filterCorousel)
    } else {
        res.status(404).json(filterCorousel[0])
    }
}

=======
    const filteredCorouselData =  corouselData.filter(corData => corData.id === req.query.id)

        if(filteredCorouselData.lenght > 0) {
            res.status(200).json(filteredCorouselData)
         } else {
           res.status(404).json(filteredCorouselData[0])
        }
        
  }
>>>>>>> 1a539a62dbf887aff4f203a38eed234c9a730229
export default handler