import { companyLogos } from "../../../dataJson"


export default function handler (req, res) {
  
    const filteredLogo =  companyLogos.filter(logo => logo.id === req.query.id)

    if (filteredLogo.lenght > 0)  res.status(200).json(filteredLogo)
    
    else res.status(404).json(filteredLogo[0])
    
  }