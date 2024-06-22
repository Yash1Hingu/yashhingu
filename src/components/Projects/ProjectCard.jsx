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

    return (
        <figure className='card'>
            <img src={projectIcon} alt={title} className='card_image' />
            <figcaption className='card_body'>
                <h2 className='card_title'>{title}</h2>
                <p className='card_description'>
                    <p>{description}</p>
                    <div className="project_techstack">
                        <b>Tech Stack:</b>
                        <p>{techstack}</p>
                    </div>
                    <div className="project_links">
                        <span className="project_link">
                            <img src={linkIcon} alt="iconlink"/>
                            <a href={livelink} target="_blank">Live Preview</a>
                        </span>
                        <span className="project_link">
                            <img src={githubIcon} alt="github" />
                            <a href={githublink} target="_blank">View Code</a>
                        </span>
                    </div>
                </p>
            </figcaption>
        </figure>
    )
}