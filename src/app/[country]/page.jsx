import { FaArrowLeft } from "react-icons/fa";
import styles from "../../app/page.module.css"
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
  const [Country] = datas.filter((data) => {
    return data.name == decodeURIComponent(params.country);
  });
  return (
    <section style={{ width: "100%" }}>
      <div style={{ padding: "2rem" }}>
        <Link href="/">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1rem",
              border: "none",
              boxShadow: "5px 5px 5px rgb(209, 208, 208)",
              cursor: "pointer",
            }}
          >
            <FaArrowLeft />
            Back
          </button>
        </Link>
      </div>
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "flex",
          margin: "0 auto",
          overflow: "hidden",
          boxShadow: "3px 3px 10px rgb(209, 208, 208)",
          borderRadius: "5px",
        }}
        className={styles.slagSection}
      >
        <Image
          src={Country.flags.svg}
          alt="country image"
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            maxHeight: "550px",
            width: "60%",
            height: "100%",
            padding: "2rem",
          }}
          className={styles.slagSectionImg}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            margin: "auto",
          }}
        >
          <h2>{Country.name}</h2>
          <p>
            <span style={{ fontWeight: "600" }}>Native Name</span>:{" "}
            {Country.nativeName}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Population</span>:{" "}
            {Country.population}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Region</span>: {Country.region}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Sub Region</span>:{" "}
            {Country.subregion}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Capital</span>:{" "}
            {Country.capital}
          </p>
          <div>
            <p>
              <span style={{ fontWeight: "600" }}>Top Level Domain</span>:{" "}
              {Country.topLevelDomain}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Currency</span>:{" "}
              {Country.currencies[0].name}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Language</span>:{" "}
              {Country.languages[0].name}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Bordrer Country</span>:{" "}
              {Country.borders ? Country.borders.join("  ") : "NAN"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
