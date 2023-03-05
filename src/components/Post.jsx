import styles from "./Post.module.css";
export function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.coments}>
        <div className={styles.description}>
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80" />
          <div>
            <strong>{props.author}</strong>
            <span>UI Designer</span>
          </div>
        </div>
        <span>Publicado há 1h</span>
      </div>
      <div>
        <p>Fala galeraa 👋</p> 
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <a href="#">👉 jane.design/doctorcare</a>
       <h4>#novoprojeto #nlw #rocketseat</h4> 
      </div>

      <footer>
        <label htmlFor="">Deixe seu feedback</label>
        <input type="text" />

        <a href="#">
           
            Editar Perfil
          </a>
      </footer>
    </div>
  );
}
