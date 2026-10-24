"use client";

import styles from "./Header.module.css";
import Button from "../UI/Button";
import { useTheme } from "../ThemeProvider";

export default function Header() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <a href="#about" className={styles.logo}>
                Oleg
            </a>

            <nav className={styles.nav}>
                <a className={styles.navLink} href="#about">
                    About
                </a>

                <a className={styles.navLink} href="#projects">
                    Projects
                </a>

                <a className={styles.navLink} href="#skills">
                    Skills
                </a>

                <a className={styles.navLink} href="#contact">
                    Contact
                </a>
            </nav>

            <div className={styles.actions}>
                <Button onClick={toggleTheme}>
                    {darkMode ? "Light theme" : "Dark theme"}
                </Button>

                <select
                    className={styles.language}
                    name="language"
                    id="language-select"
                    defaultValue="eng"
                    aria-label="Select language"
                >
                    <option value="eng">English</option>
                    <option value="ger">Deutsch</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
        </header>
    );
}