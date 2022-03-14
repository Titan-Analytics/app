import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";

import {
  SimpleGrid,
  Box,
  Heading,
  Grid,
  Text, 
  useColorMode,
} from "@chakra-ui/react";

function Page() {

  const { colorMode } = useColorMode();
  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";


  const player = [
    {
      title: "Player Performance Summary",
      image: "/performance.jpeg",
      link: "/performance",
      desc: "Provide players with a snapshot of their period performance & projected compensation.",
    },

    {
      title: "Pre-Game Assessment",
      image: "/pre-game.jpeg",
      link: "/pre-game",
      desc: "Provide players with a competitor assessment as they go into the game, helping them prepare for the match.",
    },

    {
      title: "Post-Game Performance Review",
      image: "/post-game.jpeg",
      link: "/post-game",
      desc: "Provide players with a detailed view of performance from their previous game.",
    },

    {
      title: "Overall Performance Review",
      image: "/deep-dive.jpeg",
      link: "/deep-dive",
      desc: "Provide players a readout of their aggregate performance, situational strengths & weaknesses, and current performance improvement recommendations.",
    },
  ];

  const guildManager = [

    {
      title: "Guild Manager Summary Dashboard",
      image: "/guild.jpeg",
      link: "/guild",
      desc: "Provide guild managers with oversight over their player network and relative performance against peers.",
    },


  ];

  return (
    <Layout title="Home">
      <Grid templateColumns={["repeat(100%)", "repeat(100%)", "240px calc(100% - 240px)"]}>
        <Box>
          <Heading size="md">
            Player Pages
          </Heading>
        </Box>

        <Box>
          <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={10}>
            {player.map((el, idx) => {
              return (
                <Link key={idx} href={el.link}>
                  <Box
                    bg={bgBlur}
                    cursor="pointer"
                    p={5}
                    borderWidth={2}
                    rounded="xl"
                    position="relative"
                    overflow="hidden"
                  >
                    <Heading
                      zIndex={4}
                      position="relative"
                      size="lg"
                      mb={2}
                    >
                      {el.title}
                    </Heading>

                    <Text zIndex={4} position="relative">
                      {el.desc}
                    </Text>

                  </Box>
                </Link>
              );
            })}
          </SimpleGrid>

        </Box>

        <Box>
          <Heading size="md">
            Guild Manager Pages
          </Heading>
        </Box>

        <Box>

          <SimpleGrid columns={[1, 1, 2]} spacing={8}>
            {guildManager.map((el, idx) => {
              return (
                <Link key={idx} href={el.link}>
                  <Box
                    cursor="pointer"
                    p={5}
                    borderWidth={2}
                    bg={bgBlur}
                    rounded="xl"
                    position="relative"
                    overflow="hidden"
                  >
                    <Heading
                      size="lg"
                      zIndex={4}
                      mb={2}
                      position="relative"
                    >
                      {el.title}
                    </Heading>

                    <Text zIndex={4} position="relative">
                      {el.desc}
                    </Text>
                  </Box>
                </Link>
              );
            })}
          </SimpleGrid>

        </Box>


      </Grid>

    </Layout>
  );
}

export default Page;
