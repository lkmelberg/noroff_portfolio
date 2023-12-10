import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function SiteCard({ image, desc, title, demoLink, repoLink }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={{ pathname: { demoLink } }} target="_blank">
              Hosted Demo
            </Link>{" "}
          </Button>
          <Button variant="solid" colorScheme="blue">
            <Link to={{ pathname: { repoLink } }} target="_blank">
              Repository
            </Link>{" "}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
