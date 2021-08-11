import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Приветс</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Привет</h1>
        <div>
          <div>
            <Link href="/somethingElse">
              <a>Что-нибудь</a>
            </Link>
          </div>
          <div>
            <Link href="/games/games">
              <a>Игрули</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}