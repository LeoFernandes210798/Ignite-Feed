import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.weapper}>
        <Sidebar />
        <main>
          <Post 
            author="Leonardo Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, assumenda adipisci accusamus esse animi nisi, reprehenderit eaque perspiciatis ullam natus quidem! Neque, id saepe. Dignissimos saepe officiis possimus consectetur eligendi."
          />
          <Post 
            author="Leonardo"
            content="teste"
          />
        </main>
      </div>      
    </div>
  )
}
