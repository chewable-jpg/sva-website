import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"

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
              url: `https://sva.vercel.app/logo.svg`,
              width: "389px",
              height: "87px",
              alt: "Header image",
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
        <NextImage
          src="/logo.svg"
          width="200"
          height="200"
          alt="logo"
          placeholder="blur"
          blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
          priority
        />
        </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="20">
            Willkommen auf der Homepage des{" "}
            <Heading as="h1" fontSize="3xl" fontWeight="600">
              SV Arminia Appelhülsen e.V.{" "}
            </Heading>
            schauen sie sich ruhig um.
          </Heading>
        </Box>
      </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="10"
      >
        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
          >
            
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
            >
                            <NextImage
                src={item.image}
                width="1200"
                height="800"
                alt={item.title}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>

            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="8">{item.description}</Text>
            </Box>
            <div className="mapouter"><div className="gmap_canvas"><iframe width={1200} height={800} id="gmap_canvas" src="https://maps.google.com/maps?q=51.896013,%207.422888&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:800px;width:1200px;}" }} /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:800px;width:1200px;}" }} /></div></div>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Home
