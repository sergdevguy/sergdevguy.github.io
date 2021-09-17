import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import App from '../../components/todo/App'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Todo</title>
            </Head>
            <App />
        </Layout>
    )
}