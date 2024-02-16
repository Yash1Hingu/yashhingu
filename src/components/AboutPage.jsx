import buildingIcon from "../assets/images/icon-building.svg"
import calenderIcon from "../assets/images/icon-calender.svg"
export default function AboutPage() {
    return (
        <div className="about_container" id="about">
            <div className="about_me" data-aos="fade-in" data-aos-duration="10000">
                <h1>About Me</h1>
                <p>I'm a passionate full-stack web development with a focus on HTML, CSS, and JavaScript, and I'm dedicated
                    to continuously expanding my skillset with new tech.</p>
            </div>
            <div className="education_container" data-aos="fade-in" data-aos-duration="10000">
                <h1>Education</h1>
                <div className="education_info" data-aos="slide-right" data-aos-duration="1000">
                    <div className="edu_one">
                        <h3>Bachelor in Computer Science And Engineering</h3>
                        <p>CGPA: 8.7</p>
                    </div>
                    <div className="edu_two">
                        <h6>
                            <img src={buildingIcon} alt="building" />
                            Parul University
                        </h6>
                        <h6>
                            <img src={calenderIcon} alt="calender" />
                            Aug 2021 - Aug 2025
                        </h6>
                    </div>
                </div>
                <div className="education_info" data-aos="slide-right" data-aos-duration="2000">
                    <div className="edu_one">
                        <h3>Class XII</h3>
                        <p>Percentage: 80%</p>
                    </div>
                    <div className="edu_two">
                        <h6>
                            <img src={buildingIcon} alt="building" />
                            Anand High School-Anand
                        </h6>
                        <h6>
                            <img src={calenderIcon} alt="calender" />
                            Aug 2019 - Aug 2021
                        </h6>
                    </div>
                </div>
                <div className="education_info" data-aos="slide-right" data-aos-duration="3000">
                    <div className="edu_one">
                        <h3>Class X</h3>
                        <p>Percentage: 80%</p>
                    </div>
                    <div className="edu_two">
                        <h6>
                            <img src={buildingIcon} alt="building" />
                            C.M.Patel High School ,Khambholaj
                        </h6>
                        <h6>
                            <img src={calenderIcon} alt="calender" />
                            Aug 2018 - Aug 2019
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}