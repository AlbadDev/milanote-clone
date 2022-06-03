import { companyLogos } from "../../../dataJson"



export default function handler (req, res) {
    res.status(200).json(companyLogos)
  }
  