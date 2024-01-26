import techs from "./TechStack/TECH_STACK_DATA"
import ToolTip from "./TechStack/ToolTip"
export default function TechStackPage() {
    return (
        <div className="my_tech_stack_section" id="techstack">
            <div className="mts_heading" data-aos="fade-up">
                <h1>My Tech Stack</h1>
                <h3> Technologies I've been working with recently</h3>
            </div>
            <div className="mts_flex" data-aos="fade-up">
                {techs.map(tech => <ToolTip key={tech.name} {...tech} />)}
            </div>
        </div>)
}