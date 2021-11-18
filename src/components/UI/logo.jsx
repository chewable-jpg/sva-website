import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700" color="#FE1919">
        SVA
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
