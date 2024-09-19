import styles from "../styles/Header.module.scss";

export default function Header() {
    // date formatting
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    const firstLetter = formattedDate.charAt(0).toUpperCase();
    const restOfDate = formattedDate.slice(1);
    const finalFormattedDate = `${firstLetter}${restOfDate}`;

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="/LogoIcon.png" alt="Logo" />
                    <span>FocalPoint</span>
                </div>
            </div>

            <div className={styles.center}>
                <h1>Bem-vindo de volta, Wesley</h1>
            </div>

            <div className={styles.right}>
                <span>{finalFormattedDate}</span>
            </div>
        </header>
    )
}
