import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Tischtennis | ${seo.title}`
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
            Tischtennis
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
            Andreas Schabert: Abteilungsleitung | Telefon: 0163 9721784 | E-Mail: <a href="mailto:a.schabert@t-online.de">a.schabert@t-online.de</a> <br /> <br />
            Leif Dasberg: Stellv. Abteilungsleitung | Telefon: 0175 7890836 | E-Mail: <a href="witchblade@freenet.de">witchblade@freenet.de</a> <br /> <br />
            Michael Engbers: Pressewart | Telefon: 0157 39045095 | E-Mail: <a href="m.engbers@gmx.de">m.engbers@gmx.de</a> <br /> <br />
            Mechthild Riegelmeyer: Schulsportbeauftragte | Telefon: 0157 30763715 | E-Mail: <a href="tt-mecki@web.de">tt-mecki@web.de</a> <br /> <br /> <br />
            <br />
        </Text>
        <Text>
          Trainingsbetrieb und Meisterschaftsspiele <br />
          <br />
          <br />
          Seniorentraining (Damen und Herren ab 16 Jahr) <br />
          <br />
          Montag: 20:00 - 22:00 Uhr <br />
          Mittwoch: 19:30 - 22:00 Uhr <br />
          Freitag: 20:00 - 22:00 Uhr in der Gymnastikhalle <br />
          <br />
          <br />
          Kinder- und Jugendtraining <br />
          Montag: 18:00 - 20:00 Uhr in der Turnhalle <br />
          Freitag: 15:00 - 16:30 Uhr in der Turnhalle (6 bis 11 Jahre) <br />
          Freitag: 16:20 - 17:50 Uhr in der Turnhalle (12 bis 17 Jahre) <br />
          <br />
          <br />
          Leitung jeweils (teilw. o. abw.): <br />
          Mecki Riegelmeyer <br />
          Andread Schabert <br />
          <br />
          <br />
          Meisterschaftsspiele: Samstags ab 15:00 Uhr und Sonntag 09:30 - 13:00 Uhr <br />
          Nur in den Wintermonaten (von Septermber - März) <br />
          <br />

          Für weiter Spiele Infos besuchen sie: <a target="_blank" href="https://wttv.click-tt.de/cgi-bin/WebObjects/nuLigaTTDE.woa/wa/home">https://wttv.click-tt.de/cgi-bin/WebObjects/nuLigaTTDE.woa/wa/home</a>
        </Text>
      </Box>
    </>
  )
}

export default Home
