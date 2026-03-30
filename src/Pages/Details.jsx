import projects from "../Data/Project";


const Details = () => {

    const projectTitle = window.location.pathname.split("/").pop();
    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectTitle);

    if (!project) {
        return <div>Introuvable</div>;
    }
    return (
        <div className="details">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} className="details-img" />
            <p>{project.description}</p>

            <div className="technologies">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="technology">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Details;