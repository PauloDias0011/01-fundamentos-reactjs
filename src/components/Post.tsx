import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow as dateFnsFormatDistanceToNow, Locale } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

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
    const [comments, setComments] = useState([
        1, 2
    ])
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

    function handleCreateNewComment(event: React.FormEvent) {
        event.preventDefault();
        console.log('New comment submitted');
        setComments([...comments,comments.length +1])
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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um Comentário' />
                <footer>
                    <button type='submit'>Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment} />
                    );
                })}
            </div>
        </article>

    )
}


