import React from "react";
import { SiteCard } from "../SiteCard";
import semesterProject2_screenshot from "../../assets/semesterProject2_screenshot.png";
export function SemesterCard() {
  return (
    <SiteCard
      image={semesterProject2_screenshot}
      desc={
        "This was my second semester project for my frontend degree from noroff. We were to use what we have learned so far in our studies and apply it to the project. The site is an auction site, it was created using bootstrap, and a given api."
      }
      title={"Semester Project 2"}
      demoLink={"https://main--splendid-rabanadas-10d73c.netlify.app/"}
      repoLink={
        "https://github.com/lkmelberg/noroff_semester_project_2"
      }></SiteCard>
  );
}
