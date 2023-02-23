import styles from "./Sidebar.module.css";

import edit from '../assets/edit.svg'

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />

        <div className={styles.profile}>
          <img src="https://avatars.githubusercontent.com/u/8356862?s=96&v=4"/>
          <strong>Beatriz Souza</strong>
          <span>Fron-End</span>
        </div>

        <footer>
          <a href="#">
            <img src={edit}/>
            Editar Perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
