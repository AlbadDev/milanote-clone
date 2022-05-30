import { testimonialData } from "../../../dataJson"





export default function handler (req, res) {
    const filterredTestimonialData =  testimonialData.filter(corData => corData.id === req.query.id)

    if (filterredTestimonialData.lenght > 0)  res.status(200).json(filterredTestimonialData)
    
    else res.status(404).json(filterredTestimonialData[0])
    
  }
    