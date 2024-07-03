import linkIcon from '../../assets/images/icon-link.svg'
import githubIcon from '../../assets/images/icon-github.svg'
import './ProjectCard.css';

export default function ProjectCard({
    projectIcon,
    title,
    description,
    techstack,
    livelink,
    githublink
}) {

    return (
        // <figure className='card'>
        //     <img src={projectIcon} alt={title} className='card_image' />
        //     <figcaption className='card_body'>
        //         <h2 className='card_title'>{title}</h2>
        //         <p className='card_description'>
        //             <p>{description}</p>
        //             <div className="project_techstack">
        //                 <b>Tech Stack:</b>
        //                 <p>{techstack}</p>
        //             </div>
        //             <div className="project_links">
        //                 <span className="project_link">
        //                     <img src={linkIcon} alt="iconlink"/>
        //                     <a href={livelink} target="_blank">Live Preview</a>
        //                 </span>
        //                 <span className="project_link">
        //                     <img src={githubIcon} alt="github" />
        //                     <a href={githublink} target="_blank">View Code</a>
        //                 </span>
        //             </div>
        //         </p>
        //     </figcaption>
        // </figure>
        <div class="card">
            <div class="card-content">
                <div class="card-front" style={{ backgroundImage: `url(${projectIcon})` }}>
                    <span id="clickIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                        </svg>
                    </span>
                    <p class="sub-title">{techstack}</p>
                    <h1 class="title">{title}</h1>
                </div>

                <div class="card-back">
                    <div class="back-title">{title}</div>
                    <div class="movie-description">
                        <span>Description: </span>{description}
                    </div>
                    <a href={livelink} class="btn">
                        <img src={linkIcon} alt="linkicon" />
                        Live Link
                    </a>
                    <a href={githublink} class="btn">
                        <img src={githubIcon} alt="linkicon" />
                        Github Link
                    </a>
                </div>
            </div>
        </div>
    )
}