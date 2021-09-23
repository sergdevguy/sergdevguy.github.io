import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h1>Привет.<br/> Здесь всякое можно потыкать, посмотреть</h1>
        <div>
          <div>
            <Link href="/games">
              <a>Игрули</a>
            </Link>
          </div>
          <div>
            <Link href="/todo">
              <a>Todo app</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}