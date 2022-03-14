import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";

import {
  SimpleGrid,
  Box,
  Heading,
  Button,
  Stack,
  Flex,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";

function Page() {
  const { colorMode } = useColorMode();
  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";
  const playerList = [
    {
      name: "Winston",
      image: "/players/person-1.png",
      overall: "A",
      effort: "A",
      outcome: "A",
      training: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      winRate: 60,
      earningsPer: 6,
      totalEarnings: 600,
      yield: 65,
    },

    {
      name: "Alvin",
      image: "/players/person-1.png",
      overall: "A",
      effort: "A",
      outcome: "A",
      training: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      winRate: 58,
      earningsPer: 6,
      totalEarnings: 580,
      yield: 60,
    },

    {
      name: "Jessica",
      image: "/players/person-1.png",
      overall: "B",
      effort: "A",
      outcome: "B",
      training: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      winRate: 53,
      earningsPer: 5,
      totalEarnings: 530,
      yield: 55,
    },

    {
      name: "Christopher",
      image: "/players/person-1.png",
      overall: "B",
      effort: "B",
      outcome: "B",
      training: 4,
      adherance: "B",
      attitude: "B",
      utilization: 80,
      winRate: 52,
      earningsPer: 5,
      totalEarnings: 416,
      yield: 50,
    },

    {
      name: "Charlotte",
      image: "/players/person-1.png",
      overall: "B",
      effort: "A",
      outcome: "C",
      training: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      winRate: 48,
      earningsPer: 4,
      totalEarnings: 480,
      yield: 45,
    },

    {
      name: "Jason",
      image: "/players/person-1.png",
      overall: "B",
      effort: "C",
      outcome: "A",
      training: 2,
      adherance: "C",
      attitude: "C",
      utilization: 70,
      winRate: 55,
      earningsPer: 5,
      totalEarnings: 385,
      yield: 50,
    },

    {
      name: "Angel",
      image: "/players/person-1.png",
      overall: "C",
      effort: "C",
      outcome: "C",
      training: 0,
      adherance: "C",
      attitude: "C",
      utilization: 50,
      winRate: 55,
      earningsPer: 3,
      totalEarnings: 220,
      yield: 30,
    },

    {
      name: "Alberto",
      image: "/players/person-1.png",
      overall: "C",
      effort: "B",
      outcome: "C",
      training: 3,
      adherance: "B",
      attitude: "B",
      utilization: 80,
      winRate: 45,
      earningsPer: 3,
      totalEarnings: 360,
      yield: 30,
    },

    {
      name: "Eugene",
      image: "/players/person-1.png",
      overall: "C",
      effort: "C",
      outcome: "C",
      training: 1,
      adherance: "C",
      attitude: "C",
      utilization: 60,
      winRate: 42,
      earningsPer: 3,
      totalEarnings: 252,
      yield: 30,
    },
  ];

  return (
    <Layout title="Guild">
      <Stack spacing={4}>


        {playerList.map((el, idx) => {
          return (
            <Box key={"p" + idx} bg={bgBlur} borderWidth={2} rounded="xl" p={[4, 4, 4, 5]}>
              <Box display={["inline-flex", "inline-flex", "inline-flex", "flex"]} wrap="wrap" gap={[5, 5, 8]} justifyContent="left">
                <Box flex={1}>

                  <Heading size="sm" pl={2} mb={1}>
                    {el.name}
                  </Heading>

                  <Box
                    rounded="xl"
                    height={[90, 90, 120]}
                    width={[90, 90,   120]}
                    position="relative"
                    overflow="hidden"
                  >
                    <Image src={el.image} layout="fill" objectFit="cover" />
                  </Box>


                </Box>

                <Box display="flex"  justifyContent={["center", "center", "center", "left"]} flex={[ 8]} flexWrap="wrap" gap="8">

                  <Box flex={3} >
                    <Center height="100%">
                      <Box minWidth="250" maxWidth="300px"  >

                    <Heading size="sm" mb={4} textAlign="center">
                      Summary Scores
                    </Heading>

                    <Box display="flex">
                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.overall}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Overall
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.effort}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Effort
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.outcome}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Outcome
                        </Text>
                      </Box>
                    </Box>
</Box>
                    </Center>

                  </Box>

                  <Box flex={[4]}>

                  <Center height="100%">
                      <Box  minWidth="300px" maxWidth="350px"  >
                    <Heading size="sm" mb={4} textAlign="center">
                      Behavioural/Effort Metrics
                    </Heading>


                    <Box display="flex" >


                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.training}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Training Hours
                        </Text>
                      </Box>


                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.adherance}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Coaching Adherance
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.attitude}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Attitude
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.utilization}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Utilization
                        </Text>
                      </Box>
                    </Box>
                    </Box>
                    </Center>

                  </Box>


                  <Box flex={[4]} minWidth="300px" maxWidth="350px" >

                  <Center height="100%">
                      <Box  minWidth="300px" maxWidth="350px"  >

                    <Heading size="sm" mb={4} textAlign="center">
                      Outcome Metrics
                    </Heading>
                    <Box display="flex">
                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.winRate}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Win Rate
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.earningsPer}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Game Earnings
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.totalEarnings}</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Total Earnings
                        </Text>
                      </Box>

                      <Box flex={1} textAlign="center">
                        <Text fontSize="2xl">{el.yield}%</Text>
                        <Text fontSize="xs" fontWeight="bold">
                          Yield
                        </Text>
                      </Box>
                    </Box>
                    </Box>
                    </Center>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Layout>
  );
}

export default Page;
