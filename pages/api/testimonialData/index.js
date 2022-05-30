import { testimonialData } from "../../../dataJson";




export default function handler (req, res) {
    res.status(200).json(testimonialData)
  }