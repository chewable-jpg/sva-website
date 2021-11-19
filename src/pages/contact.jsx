import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import Link from "next/link"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Kontakt | ${seo.title}`
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
            Kontakt
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
          Haben sie Fragen, Wünsche oder Anregungen? <br />
          Bitte nehmen Sie Kontakt mit uns auf, wir helfe ihnen gerne weiter. <br />
          <br />
          SV Arminia Appelhülsen e.V. Münsterstr. 19 48301 Nottuln <br/>
          Telefon: +49 2509 8778 <br/>
          Fax: +49 2509 993325 <br/>
          E-Mail: <a href="mailto:info@svarminiaappelhuelsen.de">info@svarminiaappelhuelsen.de</a> <br />
          <br />
          Die Ansprechpartner für einzelne Sportarten finde sie <br /> <Link href="/sport"> <button><a target="_blank">hier.</a></button> </Link> <br /> <br />
        </Text>
      </Box>
    </>
  )
}

export default Home
