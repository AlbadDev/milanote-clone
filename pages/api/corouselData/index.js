// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { corouselData } from "../../../dataJson"




export default function handler (req, res) {
  res.status(200).json(corouselData)
}
