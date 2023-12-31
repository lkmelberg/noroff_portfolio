import React from "react";
import { SiteCard } from "../SiteCard";
import examProject2_screenshot from "../../assets/examProject2_screenshot.png";
export function ExamCard() {
  return (
    <SiteCard
      image={examProject2_screenshot}
      desc={
        "This is my final exam project for my frontend degree from Noroff :) We were to use what we have learned in our two years of studies and apply it to the project. The site is a accomodation booking site. It was created with React and Chakra UI."
      }
      title={"Exam Project 2"}
      demoLink={"https://precious-custard-c580bd.netlify.app/"}
      repoLink={"https://github.com/lkmelberg/noroff_examProject2"}></SiteCard>
  );
}
