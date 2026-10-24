import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    href?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    href,
}: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>{title}</h3>

            <p className={styles.description}>
                {description}
            </p>

            <ul className={styles.technologies}>
                {technologies.map((technology) => (
                    <li key={technology}>
                        {technology}
                    </li>
                ))}
            </ul>

            {href && (
                <a
                    className={styles.link}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    View project <span aria-hidden="true">↗</span>
                </a>
            )}
        </article>
    );
}