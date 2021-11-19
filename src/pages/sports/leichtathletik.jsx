import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Leichtathletik | ${seo.title}`
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
            Leichtathletik
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
            Leitung: Dirk Randhan | Telefon: 49 2509 9935932 | E-Mail: <a href="malto:randhahndirk@hotmail.com">randhahndirk@hotmail.com</a> <br />
            <br />
        </Text>
        <Text>
          Leichtathletik für Schüler und Jugendliche <br />
          <br />
          <br />
          Wer kann mit machen? <br />
          <br />
          Mitmachen können alle Kinder ab dem ersten Schuljahr <br />
          <br />
          <br />
          Wann? <br />
          <br />
          Jeden Montag ab 17:00 bis 18:00 Uhr <br />
          Von den Osterferien bs zu den Herbstferien draußen <br />
          Nach den Herbstferien bis zu den Osterferien in der Halle <br />
          <br />
          <br />
          Was brauche ich?
          <br />
          Normale Sportbekleidung und feste Sportschuhe für den Sportplatz <br />
          und noch fest Hallen- oder Gymnastikschuhe für die Halle. <br />
          <br />
          <br />
          Was ist unser Ziel <br />
          <br />
          Das jeder das Sportabzeichen erlangt und natürlich Spaß an Bewegung hat.

        </Text>
      </Box>
    </>
  )
}

export default Home
