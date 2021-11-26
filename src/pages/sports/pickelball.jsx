import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Pickelball | ${seo.title}`
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
              alt: "avatar bigheads",
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
            Pickelball
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
          Ansprechpartner: Martin Brink | Telefon: +49 157 39086828 <br />
          <br />
          Wann? <br />
          <br />
          Jeden Samstag von 13:00 Uhr bis 15:00 Uhr <br />
          <br/>
          <br/>
          Wo? <br/>
          <br/>
          Turnhalle | Appelhülsen Grunschule, Schulstraße 6/7, 48301 Nottuln <br/>
          <br/>
          Jetzt auch Outdoor (bei schönem Wetter bis 30.09.) <br/>
          <br/>
          Dienstags: 18:00 Uhr bis 22:00 Uhr <br/>
          - Abfahrt 17:30 Uhr | vom K+K Appelhülsen nach Hiddingsel <br/>
          <br/>
          <br/>
          Freitags: 17:00 Uhr bis 19:00 Uhr <br/>
          - Abfahrt 16:30 Uhr | vom K+K Appelhülsen nach Hiddingsel <br/>
          <br/>
        </Text>
        <Text>
          Was ist Pickelball? <br/>
          <br/>
          Pickelball ist eine in den USA enstandene Ballsportart. <br/>
          Pickelball besitzt Elemente wie Badminton, Tennis und Tischtennis. <br/>
          Es unterscheidet sich in der Geschwindigkeit des Balles, der Größe des Platzes un dem dynamischen Spielablauf. <br/>
        </Text>
      </Box>
      <Box 
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "center" }}
        fontSize="30px"
        >
        <ChakraLink>
          <a href="/sport">Zurück zum allen Sportarten</a>
        </ChakraLink>
        </Box>
    </>
  )
}

export default Home
