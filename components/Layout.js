import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  HStack,
  IconButton,
  useColorMode,
  Link as ChakraLink,
  MenuList,
  Menu,
  MenuButton,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { BiChevronDown } from "react-icons/bi";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      rounded="full"
      _active={{ bg: "none" }}
      icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  );
};

function Layout({ children, title }) {
  const router = useRouter();

  const { colorMode } = useColorMode();

  let bgImg = colorMode === "light" ? "/world-map-light.svg" : "/world-map.svg";
  let bgBlur = colorMode === "light" ? "#ffffff99" : "#00000099";

  function navigation() {
    // if ( router.pathname != "/" ) {
    return (
      <Box
        display="flex"
        justifyContent={"space-between"}
        zIndex={22}
        position="relative"
      >
        <HStack mb={4} mt={-2}>
          <Link href="/">
            <IconButton rounded="full" fontSize="lg">
              <AiOutlineHome />
            </IconButton>
          </Link>

          <ThemeToggle />

          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              rightIcon={<BiChevronDown style={{ fontSize: 20 }} />}
            >
              Page
            </MenuButton>

            <MenuList>
              <Link
                href="/performance"
                style={{ display: "block", height: "100%", width: "100%" }}
              >
                <MenuItem>Performance</MenuItem>
              </Link>

              <Link href="/pre-game">
                <MenuItem>Pre-Game</MenuItem>
              </Link>

              <Link href="/post-game">
                <MenuItem>Post-Game</MenuItem>
              </Link>

              <Link href="/deep-dive">
                <MenuItem>Deep Dive</MenuItem>
              </Link>

              <Link href="/guild">
                <MenuItem>Guild</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>

        <Box pr={2} fontSize="lg">
          <ChakraLink href="#" rounded="md">
            {new Date().toLocaleDateString()}
          </ChakraLink>
        </Box>
      </Box>
    );
    // }
  }
  return (
    <Box>
      <Head>
        <title>{title || "Titan"}</title>
      </Head>

      <Box position="relative" height="100vh" width="100vw">
        <Image src={bgImg} alt="background" layout="fill" objectFit="cover" />

        <Box
          position="absolute"
          height="100%"
          width="100vw"
          top={0}
          left={0}
          zIndex={1}
          background={bgBlur}
          backdropFilter={"blur(2px)"}
        ></Box>
        <Box
          as="main"
          p={[4, 6, 6, 6, 10]}
          maxWidth={1200}
          m="0 auto"
          position={"relative"}
          zIndex={2}
          height="100vh"
          overflow="scroll"
        >
          {navigation()}

          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
