import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
0

function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <Post></Post>
        <main></main>
      </div>
    </>
  )
}

export default App
