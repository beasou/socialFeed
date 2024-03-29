import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { PostType } from "./types";

const posts: PostType[] = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/beasou.png',
      name: 'Beatriz Souza',
      role: 'Front-End'
    },
    content: [
     {type: 'paragraph', content:'Fala galeraa 👋'},
     {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type: 'link', content:'👉'+'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-08-03 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/jonatasbueno.png',
      name: 'Jônatas Bueno do Livramento',
      role: 'Javascript Developer'
    },
    content: [
     {type: 'paragraph', content:'Fala galeraa 👋'},
     {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type: 'link', content:'👉'+'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-08-13 20:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id}
                post={post}
                /*author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}*/
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
