import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function ProgramsPage() {
    return (
        <Layout>
            <Head>
                <title>Программы</title>
            </Head>
            <div className="links-container">
                <div>
                    <Link href="/programs/githubBattle">
                        <a>Github battle</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}