import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import Date from '../components/date'
import styles from '../styles/Home.module.css'
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
    <Layout className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>

        <div className={styles.grid}>
          {allPostsData.map(({ id, date, title }) => {
            return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Brendon Otto <br />
        Made with ♥ in MN
      </footer>
    </Layout>
  )
}

