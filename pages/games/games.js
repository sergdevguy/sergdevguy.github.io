import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Игрули</title>
            </Head>
            <h1>Заголовок</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}