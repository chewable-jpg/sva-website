import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/home.module.css'

import { NextSeo } from "next-seo"

import { seo, data } from "config"




export default function Home() {
  return (
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

      <Box>
      <Heading as="h1" fontSize="5xl" fontWeight="500" py="20">
        Sportarten
      </Heading>
    </Box>
  </Box>


        <div className={styles.grid}>
        <Link href="/sports/badminton">
          <a className={styles.card}>
            <h2>Badminton &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/fussball">
          <a className={styles.card}>
            <h2>Fussball &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/judo">
          <a className={styles.card}>
            <h2>Judo &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/kung-fu">
          <a className={styles.card}>
            <h2>Kung Fu &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/laufen">
          <a className={styles.card}>
            <h2>Laufen &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/leichtathletik">
          <a className={styles.card}>
            <h2>Leichtathletik &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/pickelball">
          <a className={styles.card}>
            <h2>Pickelball &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/tennis">
          <a className={styles.card}>
            <h2>Tennis &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/tischtennis">
          <a className={styles.card}>
            <h2>Tischtennis &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/turnen">
          <a className={styles.card}>
            <h2>Turnen &rarr;</h2>
          </a>
        </Link>

        <Link href="/sports/volleyball">
          <a className={styles.card}>
            <h2>Volleyball &rarr;</h2>
          </a>
        </Link>
        </div>
      </main>
    </div>
  )
}