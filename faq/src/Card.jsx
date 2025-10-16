import { useState } from "react"

function Card() {

    const [isOpen, setIsOpen] = useState(false)

    function hantleClick() {
        console.log("Klikniety pytanko")
        setIsOpen(!isOpen)
    }
    return (
        <>
        <p onClick={hantleClick}>Pytanko</p>
        {
            isOpen ? <p>Otwarty</p> : null
        }
        </>
    )
}

export default Card