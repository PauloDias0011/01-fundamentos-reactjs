import styles from './Sidebar.module.css'
import  { PencilLine } from '@phosphor-icons/react'
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://www.training.com.au/wp-content/uploads/Full-Stack-Developer-1.jpeg" alt="Profile" />
            <div className={styles.profile}>
            <img className={styles.avatar} src='https://github.com/PauloDias0011.png'/>
                <strong>Paulo Dias</strong>
                <span>Engenheiro de Software</span>
            </div>

            <footer className={styles.sidebar}>
               
                <a href="#"> <PencilLine /> Editar Perfil</a>
            </footer>
        </aside>
    )
}