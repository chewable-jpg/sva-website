import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/home.module.css'
import { Container, Col, Row, Form } from "react-bootstrap";

import { NextSeo } from "next-seo"

import { seo, data } from "config"




export default function Home() {
  return (

    
    <div className={styles.container}>
      <Head>
        <title>Sportarten | SVA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Sportarten
        </h1>


        <div className={styles.grid}>




        </div>

        <Container>
  <Row>
    <Col><Link href="/sports/badminton">
          <a className={styles.card}>
            <h2>Badminton &rarr;</h2>
          </a>
        </Link></Col>

    <Col>        <Link href="/sports/fussball">
          <a className={styles.card}>
            <h2>Fussball &rarr;</h2>
          </a>
        </Link></Col>

    <Col>        <Link href="/sports/judo">
          <a className={styles.card}>
            <h2>Judo &rarr;</h2>
          </a>
        </Link></Col>
        <Col>
        <Link href="/sports/kung-fu">
          <a className={styles.card}>
            <h2>Kung Fu &rarr;</h2>
          </a>
        </Link>
        </Col>
  </Row>

  <Row>
    <Col>
    <Link href="/sports/laufen">
          <a className={styles.card}>
            <h2>Laufen &rarr;</h2>
          </a>
        </Link>
    </Col>

    <Col>
    <Link href="/sports/leichtathletik">
          <a className={styles.card}>
            <h2>Leichtathletik &rarr;</h2>
          </a>
        </Link>
    </Col>

    <Col>
    <Link href="/sports/pickelball">
          <a className={styles.card}>
            <h2>Pickelball &rarr;</h2>
          </a>
        </Link>
    </Col>

    <Col>
    <Link href="/sports/tennis">
          <a className={styles.card}>
            <h2>Tennis &rarr;</h2>
          </a>
        </Link>
    </Col>
  </Row>

  <Row>

<Col>
<Link href="/sports/tischtennis">
          <a className={styles.card}>
            <h2>Tischtennis &rarr;</h2>
          </a>
        </Link>
</Col>

<Col>
<Link href="/sports/turnen">
          <a className={styles.card}>
            <h2>Turnen &rarr;</h2>
          </a>
        </Link>
</Col>

<Col>
<Link href="/sports/volleyball">
          <a className={styles.card}>
            <h2>Volleyball &rarr;</h2>
          </a>
        </Link>
</Col>

  </Row>

</Container>
      </main>
    </div>
  )
}