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
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";

function Page() {
  const { colorMode } = useColorMode();
  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";
  const playerList = [
    {
      name: "Deep Dive",
      image: "/players/person-1.png",
      overall: "A",
      effort: "A",
      outcome: "A",
      training: 12,
      adherance: 90,
      attitude: "A",
      utilization: "A",
      winRate: 0.5,
      earningsPer: 100,
      totalEarnings: 1000,
      yield: 105,
    },

    {
      name: "Quotient",
      image: "/players/person-2.png",
      overall: "A",
      effort: "A",
      outcome: "A",
      training: 12,
      adherance: 90,
      attitude: "A",
      utilization: "A",
      winRate: 0.5,
      earningsPer: 100,
      totalEarnings: 1000,
      yield: 105,
    },

    {
      name: "Hello",
      image: "/players/person-3.png",
      overall: "A",
      effort: "A",
      outcome: "A",
      training: 12,
      adherance: 90,
      attitude: "A",
      utilization: "A",
      winRate: 0.5,
      earningsPer: 100,
      totalEarnings: 1000,
      yield: 105,
    },
  ];

  return (
    <Layout title="Guild">
      <Stack p={[3, 3, 4]} bg={bgBlur} borderWidth={2} rounded="xl">
        <Flex>
          <Box flex={2}>
            <Heading size="md">Players</Heading>
          </Box>

          <Box flex={3}>
            <Heading size="md" mb={2}>
              Summary Scores
            </Heading>

            <Box display="flex" fontSize="sm">
              <Box flex={1}>Overall</Box>

              <Box flex={1}>Effort</Box>

              <Box flex={1}>Outcome</Box>
            </Box>
          </Box>

          <Box flex={4}>
            <Heading size="md" mb={2}>Behavioural/Effort Metrics</Heading>

            <Box display="flex" fontSize="sm">
              <Box flex={1}>Training hours</Box>

              <Box flex={1}>Coaching Adherance</Box>

              <Box flex={1}>Attitude</Box>

              <Box flex={1}>Utilization</Box>
            </Box>
          </Box>

          <Box flex={4}>
            <Heading size="md" mb={2}>Outcome Metrics</Heading>

            <Box display="flex" fontSize="sm">
              <Box flex={1}>Win Rate</Box>

              <Box flex={1}>Game Earnings</Box>

              <Box flex={1}>Total Earnings</Box>

              <Box flex={1}>Total Yield</Box>
            </Box>
          </Box>
        </Flex>
        {playerList.map((el, idx) => {
          return (
            <Box key={"p" + idx}>
              <Flex>
                <Box flex={2}>
                  <Box
                    rounded="xl"
                    borderWidth={2}
                    height={[90, 100]}
                    width={[90, 100]}
                    position="relative"
                    overflow="hidden"
                  >
                    <Image src={el.image} layout="fill" objectFit="cover" />
                  </Box>

                  <Heading size="sm" pl={2}>
                    {el.name}
                  </Heading>
                </Box>

                <Box flex={3} display="flex">
                  <Box flex={1}>
                    <Heading>{el.overall}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.effort}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.outcome}</Heading>
                  </Box>
                </Box>

                <Box display="flex" flex={4}>

                  <Box flex={1}>
                    <Heading>{el.training}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.attitude}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.adherance}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.utilization}</Heading>
                  </Box>

                </Box>

                <Box flex={4} display="flex">
                  <Box flex={1}>
                    <Heading>{el.winRate}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.earningsPer}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.totalEarnings}</Heading>
                  </Box>

                  <Box flex={1}>
                    <Heading>{el.yield}</Heading>
                  </Box>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Stack>
    </Layout>
  );
}

export default Page;
