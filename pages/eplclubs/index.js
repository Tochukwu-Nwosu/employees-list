import Head from "next/head";
import Link from "next/link";
import style from "@/styles/List.module.css"

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
            <div>
                <h1>Epl Clubs</h1>
                <ul>
                    {employees.map(employee => {
                        return (
                            <div key={employee.id} className={style.list}>
                                <Link href={'/eplclubs/' + employee.id}>{employee.name}</Link>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}
 
export default Clubs;