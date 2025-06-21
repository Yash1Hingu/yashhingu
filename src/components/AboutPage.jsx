import buildingIcon from "../assets/images/icon-building.svg"
import calenderIcon from "../assets/images/icon-calender.svg"
export default function AboutPage() {
    return (
        <div className="about_container" id="about">
            <div className="about_me" data-aos="fade-in" data-aos-duration="10000">
                <h1>About Me</h1>
                <p>I feel happy and excited when I'm working with technology.
                </p>
                <p>Solving tech problems always brings me joy.</p>
            </div>
            <div className="education_container" data-aos="fade-in" data-aos-duration="10000">
                <h1>Education</h1>
                <div className="education_info" data-aos="slide-right" data-aos-duration="1000">
                    <div className="edu_one">
                        <h3>Bachelor of Technology (Computer Scienece and Engineering) </h3>
                        <p>CGPA: 8.6</p>
                    </div>
                    <div className="edu_two">
                        <h6>
                            <img src={buildingIcon} alt="building" />
                            Parul University
                        </h6>
                        <h6>
                            <img src={calenderIcon} alt="calender" />
                            2025
                        </h6>
                    </div>
                </div>
                <div className="education_info" data-aos="slide-right" data-aos-duration="2000">
                    <div className="edu_one">
                        <h3>SENIOR SCHOOL (12th)</h3>
                        {/* <p>Percentage: 73.20% (GSEB)</p> */}
                    </div>
                    <div className="edu_two">
                        <h6>
                            <img src={buildingIcon} alt="building" />
                            Anand High School, Anand
                        </h6>
                        <h6>
                            <img src={calenderIcon} alt="calender" />
                            2021
                        </h6>
                    </div>
                </div>
                <div className="education_info" data-aos="slide-right" data-aos-duration="3000">
                    <div className="edu_one">
                        <h3>HIGH SCHOOL (10th)</h3>
                        {/* <p>Percentage: 79.33% (GSEB)</p> */}
                    </div>
                    <div className="edu_two">
                        <h6>
                            <img src={buildingIcon} alt="building" />
                            C.M.Patel High School, Khambholaj
                        </h6>
                        <h6>
                            <img src={calenderIcon} alt="calender" />
                            2019
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}