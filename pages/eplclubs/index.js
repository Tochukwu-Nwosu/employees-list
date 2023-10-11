import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {
            employees: data
        }
    }
}

const Clubs = ({ employees }) => {
    return ( 
        <>
            <Head>
                <title>Epl Clubs - List</title>
            </Head>
            <main>
                <h1>Epl Clubs</h1>
                <ul>
                    {employees.map(employee => {
                        return (
                            <div key={employee.id}>
                                <Link href={'/eplclubs/' + employee.id}>{employee.name}</Link>
                            </div>
                        )
                    })}
                </ul>
            </main>
        </>
    );
}
 
export default Clubs;