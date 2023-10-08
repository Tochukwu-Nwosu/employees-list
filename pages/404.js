import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Epl Clubs - Page Not Found</title>
            </Head>
            <main>
                <h1>Ooops.........page not found!</h1>
            </main>
        </>
    );
}
 
export default NotFound;