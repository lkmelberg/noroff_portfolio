import { useState } from "react";
import "./App.css";
import { FrameworksCard } from "./components/FrameworksCard";
import { ExamCard } from "./components/ExamCard";
import { SemesterCard } from "./components/SemesterCard";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function App() {
  return (
    <Flex
      justifyContent={"center"}
      direction={"column"}
      wrap={"wrap"}
      gap={"2rem"}>
      <Text textStyle={"headerText"}>Noroff Portfolio</Text>
      <Flex direction={"column"}>
        <Text paddingX={"6rem"} textStyle={"bodyText"}>
          Hi! My name is Linn, I am a frontend developer and this is my
          portfolio for my second year of studies at Noroff. You can check out
          more projects on:
        </Text>
        <Link to={"https://github.com/lkmelberg"} target="_blank">
          ✨ My github ✨
        </Link>
      </Flex>
      <Flex
        justifyContent={"center"}
        direction={"row"}
        wrap={"wrap"}
        gap={"2rem"}>
        <FrameworksCard />
        <ExamCard />
        <SemesterCard />
      </Flex>
    </Flex>
  );
}

export default App;
