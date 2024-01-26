import profileImg from "../assets/images/image-profile.svg"

export default function IndexPage() {
    return (
        <div className="herosection" id="home">
            <div className="hero_heading">
                <h1 data-aos="fade-in">Hi 👋,</h1>
                <h1 data-aos="fade-in">My name is</h1>
                <h1 className="hero_heading_name" data-aos="slide-right" data-aos-duration="2000">Yash Hingu</h1>
                <h1 data-aos="fade-in">I build things for web</h1>
            </div>
            <div className="hero_image" data-aos="fade-in" data-aos-duration="2000">
                <img src={profileImg} alt="" />
            </div>
        </div>
    )
}