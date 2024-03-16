import styles from "../../app/page.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import fs from "fs";
// Import the path module to resolve file paths
import path from "path";
import Link from "next/link";

// Resolve the file path to your data.json file
const filePath = path.resolve("./data.json");

// Read the contents of the data.json file synchronously
const jsonData = fs.readFileSync(filePath, "utf8");

// Parse the JSON data into a JavaScript object
const datas = JSON.parse(jsonData);
const page = ({ params }) => {
  const [Country] = datas.filter((data) =>
    data.name.toLowerCase().includes(params.country.toLowerCase())
  );

  return (
    <>
      <div className={styles.backBtn}>
        <Link href="/">
          <button>
            <FaArrowLeft />
            Back
          </button>
        </Link>
      </div>
      <div
        className={styles.card}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <Image
          src={Country.flags.svg || Country.flags.png}
          alt="country image"
          width={200}
          height={200}
          className={styles.cardImage}
        />
        <div className={styles.cardDetails}>
          <h2>{Country.name}</h2>
          <p>
            <span>Native Name </span>: {Country.nativeName}
          </p>
          <p>
            <span>Population </span>: {Country.population}
          </p>
          <p>
            <span>Region </span>:{Country.region}
          </p>
          <p>
            <span>Sub Region </span>:{Country.subregion}
          </p>
          <p>
            <span>Capital </span>:{Country.capital}
          </p>
          <div>
            <p>
              <span>Top Level Domain </span>:{Country.topLevelDomain}
            </p>
            <p>
              <span>Currency </span>:{[Country.currencies[0].name]}
            </p>
            <p>
              <span>Language </span>:{[Country.languages[0].name]}
            </p>
            {/* <p>
              <span>Border Countries :</span>
              {Country.borders.forEach((element) => (
                <h1>{element}</h1>
              ))}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
