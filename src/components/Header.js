import react from "react"
import Image from "./LinkedInHeadShot.png"

export default function() {
    return (
        <header>
            <img src={Image}></img>
            <h2>Saul Rodrigues</h2>
            <h4>Software Engineer</h4>

            <div className="buttons">
                <button className="linkedin">LinkedIn</button>
            </div>
        </header>
    )
}

