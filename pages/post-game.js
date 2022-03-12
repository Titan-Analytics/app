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
import {
  BsXSquareFill,
  BsFillExclamationTriangleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import GaugeChart from "react-gauge-chart";

function Page() {
  const { colorMode } = useColorMode();

  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";

  return (
    <Layout title="Post-game">
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[5, 5, 5, 8]}>
        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Pre-Game Assessment
            </Heading>

            <Heading size="sm" mb={3}>
              Player Reminders
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Prioritize enemy’s bird as first target
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                  Pair Chomp w/ non-zero energy cards
                </Center>
              </ListItem>
            </List>

            <Heading size="sm" mb={3}>
              Opponent Assessment
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>MMR: 1358, Win Rate: 40%</ListItem>

              <ListItem>Competitor Lineup: Backdoor Bird</ListItem>
            </UnorderedList>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Remember to count cards in later stages
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                  Target beast without 3+ attack cards
                </Center>
              </ListItem>
            </List>

            <Heading size="md" mb={3}>
              Chance Of Success
            </Heading>

            <Box className="gauge" maxWidth={280} m="0 auto" mb={-3}>
              <GaugeChart
                arcWidth={0.3}
                animateDuration={1000}
                needleColor={useColorModeValue("#A0AEC0", "#718096")}
                needleBaseColor={useColorModeValue("#A0AEC0", "#718096")}
                textColor={useColorModeValue("blue.500", "white")}
                colors={["#E53E3E", "#ECC94B", "#38A169"]}
                percent={0.9}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Performance Review
            </Heading>

            <Heading size="sm" mb={3}>
              Areas Of Success
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Targeted enemy bird on 1st turn.
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Killed beast with 4 cards in 1 turn.
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon
                  as={BsFillCheckCircleFill}
                  fontSize="24px"
                  color="green.500"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Properly counted cards in late-game.
                </Center>
              </ListItem>
            </List>

            <Heading size="sm" mb={3}>
              Areas For Improvement
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={BsFillExclamationTriangleFill}
                  fontSize="24px"
                  color="yellow.400"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Passing when not having a combo/chain.
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon
                  as={BsFillExclamationTriangleFill}
                  fontSize="24px"
                  color="yellow.400"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Timing of buffs.
                </Center>
              </ListItem>
            </List>

            <Heading size="sm" mb={3}>
              Areas Of Error
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                  Target beast without 3+ attack cards
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                  Target beast without 3+ attack cards
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon as={BsXSquareFill} fontSize="23px" color="red.500" />
                <Center pl={1} height="100%" justifyContent="left">
                  Target beast without 3+ attack cards
                </Center>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Outcome
            </Heading>

            <Text mb={2}>Game outcome: Win</Text>

            <Heading size="sm" mb={2}>
              Awards/Accolades
            </Heading>

            <Text mb={3}>Won during Blood Moon Curse</Text>

            <Heading size="sm" mb={2}>
              Key Statistics
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>Damage Inflicted: 940</ListItem>

              <ListItem>Damage Taken: 810</ListItem>

              <ListItem>Axies Remaining: 1</ListItem>

              <ListItem>Opponent Axies Remaining: 0</ListItem>

              <ListItem>Buffs/Debuffs Used: 5/1</ListItem>
            </UnorderedList>

            <Heading size="sm" mb={2}>
              Self-reported feedback
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                {
                  "“I feel it would be easier to win if my supporting axies had more debuff abilities.”"
                }
              </ListItem>

              <ListItem>
                {
                  "“I feel it would be easier to win if my supporting axies had more debuff abilities.”"
                }
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default Page;
