
import { corouselData } from "../../../dataJson";




export default function handler (req, res) {
    const filteredCorouselData =  corouselData.filter(corData => corData.id === req.query.id)

    if (filteredCorouselData.lenght > 0)  res.status(200).json(filteredCorouselData)
    
    else res.status(404).json(filteredCorouselData[0])
    
  }
    

        
   
