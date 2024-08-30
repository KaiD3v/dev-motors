import styles from "./page.module.css";

import { Submenu } from "../components/home/submenu";
import { getDataHome } from "../utils/actions/get-data";
import { HomeProps } from "../utils/home.type";

export default async function Home() {
  const data: HomeProps = await getDataHome();

  console.log(JSON.stringify(data, null, 2));
  return (
    <main>
      <Submenu />
    </main>
  );
}
