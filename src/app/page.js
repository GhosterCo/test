import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <h1>Home</h1>     
    </main>
  );
}
