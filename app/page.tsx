// import Image from "next/image";
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

type Billion = {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
};

export default async function Home() {
  const billions = await getBillions();
  console.log(billions);
  return (
    <div className={styles.page}>
      {billions.map((billion: Billion) => {
        return (
          <li key={billion.id}>
            <Link href={`/person/${billion.id}`}>
              {/* <Image
                src={billion.squareImage}
                width={300}
                height={300}
                alt={billion.name}
              /> */}
              <div>{billion.name}</div>
              <span>
                {billion.netWorth} / {billion.industries}
              </span>
            </Link>
          </li>
        );
      })}
    </div>
  );
}
