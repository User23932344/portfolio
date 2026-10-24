import ProjectCard from "@/components/UI/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Featured Projects</h2>

            <div className={styles.grid}>
                <ProjectCard
                    title="Data Table"
                    description="Таблица данных с сортировкой, фильтрацией и постраничной навигацией."
                    technologies={["Next.js", "TypeScript", "CSS"]}
                    href="https://github.com/User23932344/data-table"
                />

                <ProjectCard
                    title="FutureTech"
                    description="Проект для практики SCSS и построения адаптивных интерфейсов."
                    technologies={["HTML", "SCSS", "JavaScript"]}
                    href="https://github.com/User23932344/FutureTech"
                />
            </div>
        </section>
    );
}