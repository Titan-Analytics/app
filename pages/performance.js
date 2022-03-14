import Image from "next/image";
import Layout from "../components/Layout";
import GaugeChart from "react-gauge-chart";

import {
  SimpleGrid,
  Box,
  Heading,
  Button,
  Grid,
  UnorderedList,
  ListItem,
  IconButton,
  useColorMode,
  Input,
  HStack,
  Stack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

function Page() {
  const { colorMode } = useColorMode();
  let bgBlur = colorMode === "light" ? "#ffffffbb" : "#000000bb";

  return (
    <Layout title="Performance">
      <Grid
        templateColumns={[
          "repeat(100%)",
          "repeat(100%)",
          "repeat(100%)",
          "290px calc(100% - 310px)",
        ]}
        gap="20px"
      >
        <Box maxWidth={["100%", "100%", 400]}>
          <Box rounded="xl" borderWidth={2} p={[4, 4, 4, 5]} bg={bgBlur}>
            <Heading size="md" mb={2}>
              Player Profile
            </Heading>

            <SimpleGrid columns={2} gap={5} mb={2}>
              <Box>
                <Box>Warren</Box>

                <Box>Junior Scholar</Box>

                <Box>Phillipenes</Box>

                <Box>Earning Split: 65/35</Box>
              </Box>

              <Box>
                <Center height="100%">
                  <Box
                    rounded="xl"
                    borderWidth={2}
                    height={[90, 120, 110]}
                    width={[90, 120, 110]}
                    position="relative"
                    overflow="hidden"
                  >
                    <Image
                      src="/players/person-2.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Center>
              </Box>
            </SimpleGrid>

            <Box mb={2}>
              <Heading size="sm">Stats</Heading>

              <UnorderedList>
                <ListItem>MMR: 1,421 (6 SLP/win)</ListItem>

                <ListItem>Rank: 430,000 (0 AXS)</ListItem>
              </UnorderedList>
            </Box>

            <Box mb={2}>
              <Heading size="sm">Guild Roles</Heading>

              <UnorderedList>
                <ListItem>New Scholar Team Builder</ListItem>

                <ListItem>Coach for 1000-1400 MMR Teams</ListItem>
              </UnorderedList>
            </Box>

            <Box mb={2}>
              <Heading size="sm">Experience</Heading>

              <UnorderedList>
                <ListItem>League of Legends 3.5 months</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="sm">Lifetime Earnings</Heading>

              <UnorderedList>
                <ListItem>8,744 SLP</ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            rounded="xl"
            borderWidth={2}
            p={[4, 4, 4, 5]}
            mb="20px"
            bg={bgBlur}
          >
            <Heading size="md" mb={2}>
              Performance
            </Heading>

            <HStack mb={4}>
              <Input type={"date"} maxWidth={220} />
              <span style={{ margin: "0 20px" }}>to</span>
              <Input type="date" maxWidth={220} />
            </HStack>

            <SimpleGrid
              textAlign={"center"}
              columns={[2, 2, 4]}
              spacing={[4, 6, 6, 6]}
            >
              <Box rounded="xl" borderWidth={2}>
                <Stack spacing={3} p={[2, 2, 4]} mb={[3, 4, 0]} px={[2, 2, 3]}>
                  <BorderCenter minHeight={10}>
                    <Heading size="sm">Matches Played</Heading>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>110</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Actual
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>110</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Target
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>110</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Variance
                      </Box>
                    </Box>
                  </BorderCenter>
                </Stack>

                <Box className="gauge" pb={2} maxWidth={280} m="0 auto">
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

              <Box rounded="xl" borderWidth={2}>
                <Stack spacing={3} p={[2, 2, 4]} mb={[3, 4, 0]} px={[2, 2, 3]}>
                  <BorderCenter minHeight={10}>
                    <Heading size="sm">Win Rate</Heading>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>55%</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Actual
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>48%</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Target
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>30</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Variance
                      </Box>
                    </Box>
                  </BorderCenter>
                </Stack>

                <Box className="gauge" pb={2} maxWidth={280} m="0 auto">
                  <GaugeChart
                    arcWidth={0.3}
                    animateDuration={1000}
                    needleColor={useColorModeValue("#A0AEC0", "#718096")}
                    needleBaseColor={useColorModeValue("#A0AEC0", "#718096")}
                    textColor={useColorModeValue("blue.500", "white")}
                    colors={["#E53E3E", "#ECC94B", "#38A169"]}
                    percent={0.2}
                  />
                </Box>
              </Box>

              <Box rounded="xl" borderWidth={2}>
                <Stack spacing={3} p={[2, 2, 4]} mb={[3, 4, 0]} px={[2, 2, 3]}>
                  <BorderCenter minHeight={10}>
                    <Heading size="sm">Daily Avg. Earnings</Heading>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>60 SLP</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Actual
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>72 SLP</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Target
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>40</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Variance
                      </Box>
                    </Box>
                  </BorderCenter>
                </Stack>

                <Box className="gauge" pb={2} maxWidth={280} m="0 auto">
                  <GaugeChart
                    arcWidth={0.3}
                    animateDuration={1000}
                    needleColor={useColorModeValue("#A0AEC0", "#718096")}
                    needleBaseColor={useColorModeValue("#A0AEC0", "#718096")}
                    textColor={useColorModeValue("blue.500", "white")}
                    colors={["#E53E3E", "#ECC94B", "#38A169"]}
                    percent={0.4}
                  />
                </Box>
              </Box>

              <Box rounded="xl" borderWidth={2}>
                <Stack spacing={3} p={[2, 2, 4]} mb={[3, 4, 0]} px={[2, 2, 3]}>
                  <BorderCenter minHeight={10}>
                    <Heading size="sm">Project Earnings</Heading>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>847 SLP</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Actual
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>1,008 SLP</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Target
                      </Box>
                    </Box>
                  </BorderCenter>

                  <BorderCenter minHeight={12}>
                    <Box>
                      <Box fontSize={"lg"}>161 SLP</Box>

                      <Box fontWeight={"bold"} fontSize="xs">
                        Variance
                      </Box>
                    </Box>
                  </BorderCenter>
                </Stack>

                <Box className="gauge" pb={2} maxWidth={280} m="0 auto">
                  <GaugeChart
                    arcWidth={0.3}
                    animateDuration={1000}
                    needleColor={useColorModeValue("#A0AEC0", "#718096")}
                    needleBaseColor={useColorModeValue("#A0AEC0", "#718096")}
                    textColor={useColorModeValue("blue.500", "white")}
                    colors={["#E53E3E", "#ECC94B", "#38A169"]}
                    percent={0.5}
                  />
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Grid
            templateColumns={[
              "repeat(100%)",
              "repeat(100%)",
              "calc(100% - 200px) 180px",
            ]}
            gap="20px"
          >
            <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
              <Heading size="md" mb={2}>
                Guild News
              </Heading>

              <UnorderedList>
                <ListItem>
                  500 SLP Bonus for the highest MMR by 3/12/22
                </ListItem>

                <ListItem>
                  3 Players currently in the top 300,000 and eligible for AXS
                  rewards.
                </ListItem>

                <ListItem>Requests for Axie changes due by 3/10/22.</ListItem>
              </UnorderedList>
            </Box>

            <Box rounded="xl" borderWidth={2} p={[4, 4, 5]} bg={bgBlur}>
              <Heading size="md" mb={2}>
                Markets
              </Heading>

              <UnorderedList>
                <ListItem>SLP: $0.02</ListItem>

                <ListItem>AXS: $49.50</ListItem>
              </UnorderedList>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  );
}

export default Page;

function BorderCenter({ children, minHeight }) {
  return (
    <Box height={minHeight || "40px"} rounded="lg">
      <Center height="100%">{children}</Center>
    </Box>
  );
}
