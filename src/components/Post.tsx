import styles from './Post.module.css'
import { Comment } from './Comment';


export function Post() {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/PauloDias0011.png' />
                    <div className={styles.authorInfo}>
                        <strong>Paulo Dias</strong>
                        <span>Engenheiro de Software</span>
                    </div>
                </div>
                <time className={styles.time}title={"03 de Abril de 2025"} dateTime="2022-05-02"> Públicado há 1 hora</time>

            </header>

            <div className={styles.content}>
               <p>Fala galeraa 👋</p> 

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href=''>jane.design/doctorcare</a></p>

               <p> <a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um Comentário'/>
                <footer>
                <button type='submit'>Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
        </article>

    )
}