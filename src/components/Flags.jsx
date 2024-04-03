import Spain from "../assets/espana.png"
import Catalunya from "../assets/catalunya.png"
import UK from "../assets/uk.png"

const Flags = () => {
    return(
        <div className="flex justify-end my-5 gap-x-3"> 
           <img className="w-8" src={UK}  alt="spain" />
           <img className="w-8" src={Spain}  alt="spain" />
           <img className="w-8" src={Catalunya}  alt="spain" />
        </div>
    )
}

export default Flags