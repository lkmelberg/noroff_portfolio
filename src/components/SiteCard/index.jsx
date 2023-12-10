import React from "react";
import {
  Card,
  Flex,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function SiteCard({ image, desc, title, demoLink, repoLink }) {
  return (
    <Card justifyContent={"space-between"} width={"20rem"}>
      <Flex direction={"column"} alignItems={"center"} padding={"1rem"}>
        <Image
          fit={"cover"}
          alt="screenshot of website"
          boxSize={"15rem"}
          src={image}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Divider borderWidth={".05rem"} borderColor={"#0F6466"} />
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </Flex>

      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant={"first"}>
            <Link to={demoLink} target="_blank">
              Hosted Demo
            </Link>{" "}
          </Button>
          <Button variant="second">
            <Link to={repoLink} target="_blank">
              Repository
            </Link>{" "}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
