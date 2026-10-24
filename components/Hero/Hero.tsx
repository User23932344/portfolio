import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <div className={styles.content}>
                <p className={styles.eyebrow}>
                    Hello, I'm Oleg
                </p>

                <h1 className={styles.title}>
                    Building digital
                    <span> experiences.</span>
                </h1>

                <p className={styles.description}>
                    Я Frontend-разработчик. Создаю современные
                    интерфейсы с помощью React, Next.js и TypeScript.
                </p>

                <div className={styles.actions}>
                    <a
                        href="#projects"
                        className={styles.primaryButton}
                    >
                        Посмотреть проекты
                    </a>

                    <a
                        href="#contact"
                        className={styles.secondaryButton}
                    >
                        Связаться
                    </a>
                </div>

                <div className={styles.skills}>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                </div>
            </div>

            <div className={styles.visual}>
                <span className={styles.visualLabel}>
                    FRONTEND DEVELOPER
                </span>

                <div className={styles.codeCard}>
                    <span>const developer = {"{"}</span>
                    <span>　name: "Oleg",</span>
                    <span>　stack: "React",</span>
                    <span>　focus: "Frontend"</span>
                    <span>{"}"}</span>
                </div>
            </div>
        </section>
    );
}