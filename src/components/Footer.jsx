import yashLogo from "../assets/images/logo-yash.svg"
export default function Footer() {
    return (
        <div className="footer_conatiner">
            <div className="footer_image">
                <img src={yashLogo} alt="" />
            </div>
            <div className="footer_contact">
                <a href="mailto:yash23hingu@gmail.com">yash23hingu@gmail.com</a>
            </div>
        </div>
    )
}