import styles from "./Skills.module.css";

const skillGroups = [
    {
        title: "Frontend",
        skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript"],
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Redux Toolkit"],
    },
    {
        title: "Tools & Data",
        skills: ["Git", "REST API", "SQL"],
    },
];

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills & Technologies</h2>

            <div className={styles.grid}>
                {skillGroups.map((group) => (
                    <article className={styles.card} key={group.title}>
                        <h3 className={styles.cardTitle}>
                            {group.title}
                        </h3>

                        <ul className={styles.skillList}>
                            {group.skills.map((skill) => (
                                <li className={styles.skill} key={skill}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}