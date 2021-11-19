import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Tennis | ${seo.title}`
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
            Tennis
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
            Abteilungsleitung: <br />
            Dirk Appelt (0172/6531173) <br />
            <br />
            Dennis Lindmeyer (0179/2408138) <br />
            <br />
            E-Mail: <a href="mailto:tennis@appelt.co">tennis@appelt.co</a>
        </Text>
        <Text>
          Willkommen in der Tennisabteilung von Arminia Appelhülsen. <br />
          <br />
          Am Sportheim können aktuell ein Ascheplatz, Duschen, Toiletten und Umkleideräume benutzt werden. <br />
          * 2. Platz wegen Umbaumaßnahmen gesperrt. <br />
          <br />
          <br />
          Trainingszeiten <br />
          <br />
          <br />
          Jeden Dienstag - ab 17:00 Uhr (offener Tennitreff, bitter voher anrufen) <br />
          <br />
          Jeden Montag - 18:00 bis ca. 20:00 Uhr (Einzel oder Doppel Männer/Mixed) <br />
          <br />
          Jeden Freitag - 10:00 - 11:00 Uhr (Doppe Damen)
          <br />
          Aktuelle Vereinstermine bitter per E-Mail oder WhatsApp erfragen. <br />
          <br />
          <br />
          Vermietung Tennisplatz <br />
          Nichtvereinsmitglieder können in der laufenden Saison den Tennisplatz in der Arminia Appelhülsen Geschäftsstelle oder bei Diek Appelt buchen. <br />
          <br />
          Montag - Freitag:     08:00 - 14:00 Uhr   8,00€/Std.
          Montag - Freitag:     14:00 - 21:00 Uhr   10,00€/Std.
          Wochendende/Feiertag                      14,00€/Std.
          
        </Text>
      </Box>
    </>
  )
}

export default Home
