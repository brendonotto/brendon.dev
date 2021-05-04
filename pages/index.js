import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from 'components/layout'
import DateComp from 'components/date'
import Footer from 'components/Footer'
import {getSortedPostsData} from 'lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex flex-col justify-center items-center flex-1">
        <h1 className="m-0 text-6l">
        </h1>

        <div className="flex flex-col items-center justify-center flex-wrap max-w-4xl mt-12">
          {allPostsData.map(({ id, date, title }) => {
            return (
            <li key={id} className="list-none">
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <DateComp dateString={date} />
              </small>
            </li>
            )
          })}
        </div>
      </main>

      <Footer />
    </Layout>
  )
}

