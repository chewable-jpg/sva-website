import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Vereinskollektion | ${seo.title}`
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
            Vereinskollektion
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
        Liebe Arminen, <br />
        <br />

in unserem schönen Stadtteil Appelhülsen bedeutet Sport wie selbstverständlich Arminia. <br />

Mit knapp 1000 Mitgliedern nähern wir uns dem 100jährigen Vereinsjubiläums im nächsten Jahr. <br />

Dies haben wir zum Anlass genommen, eine neue Vereinskollektion zu erstellen. <br />

In Zusammenarbeit mit Sport Freckmann in Nottuln möchten wir euch die neue Vereinskollektion präsentieren, die einen einheitlichen Auftritt ermöglicht und die Zugehörigkeit zur Arminia dokumentiert. <br />

Alle Mitglieder können bis zum 31.13.2021 über Ihren Abteilungsleiter/Trainer ihre Bestellung aufgeben. <br />

Zusammen mit der Bestellung ist auch der Rechnungsbetrag zu entrichten. <br />

Der Abteilungsleiter/Trainer leitet dann eure Bestellung an die Geschäftsstelle weiter und wir werden dann anschließend die Sammelbestellung bei Freckmann einreichen. <br />

Zur Ermittlung der "richtigen" Größe haben wir Musterstücke in jeder Größe von Freckmann erhalten und liegen zur Anprobe in der Geschäftsstelle. <br />

Wir rechnen damit, dass die Bestellungen dann am Ende der Sommerferien (August 2018) an die Abteilungen rausgegeben werden können. <br />

Wer sich nicht bis zum 27.06.2018 entscheiden kann, kann auch zu einem späteren Zeitpunkt die Bestellung bei Freckmann persönlich einreichen. <br />

Wir hoffen, eine gute, qualitative und kostengünstige Auswahl getroffen zu haben und wünschen viel Spaß mit der neuen Vereinskollektion und natürlich jede Menge Freude beim Sport! <br />
<br />

Für den Vorstand
SV Arminia Appelhülsen 1919 e. V.
herzlichst und mit sportlichen Grüßen
René Pfaff (Jugendobmann Fussball) 
        </Text>
      </Box>
    </>
  )
}

export default Home
