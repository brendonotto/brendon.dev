import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import DateComp from '../components/date'
import {getSortedPostsData} from '../lib/posts'

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
    <Layout className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex flex-col justify-center items-center flex-1">
        <h1 className="m-0 text-6l">
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-4xl mt-12">
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

      <footer className="w-full h-full border-t border-solid flex justify-center items-center">
        <div className="mt-8">
          &copy; {new Date().getFullYear()} Brendon Otto <br />
          Made with ♥ in MN
        </div>
      </footer>
    </Layout>
  )
}

