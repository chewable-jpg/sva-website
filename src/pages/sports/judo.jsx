import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Judo | ${seo.title}`
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
            Judo
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
        Abteilungsleiter: Bastian Haas <br />

Telefon: 0152-58932510 | E-Mail: judo-appelhuelsen@web.de <br /><br />
        </Text>
        <Text>
        Judo (柔道/ japanisch) heißt übersetzt „der sanfte Weg“. <br /> <br />
Gelehrt wird wie wir unseren „Gegner“ durch Nachgeben besiegen können. <br />
Geschicklichkeit und präzise Techniken auf der einen Seite und der höchstmögliche Gebrauch von Körper und Geist auf der anderen Seite unterscheidet die Sportart Judo von anderen Zweikampsportarten. <br />

Verschiedene Gürtelfarben weisen auf den jeweiligen Könnensstand hin. Erfolge im Training und Wettkampf motivieren die Kinder zusätzlich und stärken sie in ihrer Persönlichkeitsentwicklung. <br />

Warum Judo für Kinder? <br />
Das spielerische Kämpfen, auch als Rangeln und Raufen zu verstehen, ist Bestandteil der kindlichen Entwicklung. <br />
Das Ausleben des eigenen Bewegungsdranges spielt eine ebenso wichtige Rolle wie das Sammeln von Erfahrungen mit dem eigenen Körper. <br /> <br />

Haben wir Ihr Interesse geweckt? <br />
Dann laden wir Sie und Ihr Kind (ab dem Grundschulalter) herzlich zu einem Probetraining ein. <br /> <br />

Trainingszeiten: <br />
Judo für Anfänger und Fortgeschrittene (ab 6 Jahren) <br />
Dienstags von 17.00 bis 18.30 Uhr in der Turnhalle Appelhülsen. <br /> <br /> <br />

 

Trainer / Abteilungsleiter  <br />
Bastian Haas <br />
Tel.: 0152-58932510 <br /> 
Mail: judo-appelhuelsen@web.de <br /><br />


Wir sind sicher, dass es Ihnen und Ihrem Kind gefallen wird. <br />
Wir freuen uns auf Euch!
        </Text>
      </Box>
    </>
  )
}

export default Home
