import React from "react";
import { TeamMember } from "./TeamMember";
import Meirav from "../assets/contributors/Meirav.png";
import YaelRK from "../assets/contributors/YaelRK.png";
import Shahar from "../assets/contributors/Shahar.png";
import Yossi from "../assets/contributors/Yossi.png";
import Talko from "../assets/contributors/Talko.png";
import YaelB from "../assets/contributors/YaelB.png";
import Rivka from "../assets/contributors/Rivka.png";
import Elad from "../assets/contributors/Elad.png";
import Dan from "../assets/contributors/Dan.png";

import styles from "./Team.module.scss";

const team = [
  {
    imgSrc: Meirav,
    name: "Meirav Ron",
    linkedinUrl: "https://www.linkedin.com/in/meirav-ron-1903b0197/",
    title: "Product Designer"
  },
  {
    imgSrc: Shahar,
    name: "Shahar Zilberman",
    linkedinUrl: "https://www.linkedin.com/in/shahar-zilberman-bba046287/",
    title: "Software Engineer"
  },
  {
    imgSrc: Rivka,
    name: "Rivka Ungar",
    linkedinUrl: "https://www.linkedin.com/in/rivka-ungar/",
    title: "Software Engineer"
  },
  {
    imgSrc: YaelRK,
    name: "Yael Rosen-Karen",
    linkedinUrl: "https://www.linkedin.com/in/rosen2yael/",
    title: "Product Designer"
  },
  {
    imgSrc: Yossi,
    name: "Yossi Saadi",
    linkedinUrl: "https://www.linkedin.com/in/yossisaadi/",
    title: "Software Engineer"
  },
  {
    imgSrc: Talko,
    name: "Tal Koren",
    linkedinUrl: "https://www.linkedin.com/in/talkor/",
    title: "Software Engineer"
  },
  {
    imgSrc: YaelB,
    name: "Yael Bein",
    linkedinUrl: "https://www.linkedin.com/in/yaelbein/",
    title: "Product Designer"
  },
  {
    imgSrc: Elad,
    name: "Elad Mizrahi",
    linkedinUrl: "https://www.linkedin.com/in/elad-mizrahi/",
    title: "Product Designer"
  },
  {
    imgSrc: Dan,
    name: "Dan Fishbein",
    linkedinUrl: "https://www.linkedin.com/in/danfishbein90s/",
    title: "Product Designer"
  }
];

export default function Team() {
  return (
    <div className={styles.team}>
      {team.map(({ imgSrc, name, linkedinUrl, title }) => (
        <TeamMember key={name} image={imgSrc} name={name} linkedinUrl={linkedinUrl} title={title} />
      ))}
    </div>
  );
}
