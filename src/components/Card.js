import react from "react"
import Header from "./Header"
import About from "./About"
import Socials from "./Socials"

export default function Card() {
    return (
        <main className="card">
            <Header/>
            <About/>
            <Socials/>
        </main>
    )
}
