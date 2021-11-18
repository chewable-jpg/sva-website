import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

import styles from "./styles/logo.css"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a classname="logo" fontSize="2rem" fontWeight="700">
        SVA
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
