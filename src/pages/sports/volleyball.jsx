import { Box, Heading, Text } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { Link as ChakraLink } from "@chakra-ui/react"

import { seo, } from "config"

const Home = () => {
  const title = `Volleyball | ${seo.title}`
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
            Volleyball
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
          Abteilungsleiter/in: Maren Stebel <br />
          <br />
          Kontakt:{" "}
          <a href="mailto:volleyballappelhuelsen@gmail.com">
            volleyballappelhuelsen@gmail.com
          </a>
          <br />
          <br />
          <br />
        </Text>
        <Text>
          1. Damenmannaschaft <br />
          <br />
          Trainingszeiten:  <br/>
          Montag: 20:00 - 22:00 Uhr <br/>
          Dienstag: 20:00 - 22:00 Uhr <br/>
          Donnerstag: 19:00 - 21:00 Uhr (in Bösensell) <br/>
          <br/>
          Leitung: Sebastian Stebel | Telefon: 0173 7241750 <br/>
          <br/>
          <br/>
          2. Damenmannaschaft <br/>
          <br/>
          Trainingszeiten: <br/>
          Dienstag: 18:30 - 20:00 Uhr <br/>
          Donnerstag: 18:30 - 20:00 Uhr <br/>
          <br/>
          Leitung Marc Fritsch | Telefon: 02509 9936481 <br/>
          <br/>
          <br/>
          <br/>
          Jugend <br/>
          <br/>
          Trainingszeiten: <br/>
          <br/>
          Mitwoch: 18:00 - 19:30 Uhr <br/>
          Donnerstag: 17:00 - 18:30 Uhr <br/>
          <br/>
          Leitung: Maren Stebel | Telefon: 0173 7241719
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
