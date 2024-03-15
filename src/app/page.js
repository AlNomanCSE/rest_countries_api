import styles from "./page.module.css";
import fs from "fs";
import Card from "../components/card";
// Import the path module to resolve file paths
import path from "path";

// Resolve the file path to your data.json file
const filePath = path.resolve("./data.json");

// Read the contents of the data.json file synchronously
const jsonData = fs.readFileSync(filePath, "utf8");

// Parse the JSON data into a JavaScript object
const datas = JSON.parse(jsonData);

export default async function Home() {
  return (
    <main className={styles.main}>
        <Card datas={datas} />  
    </main>
  );
}
