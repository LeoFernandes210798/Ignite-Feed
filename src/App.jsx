import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import styles from "./App.module.css";

import "./global.css";

const post =[
  {
    id:1,
    author:{
      avatarUrl:"https://github.com/leofernandes210798.png",
      name:"Leonardo Fernandes",
      role:"Desenvolvedor"
    },
    content:[
     { type: 'paragraph', content:'Fala galeraaa 👋'},
     { type: 'paragraph', content:'Acabei de subirr mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     { type: 'link', content:'jane.design/doctorcare'},  
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl:"https://github.com/diego3g.png",
      name:"Diego Fernandes",
      role:"Web dev"
    },
    content:[
     { type: 'paragraph', content:'Fala galeraa 👋'},
     { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     { type: 'link', content:'jane.design/doctorcare'},  
    ],
    publishedAt: new Date('2022-09-13 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.weapper}>
        <Sidebar />
        <main>
          {post.map(post =>{
            return (
              <Post
                key={post.id}
                author= {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>      
    </div>
  )
}
