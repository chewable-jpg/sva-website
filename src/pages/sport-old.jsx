import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextLink from "next/link"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Sportarten | ${seo.title}`
  const description = seo.description

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "yeah",
            },
          ],
        }}
      />

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <Box>
          <Heading as="h1" fontSize="5xl" fontWeight="500" py="20">
            Unsere Sportarten
          </Heading>
        </Box>
      </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="30"
      >
        <Text>
        <NextLink href="/sports/badminton">
              <a>Badminton</a>
            </NextLink>

        <NextLink href="/sports/fussball">
              <a>Fussball</a>
            </NextLink>

            <NextLink href="/sports/judo">
              <a>Judo</a>
            </NextLink>

            <NextLink href="/sports/kung-fu">
              <a>Kung Fu</a>
            </NextLink>

            <NextLink href="/sports/laufen">
              <a>Laufen</a>
            </NextLink>

            <NextLink href="/sports/leichtathletik">
              <a>Leichtathletik</a>
            </NextLink>

            <NextLink href="/sports/pickelball">
              <a>Pickelball</a>
            </NextLink>

            <NextLink href="/sports/tennis">
              <a>Tennis</a>
            </NextLink>

            <NextLink href="/sports/tischtennis">
              <a>Tischtennis</a>
            </NextLink>

            <NextLink href="/sports/turnen">
              <a>Turnen</a>
            </NextLink>

            <NextLink href="/sports/volleyball">
              <a>volleyball</a>
            </NextLink>
        </Text>
      </Box>
    </>
  )
}

export default Home
