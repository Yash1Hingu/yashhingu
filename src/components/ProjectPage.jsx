import projects from './Projects/PROJECTS.js';
import ProjectCard from './Projects/ProjectCard.jsx';
export default function ProjectPage() {
    return (
        <div className="projects_container" id="project">
            <div className="project_heading" data-aos="fade-up" data-aos-duration="1000">
                <h1>Projects</h1>
                <h3>Things I've built so far</h3>
            </div>
            <div className="projects_flex_container">
                {projects.map(project => <ProjectCard key={project.title} {...project} />)}
            </div>
        </div>
    )
}