import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { Link as ChakraLink } from "@chakra-ui/react"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Laufen | ${seo.title}`
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
            Laufen
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
            Leitung: Manfred Feldmann | Telefon: 02509-416 | E-Mail <a href="mailto:manfred.feldmann@t-online.de">manfred.feldmann@t-online.de</a> <br />
            <br />
            
        </Text>
        <Text>
          Der offene Lauftreff <br />
          Ein regelmäßges Angebot für Jedermann/-frau. <br />
          <br />
          Der Lauftreff des SV Arminia Appelhülsen findet diesntags und donnerstags jeweils um 18:00 Uhr statt. <br />
          Treffpunkt ist das Bürgerzentrum. <br />
          <br />
          Wer in dern Dunkelheit am Abend nicht alleine laufen mag und bereits 5 km und mehr ohne Pause laufen kann, ist herzlich Willkommen, mit uns in Gemeinschaft run um Appelhülsen zu laufen. <br />
          Wer mitlaufen möchte, sollte unbedingt reflektierende helle Laufkleidung tragen und möglichst mit einer Lauflampe bzw. kleiner Taschenlampe ausgestattet sein. <br />
          Das Laufen in der Gruppe in der Dunkelheit ist so entspannter, unterhaltsamer und vor allem sicherer. <br />
          <br />
          <br />
          Neugikeiten werden sie in unseren Blog posts finden.
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
