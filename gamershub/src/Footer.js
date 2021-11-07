import {useState} from "react";
const Footer = () => {
    const [email,SetEmail] = useState("")
    const send = (e) => {
        e.preventDefault()
    }
    return (
        <>
        <div className="contact">
            <div className="contactTitle"><h1>S<span className="text-flicker-in-glow">u</span>bscribe To Our NewsLetter</h1></div>
            <form action="https://formsubmit.co/selemonjr@email.com" method="POST" className="form" onSubmit={send}>
                <input type="text" placeholder="Email" className="contactInput" onClick={(e) => SetEmail(e.target.value)}/><br />
                <button className="contactButton" type="submit">Subscribe</button>
            </form>
        </div>
        </>
    )
}
export default Footer;