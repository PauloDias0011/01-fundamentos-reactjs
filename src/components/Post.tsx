import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow as dateFnsFormatDistanceToNow, Locale } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostProps {

    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };

    publishedAt: Date;
    content: { type: string; content: string; }[]
}

export function Post(postProps: PostProps) {

    const publishedDateFormatted = format(postProps.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(postProps.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function formatDistanceToNow(publishedAt: Date, options: { locale: Locale; addSuffix: boolean; }) {
        return dateFnsFormatDistanceToNow(publishedAt, options);
    }

    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={postProps.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{postProps.author.name}</strong>
                        <span>{postProps.author.role}</span>
                    </div>
                </div>
                <time className={styles.time} title={publishedDateFormatted} dateTime={publishedDateFormatted}>{publishedDateRelativeToNow} </time>

            </header>

            <div className={styles.content}>
                {postProps.content.map((line: { type: string; content: string }) => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="">{line.content}</a></p>;
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um Comentário' />
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


