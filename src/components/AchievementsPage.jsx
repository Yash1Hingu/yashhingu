import leetcode from '../assets/images/leetcode.gif';
import frontenddevhackerank from '../assets/images/frontend_developer_react certificate.png';
""

export default function AchievementsPage() {
    return (<>
        <div className="projects_container" id="project">
            <div className="project_heading" data-aos="fade-up" data-aos-duration="1000">
                <h1>Courcework</h1>
                <div className="projects_flex_container">
                    <h3>The Complete 2024 Web Development Bootcam  <a href="https://www.udemy.com/certificate/UC-5e708e15-cb2c-4bfc-a1a7-481d05d6e9c9/" target="_blank">(Certificate)</a> - Udemy</h3>
                    <h3>React - The Complete Guide 2024 (incl. Next.js,
                        Redux) - Udemy
                    </h3>
                </div>
            </div>
            <div className="project_heading" data-aos="fade-up" data-aos-duration="1000">
                <h1>Achievements</h1>
                <div className="projects_flex_container">
                    <div className='achievements'>
                        <h2>50 Days on LeetCode</h2>
                        <img src={leetcode} alt="leetcode-badge" />
                    </div>
                    <div className='achievements'>
                        <h2>HackerRank </h2>
                        <a href="https://www.hackerrank.com/certificates/061d4dc918c5">
                            <img src={frontenddevhackerank} alt="frontenddevhackerank-badge" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}