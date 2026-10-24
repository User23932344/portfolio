import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>
                        GET IN TOUCH
                    </p>

                    <h2 className={styles.title}>
                        Let's work together.
                    </h2>

                    <p className={styles.description}>
                        I'm open to new opportunities and
                        collaborations in frontend development.
                    </p>

                    <a
                        className={styles.email}
                        href="mailto:olegmatusevitch@gmail.com"
                    >
                        olegmatusevitch@gmail.com
                    </a>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Oleg.
                        All rights reserved.
                    </p>

                    <nav
                        className={styles.socials}
                        aria-label="Social links"
                    >
                        <a
                            href="https://github.com/User23932344"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a href="#about">
                            Back to top ↑
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}