import styles from "./Header.module.css"

export default function Header(){
    return(
        <div className="container">
            <nav className={styles.nav}>
                <p style={{fontSize:"2rem"}}>GeekConnect</p>
            </nav>
        </div>
    )
}