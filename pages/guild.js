import Image from "next/image";
import Link from "next/link";
import { useTable } from 'react-table'
import styles from "@emotion/styled";
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
  HStack,
  Divider, 
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";

import { useMemo } from "react";


const Styles = styles.div`

  table {
    border-spacing: 0;
    // border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: center;
      // border-bottom: 1px solid black;
      // border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      font-size: 16px;
    }
  }
`;

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
      hours: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      rate: 60,
      game: 6,
      total: 600,
      yield: 65,
    },

    {
      name: "Alvin",
      image: "/players/person-2.png",
      overall: "A",
      effort: "A",
      outcome: "A",
      hours: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      rate: 58,
      game: 6,
      total: 580,
      yield: 60,
    },

    {
      name: "Jessica",
      image: "/players/person-3.png",
      overall: "B",
      effort: "A",
      outcome: "B",
      hours: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      rate: 53,
      game: 5,
      total: 530,
      yield: 55,
    },

    {
      name: "Christopher",
      image: "/players/person-4.png",
      overall: "B",
      effort: "B",
      outcome: "B",
      hours: 4,
      adherance: "B",
      attitude: "B",
      utilization: 80,
      rate: 52,
      game: 5,
      total: 416,
      yield: 50,
    },

    {
      name: "Charlotte",
      image: "/players/person-6.png",
      overall: "B",
      effort: "A",
      outcome: "C",
      hours: 5,
      adherance: "A",
      attitude: "A",
      utilization: 100,
      rate: 48,
      game: 4,
      total: 480,
      yield: 45,
    },

    {
      name: "Jason",
      image: "/players/person-5.png",
      overall: "B",
      effort: "C",
      outcome: "A",
      hours: 2,
      adherance: "C",
      attitude: "C",
      utilization: 70,
      rate: 55,
      game: 5,
      total: 385,
      yield: 50,
    },

    {
      name: "Angel",
      image: "/players/person-7.png",
      overall: "C",
      effort: "C",
      outcome: "C",
      hours: 0,
      adherance: "C",
      attitude: "C",
      utilization: 50,
      rate: 55,
      game: 3,
      total: 220,
      yield: 30,
    },

    {
      name: "Alberto",
      image: "/players/person-8.png",
      overall: "C",
      effort: "B",
      outcome: "C",
      hours: 3,
      adherance: "B",
      attitude: "B",
      utilization: 80,
      rate: 45,
      game: 3,
      total: 360,
      yield: 30,
    },

    {
      name: "Eugene",
      image: "/players/person-9.png",
      overall: "C",
      effort: "C",
      outcome: "C",
      hours: 1,
      adherance: "C",
      attitude: "C",
      utilization: 60,
      rate: 42,
      game: 3,
      total: 252,
      yield: 30,
    },
  ];




  const columns = useMemo(
    () => [

      {
        Header: 'Player',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },

          {
            Header: 'Image',
            accessor: 'image',
          },

        ],
      },

      {
        Header: 'Summary Scores',
        columns: [
          {
            Header: 'Overall',
            accessor: 'overall',
          },

          {
            Header: 'Effort',
            accessor: 'effort',
          },

          {
            Header: 'Outcome',
            accessor: 'outcome',
          },
        ],
      },
      {
        Header: 'Behavioural/Effort Metrics',
        columns: [
          {
            Header: 'Training Hours',
            accessor: 'hours',
          },
          {
            Header: 'Coaching Adherance',
            accessor: 'adherance',
          },
          {
            Header: 'Attitude',
            accessor: 'attitude',
          },
          {
            Header: 'Utilization',
            accessor: 'utilization',
          },
        ],
      },

      {
        Header: 'Outcome Metrics',
        columns: [
          {
            Header: 'Win Rate',
            accessor: 'rate',
          },
          {
            Header: 'Game Earnings',
            accessor: 'game',
          },
          {
            Header: 'Total Earnings',
            accessor: 'total',
          },
          {
            Header: 'Yield',
            accessor: 'yield',
          },
        ],
      },
    ],
    []
  )


  const data = useMemo(() => playerList, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })


  return (
    <Layout title="Guild">
      <Styles>

      <Stack spacing={4}>

        <Box bg={ bgBlur } p={5} rounded="xl" borderWidth={2}>
        <table {...getTableProps()} style={{width: "100%"}}>
          <thead>
            {headerGroups.map(headerGroup => {
              
              if (headerGroup.headers.length < 10 ) {
                return  (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Box as="th" fontSize="lg" {...column.getHeaderProps()}>{column.render('Header')}</Box>
                ))}
              </tr>
            ) 
              }
              return  (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Box as="th" fontSize="sm" {...column.getHeaderProps()}>{column.render('Header')}</Box>
                ))}
              </tr>
            )
            }
            )}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <Box as="tr" {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    if (cell.column.Header === 'Image') {
                      return <td {...cell.getCellProps()}>
                        <Box
                          rounded="xl"
                          height={[90, 90, ]}
                          width={[90, 90, ]}
                          position="relative"
                          overflow="hidden"
                        >
                          <Image src={cell.value} layout="fill" objectFit="cover" />
                        </Box>
                      </td>
                    } else if (cell.column.Header === 'Yield') {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}%</td>
                    } else if (cell.column.Header === 'Game Earnings') {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')} SLP</td>
                    } else if (cell.column.Header === 'Total Earnings') {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')} SLP</td>
                    } else {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    }

                  })}


                </Box>
              )
            })}
          </tbody>
        </table>
</Box>

        {playerList.map((el, idx) => {
          return (
            <Box display="none" key={"p" + idx} bg={bgBlur} borderWidth={2} rounded="xl" p={[4, 4, 4, 5]}>
              <HStack gap={[5, 5, 8]} justifyContent="left" wrap="wrap">
                <Box >
                  <Heading size="sm" pl={2} mb={1}>
                    {el.name}
                  </Heading>

                  <Box
                    rounded="xl"
                    height={[90, 90, 120]}
                    width={[90, 90, 120]}
                    position="relative"
                    overflow="hidden"
                  >
                    <Image src={el.image} layout="fill" objectFit="cover" />
                  </Box>


                </Box>


                <Box >

                  <Heading size="sm" mb={4} >
                    Summary Scores
                  </Heading>

                  <HStack spacing={6} >
                    <Box textAlign={"center"}>
                      <Text fontSize="2xl">{el.overall}</Text>
                      <Text fontSize="xs" fontWeight="bold">
                        Overall
                      </Text>
                    </Box>

                    <Box textAlign={"center"}>
                      <Text fontSize="2xl">{el.effort}</Text>
                      <Text fontSize="xs" fontWeight="bold">
                        Effort
                      </Text>
                    </Box>

                    <Box textAlign={"center"}>
                      <Text fontSize="2xl">{el.outcome}</Text>
                      <Text fontSize="xs" fontWeight="bold">
                        Outcome
                      </Text>
                    </Box>
                  </HStack>

                </Box>

                <Box >

                  <Heading size="sm" mb={4}>
                    Behavioural/Effort Metrics
                  </Heading>


                  <HStack spacing={6} >
                    <Box textAlign="center" >
                      <Text fontSize="2xl">{el.training}</Text>
                      <Text fontSize="xs" fontWeight="bold" maxWidth={20}>
                        Training Hours
                      </Text>
                    </Box>


                    <Box textAlign="center">
                      <Text fontSize="2xl">{el.adherance}</Text>
                      <Text fontSize="xs" fontWeight="bold">
                        Coaching Adherance
                      </Text>
                    </Box>

                    <Box textAlign="center">
                      <Text fontSize="2xl">{el.attitude}</Text>
                      <Text fontSize="xs" fontWeight="bold">
                        Attitude
                      </Text>
                    </Box>

                    <Box textAlign="center">
                      <Text fontSize="2xl">{el.utilization}</Text>
                      <Text fontSize="xs" fontWeight="bold">
                        Utilization
                      </Text>
                    </Box>
                  </HStack>

                </Box>



                <Box flex={[4]} >

                  <Box  >

                    <Heading size="sm" mb={4} >
                      Outcome Metrics
                    </Heading>
                    <HStack >
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
                    </HStack>
                  </Box>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </Stack>
      </Styles>
    </Layout>
  );
}

export default Page;
