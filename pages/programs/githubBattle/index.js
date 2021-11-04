import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

import App from '../../../components/programs/githubBattle/App';
import store from '../../../components/programs/githubBattle/app/store'
import { Provider } from 'react-redux'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Github battle</title>
            </Head>
            <Provider store={store}>
                <App />
            </Provider>
        </Layout>
    )
}