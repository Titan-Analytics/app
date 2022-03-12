import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";

import { SimpleGrid, Box, Heading } from "@chakra-ui/react";

function Page() {
  const pages = [
    {
      title: "Performance",
      image: "/performance.jpeg",
      link: "/performance",
    },

    {
      title: "Guild",
      image: "/guild.jpeg",
      link: "/guild",
    },

    {
      title: "Pre-game",
      image: "/pre-game.jpeg",
      link: "/pre-game",
    },

    {
      title: "Post-game",
      image: "/post-game.jpeg",
      link: "/post-game",
    },

    {
      title: "Deep Dive",
      image: "/deep-dive.jpeg",
      link: "/deep-dive",
    },
  ];

  return (
    <Layout title="Home">
      <SimpleGrid columns={[1, 1, 2]} spacing={8}>
        {pages.map((el, idx) => {
          return (
            <Link key={idx} href={el.link}>
              <Box
                cursor="pointer"
                p={5}
                borderWidth={2}
                rounded="xl"
                position="relative"
                overflow="hidden"
                minHeight={[300, 330, 340, 360]}
              >
                <Heading
                  size="3xl"
                  zIndex={4}
                  position="relative"
                  color="white"
                >
                  {el.title}
                </Heading>
                <Box height="100%" brightness={"50%"}>
                  <Image
                    src={el.image}
                    alt={el.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
}

export default Page;
