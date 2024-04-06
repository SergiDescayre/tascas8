import {useState} from "react"
import Spain from "../assets/espana.png"
import Catalunya from "../assets/catalunya.png"
import UK from "../assets/uk.png"

import { useTranslation } from "react-i18next"

const Flags = () => {
    const {i18n} = useTranslation('global')
    const [isActive, setIsActive] = useState(true)


const handleClick = (lan) => {
    i18n.changeLanguage(lan)
}

    return(
        <div className="flex justify-end my-5 gap-x-3"> 
           <img onClick={() => handleClick("en")} className="w-8 cursor-pointer" src={UK}  alt="spain" />
           <img onClick={() => handleClick("es")} className="w-8 cursor-pointer" src={Spain}  alt="spain" />
           <img onClick={() => handleClick("ca")} className="w-8 cursor-pointer" src={Catalunya}  alt="spain" />
        </div>
    )
}

export default Flags