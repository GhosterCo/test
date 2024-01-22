import Sidebar from "@/components/sidebar/Sidebar";
import { Table } from "@/components/table";
import TableWithPagination from "@/components/table"
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Table />
     
    </main>
  );
}
