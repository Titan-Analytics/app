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

function Page() {
  const { colorMode } = useColorMode();
  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";
  return (
    <Layout title="Deep Dive">
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[5, 5, 5, 8]}>
        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Player Type Assessment
            </Heading>

            <Heading size="sm" mb={3}>
              Player Type
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>
                Aggressive player focused on quickly discarding enemy’s deck{" "}
              </ListItem>
            </UnorderedList>

            <Heading size="sm" mb={3}>
              Current Build
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>Terminator</ListItem>
            </UnorderedList>

            <Heading size="sm" mb={3}>
              Previous Builds
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>Discard Bug</ListItem>
              <ListItem>Backdoor Bird</ListItem>
            </UnorderedList>

            <Heading size="sm" mb={3}>
              Strengths
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>Card counting</ListItem>
              <ListItem>Timing of passing turns</ListItem>
            </UnorderedList>

            <Heading size="sm" mb={3}>
              Weaknesses
            </Heading>

            <UnorderedList mb={2}>
              <ListItem>Using zero energy card combos.</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
              Situational/Trend Analysis
            </Heading>

          

            <Text mb={4}>
              <b>Situations</b> driving <b>{">65%"}</b> success rate 
            </Text>



            <Heading size="sm" mb={3}>
              Commentary / Recommendations
            </Heading>

            <UnorderedList mb={4}>


              <ListItem>
                Continue to prioritize the enemy bird as the first target.
              </ListItem>
              <ListItem>
                75% win rate Backdoor Bird lineups
              </ListItem>
            </UnorderedList>


            <Text mb={4}>
             <b>Situations</b> driving <b>{"<35%"}</b> success rate

            </Text>

            <Heading size="sm" mb={3}>
              Commentary / Recommendations
            </Heading>

            <UnorderedList mb={4}>
              <ListItem>
                Remember to use the Chomp card alongside two zero energy cards
              </ListItem>

              <ListItem>
                Only a 20% win rate when the Chomp card is paired with a non-zero energy card more than twice/game.
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={3}>
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
