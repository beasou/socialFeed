import { ThumbsDown, ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/beasou.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Beatriz Souza</strong>
              <time
                title="06 de Fevereiro às 12:35"
                dateTime="2023-02-06 12:35:49"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />Aplaudir <span>20</span>
            
          </button>
        </footer>
      </div>
    </div>
  );
}
