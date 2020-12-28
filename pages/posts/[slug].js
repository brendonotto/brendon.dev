import Layout from '../../components/layout'

export default function Post({postData}) {
    return (
        <Layout>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}