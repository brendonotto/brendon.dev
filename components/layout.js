import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const name = "Brendon Otto"
export const siteTitle = "Brendon's Blog"

export default function Layout({ children, home }) {
    return (
        <div className="max-w-xl py-0 px-4 my-12 mx-auto mb-24">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="flex flex-col items-center">
                {home ? (
                    <>
                        <Image
                            src="/images/profile.jpg"
                            height={157}
                            width={96}
                            className={`w-32 h-32 ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/profile.jpg"
                                        className={`w-24 h-24 ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )
                }
            </header>
            <main>{children}</main>
            {!home && (
                <div className="mt-12 mx-0 mb-0">
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}