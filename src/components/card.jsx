"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
const card = ({ datas }) => {
  const [countyName, setCountryName] = useState("");

  function handleChange(e) {
 setCountryName(e.target.value.toLowerCase());
  }
  return (
    <>
      <div className={styles.searchSection}>
        <div>
          <IoSearchSharp className={styles.icon} />
          <input
            type="text"
            id="search"
            placeholder="Search for a country...   "
            onChange={(e) => {
              setCountryName(e.target.value.toLowerCase());
            }}
          ></input>
        </div>
        <select id="county" name="county" onChange={handleChange}>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Ocenia">Ocenia</option>
        </select>
      </div>

      <section className={styles.cardSection}>
        {datas
          .filter((data) => {
            return countyName.toLowerCase() === ""
              ? data
              : data.name.toLowerCase().includes(countyName) ||
                  data.region.toLowerCase().includes(countyName);
          })
          .map((data, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={data.flags.svg}
                alt="country image"
                width={200}
                height={200}
                className={styles.cardImage}
              />
              <div className={styles.cardDetails}>
                <h2>{data.name}</h2>
                <p>
                  <span>Population</span>: {data.population}
                </p>
                <p>
                  <span>Region</span>:{data.region}
                </p>
                <p>
                  <span>Capital</span>:{data.capital}
                </p>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default card;
