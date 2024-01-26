import linkIcon from '../../assets/images/icon-link.svg'
import githubIcon from '../../assets/images/icon-github.svg'
export default function ProjectCard({
    projectIcon,
    title,
    description,
    techstack,
    livelink,
    githublink
}) {
    return (<div className="project_card" data-aos="fade" data-aos-duration="4000">
        <div className="project_image">
            <img src={projectIcon} alt="" />
        </div>
        <div className="project_about">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="project_techstack">
                <b>Tech Stack:</b>
                <p>{techstack}</p>
            </div>
            <div className="project_links">
                <span className="project_link">
                    <img src={linkIcon} alt="iconlink" />
                    <a href={livelink} target="_blank">Live Preview</a>
                </span>
                <span className="project_link">
                    <img src={githubIcon} alt="github" />
                    <a href={githublink} target="_blank">View Code</a>
                </span>
            </div>
        </div>
    </div>)
}