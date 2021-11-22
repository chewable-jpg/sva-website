import { Box, Heading, Text } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo } from "config"

const Home = () => {

  const title = `Turnen | ${seo.title}`
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
            Turnen
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
          Leitung: Beate Haiber | Telefon: 02509 995248 <br />
          <br />
        </Text>
        <Text>
          <br />
          Der SVA bietet Gymnastik online von Montag bis Freitag an: <br />
          <br />
          Montag: 18:00 - 19:00 Uhr "ganzheitliche Fitness" <br/>
          Dienstag: 19:00 - 20:15 Uhr "Fit for Life" <br/>
          Mittowch: 18:00 - 19:00 Uhr "Gymnastik" <br/>
          Donnerstag: 19:30 - 20:30 Uhr "Rückenfit" <br/>
          <br/>
          <br/>

          Eltern-Kind-Turnen für Eltern mit Kindern ab 1 Jahr und deren Kinder <br/>
          (*Die Kinder sollten laufen können) <br/>
          <br/>
          Dienstag: 16:00 - 16:45 Uhr <br/>
          Leitung: Martina Hensmann <br/>
          <br/>
          Donnerstag: 16:00 - 17:00 Uhr <br/>
          Leitung: NN <br/>
          <br/>
          Ort: Turnhalle der Grundschule <br/>
          <br/>
          <br/>
          Turnen für Kinder im Vorschulalter (ab 4 Jahren bis zur Einschulung) <br/>
          <br/>





        </Text>
      </Box>
    </>
  )
}

export default Home
