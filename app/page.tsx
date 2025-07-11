import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const billions = await getBillions();
  console.log(billions);
  return (
    <div className={styles.page}>
      {billions.map((billion: any) => {
        return (
          <li key={billion.id}>
            <Link href={`/person/${billion.id}`}>{billion.name}111</Link>
          </li>
        );
      })}
    </div>
  );
}
