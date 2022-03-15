import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";

import {
  SimpleGrid,
  Box,
  Heading,
  List,
  Button,
  useColorMode,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Center,
  ListIcon,
  Text,
  Divider,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";
import { BsXSquareFill, BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import GaugeChart from "react-gauge-chart";

function Page() {
  const { colorMode } = useColorMode();

  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";

  const currentTeam = [
    {
      name: "Roxie",
      image: "/axis/green.png",
      type: "Plant",
      stats: [
        {
          title: "Health",
          value: "100",
        },

        {
          title: "Attack",
          value: "200",
        },

        {
          title: "Defense",
          value: "300",
        },
      ],
    },

    {
      name: "Carlos",
      image: "/axis/red.png",
      type: "Bug",
      stats: [
        {
          title: "Health",
          value: "100",
        },

        {
          title: "Attack",
          value: "200",
        },

        {
          title: "Defense",
          value: "300",
        },
      ],
    },

    {
      name: "Diabolic",
      image: "/axis/turqoise.png",
      type: "Acquatic",
      stats: [
        {
          title: "Health",
          value: "100",
        },

        {
          title: "Attack",
          value: "200",
        },

        {
          title: "Defense",
          value: "300",
        },
      ],
    },
  ];

  const opponentTeam = [
    {
      name: "Foobar",
      image: "/axis/black.png",
      type: "Beast",
      stats: [
        {
          title: "Health",
          value: "100",
        },

        {
          title: "Attack",
          value: "200",
        },

        {
          title: "Defense",
          value: "300",
        },
      ],
    },

    {
      name: "Jimmy",
      image: "/axis/white.png",
      type: "Bird",
      stats: [
        {
          title: "Health",
          value: "100",
        },

        {
          title: "Attack",
          value: "200",
        },

        {
          title: "Defense",
          value: "300",
        },
      ],
    },

    {
      name: "Sandra",
      image: "/axis/yellow.png",
      type: "Dawn",
      stats: [
        {
          title: "Health",
          value: "100",
        },

        {
          title: "Attack",
          value: "200",
        },

        {
          title: "Defense",
          value: "300",
        },
      ],
    },
  ];

  return (
    <Layout title="Pre-game">
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[5, 5, 5, 8]}>
        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Player Tendencies
            </Heading>

            <Box mb={3}>
              <Heading size="sm" mb={1}>
                Style
              </Heading>

              <UnorderedList>
                <ListItem>
                  Aggressive player focused on quickly discarding enemy’s deck
                </ListItem>

              </UnorderedList>
            </Box>

            <Box mb={3}>
              <Heading size="sm" mb={1}>
                Strengths
              </Heading>

              <UnorderedList>
                <ListItem>Card counting</ListItem>

                <ListItem>Timing of passing turns</ListItem>
              </UnorderedList>
            </Box>

            <Box mb={5}>
              <Heading size="sm" mb={1}>
                Weaknesses
              </Heading>

              <UnorderedList>
                <ListItem>Using zero energy card combos.</ListItem>
              </UnorderedList>
            </Box>

            <Heading size="md" mb={3}>
              Reminders
            </Heading>

            <List spacing={3}>
              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                Prioritize enemy{"'"}s bird as first target.
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                Pair Chomp w/ non-zero energy cards.
                </Center>
              </ListItem>

            </List>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Team Lineup
            </Heading>

            <Text mb={2}>MMR: 1421, Win Rate: 55%</Text>

            <Heading size="sm" mb={2}>
              Current Axie Team: Terminator
            </Heading>

            <Divider my={2} borderWidth={"1px"} />

            <SimpleGrid columns={[3]} spacing={4}>
              {currentTeam.map((el, idx) => {
                return (
                  <Box key={"ct" + idx}>
                    <Box textAlign="center">
                      <Heading size="sm" fontSize="lg">
                        {el.name}
                      </Heading>
                    </Box>

                    <Divider my={2} borderWidth={"1px"} />

                    <Box
                      height="90px"
                      width="90px"
                      margin="0 auto"
                      position="relative"
                    >
                      <Image
                        src={el.image}
                        alt={el.name}
                        objectFit="cover"
                        layout="fill"
                      />
                    </Box>

                    <Divider my={2} borderWidth={"1px"} />

                    <Box textAlign="center" fontSize="xl">
                      {el.type}
                    </Box>

                    <Divider my={2} borderWidth={"1px"} />

                    <Box>
                      {el.stats.map((el, index) => {
                        return (
                          <Box key={el.title + index} textAlign="center" mb={1}>
                            <Box fontSize="lg">{el.value}</Box>
                            <Heading size="xs">{el.title}</Heading>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>

            <Divider mt={2} mb={4} borderWidth={"1px"} />

            <Heading size="md" mb={3}>
              Chance Of Success
            </Heading>

            <Box className="gauge" maxWidth={220} mb={-3}>
              <GaugeChart
                arcWidth={0.3}
                animateDuration={1000}
                needleColor={useColorModeValue("#A0AEC0", "#718096")}
                needleBaseColor={useColorModeValue("#A0AEC0", "#718096")}
                textColor={useColorModeValue("blue.500", "white")}
                colors={["#E53E3E", "#ECC94B", "#38A169"]}
                percent={0.55}
                animate={false}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Opponent Review
            </Heading>

            <Text mb={2}>MMR: 1358, Win Rate: 40%</Text>

            <Heading size="sm" mb={2}>
              Opponent Axie Team: Backdoor Bird
            </Heading>

            <Divider my={2} borderWidth={"1px"} />
            <SimpleGrid columns={[3]} spacing={4} mb={2}>
              {opponentTeam.map((el, idx) => {
                return (
                  <Box key={"ct" + idx}>
                    <Box textAlign="center">
                      <Heading size="sm" fontSize="lg">
                        {el.name}
                      </Heading>
                    </Box>

                    <Divider my={2} borderWidth={"1px"} />

                    <Box
                      height="90px"
                      width="90px"
                      margin="0 auto"
                      position="relative"
                    >
                      <Image
                        src={el.image}
                        alt={el.name}
                        objectFit="cover"
                        layout="fill"
                      />
                    </Box>

                    <Divider my={2} borderWidth={"1px"} />

                    <Box textAlign="center" fontSize="xl">
                      {el.type}
                    </Box>

                    <Divider my={2} borderWidth={"1px"} />

                    <Box>
                      {el.stats.map((el, index) => {
                        return (
                          <Box key={el.title + index} textAlign="center" mb={1}>
                            <Box fontSize="lg">{el.value}</Box>
                            <Heading size="xs">{el.title}</Heading>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>

            <Divider mt={2} mb={4} borderWidth={"1px"} />

            <Heading size="md" mb={2}>
              Player Reminders
            </Heading>

            <List spacing={3}>
              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Remember to count cards in later stages.
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                  Target beast without 3+ attack cards.
                </Center>
              </ListItem>

            </List>
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default Page;
