import Head from 'next/head'
import App from '../../components/todo/App'

export default function GamesPage() {
    return (
        <div className="mt-5 mb-5">
            <Head>
                <title>Todo</title>
            </Head>
            <App />
        </div>
    )
}