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
        <main>
            <h1>Ooops.........page not found!</h1>
        </main>
    );
}
 
export default NotFound;