import { Box, Link as Text } from "@chakra-ui/react"
import NextLink from "next/link"

import { MAX_WIDTH } from "config"

const Footer = () => (
  <>
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="10"></Box>
        <Box py="2">
          <NextLink href="/contact">
            <Text>
              Öffnungszeiten: Dienstag: 17:00 - 18:00 Uhr | Mittwoch: 17:00 -
              18:00 Uhr
            </Text>
          </NextLink>
        </Box>
      </Box>
    </Box>
  </>
)

export default Footer
