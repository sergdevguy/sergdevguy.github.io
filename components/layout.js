import Head from 'next/head'
import Link from 'next/link'
import navS from '../styles/nav.module.scss'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Todo app with love <3"
        />
      </Head>
      {/* <nav>
        <ul className={navS.nav__container}>
          <li className={navS.nav__li}>
            <Link href="/">
              <a>Главная</a>
            </Link>
          </li>
          <li className={navS.nav__li}>
            <Link href="/games/games">
              <a>Игрули</a>
            </Link>
          </li>
        </ul>
      </nav> */}
      <main>{children}</main>
    </div>
  )
}