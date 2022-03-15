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

import { AiOutlineHome } from "react-icons/ai";
import { GiPunchBlast } from "react-icons/gi";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoBugSharp } from "react-icons/io5";
import { MdOutlineFormatListNumbered, MdOutlineExposureZero } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";

function Page() {
  const { colorMode } = useColorMode();
  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";
  return (
    <Layout title="Deep Dive">
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[5, 5, 5, 8]}>
        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={4}>
              Player Type Assessment
            </Heading>

            <Heading size="sm" mb={3}>
              Player Type
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={GiPunchBlast}
                  fontSize="30px"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Aggressive player focused on quickly discarding enemy’s deck.
                </Center>
              </ListItem>
            </List>

           

            <Heading size="sm" mb={3}>
              Current Build
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>Terminator</ListItem>
            </UnorderedList>

            <Heading size="sm" mb={3}>
              Previous Builds
            </Heading>

            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={IoBugSharp}
                  fontSize="30px"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Discard bug. 
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon
                  as={BsFillDoorOpenFill}
                  fontSize="30px"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Backdoor bird. 
                </Center>
              </ListItem>
            </List>

            <Heading size="sm" mb={3}>
              Strengths
            </Heading>

            


            <List spacing={2} mb={4}>
              <ListItem display="flex">
                <ListIcon
                  as={MdOutlineFormatListNumbered}
                  fontSize="30px"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Card counting.
                </Center>
              </ListItem>

              <ListItem display="flex">
                <ListIcon
                  as={HiOutlineClock}
                  fontSize="30px"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Time of passing turns. 
                </Center>
              </ListItem>
            </List>

            <Heading size="sm" mb={3}>
              Weaknesses
            </Heading>

            <List spacing={2} >
              <ListItem display="flex">
                <ListIcon
                  as={MdOutlineExposureZero}
                  fontSize="34px"
                />
                <Center pl={1} height="100%" justifyContent="left">
                  Using zero energy card combos
                </Center>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={4}>
              Situational/Trend Analysis
            </Heading>

          
            <Heading size="sm" mb={3}>
              Situations driving {">65%"} success rate
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                75% win rate Backdoor Bird lineups
              </ListItem>
            </UnorderedList>


            <Heading size="sm" mb={3}>
              Commentary/Recommendations
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                "Continue to prioritize the enemy bird as the first target."
              </ListItem>
              </UnorderedList>



            <Heading size="sm" mb={3}>
              Situations driving {"<35%"} success rate
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                Only a 20% win rate when the Chomp card is paired with a non-zero energy card more than twice/game.
              </ListItem>
            </UnorderedList>


            <Heading size="sm" mb={3}>
              Commentary / Recommendations
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                "Remember to use the Chomp card alongside two zero energy cards."
              </ListItem>

            </UnorderedList>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={4}>
              Coaching/Performance Plan
            </Heading>

            <Heading size="sm" mb={2}>
              Coach notes
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                {
                  "“You’re doing all the right things. Address the learning goals discussed and keep building your experience.”"
                }
              </ListItem>
            </UnorderedList>

            <Heading size="sm" mb={2}>
              Learning Goals
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                Review Quick reference guide: Positioning your team for success.
              </ListItem>
              <ListItem>
                Complete self-directed learning module: Early game strategy.
              </ListItem>
              <ListItem>
                Complete 2 hours of peer-training in ‘low success rate’
                conditions.
              </ListItem>
            </UnorderedList>

            <Heading size="sm" mb={2}>
              Health & Wellness Recommendations
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                Review Quick reference guide: Preparing for sleep.
              </ListItem>
              <ListItem>Maintain physical activity regimen.</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default Page;
