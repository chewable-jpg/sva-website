import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")

  const isOdd = (num) => num % 2

  const title = `Home | ${seo.title}`
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
          SV Arminia Appelhülsen e.V. Münsterstr. 19 48301 Nottuln <br/>
          Telefon: +49 2509 8778 <br/>
          Fax: +49 2509 993325 <br/>
          E-Mail: <a color="#FE1919" href="mailto:info@svarminiaappelhuelsen.de">info@svarminiaappelhuelsen.de</a> 
        </Text>
      </Box>
    </>
  )
}

export default Home
