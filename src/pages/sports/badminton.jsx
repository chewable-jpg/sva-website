import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { Link as ChakraLink } from "@chakra-ui/react"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Badminton | ${seo.title}`
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
            Badminton
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
            Leitung: Jens Wiegers | Telefon: +49 162 76532162 <br /> <br />

        </Text>
        <Text>
          Hobby-Training für Erwachsene <br />
          <br />
          
          Badminton wird im SVA als Freizeitsport für Erwachsener (18+) angeboten. <br />
<br />
Die Hobbysportler nehmen an keinerlei Turnieren teil. <br />
Bewegung, Fitness und Spaß stehen hier im Vordergrund. Neue Spieler sind jederzeit willkommen. <br />
<br />
Freitags von 19:30 Uhr bis 21.00 Uhr (große Sporthalle).</Text>
      </Box>
      <Box 
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "center" }}
        >
        <ChakraLink>
          <a href="/blog">Zurück zum allen Sportarten</a>
        </ChakraLink>
        </Box>
    </>
  )
}

export default Home
