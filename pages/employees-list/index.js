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

const Employees = ({ employees }) => {
    return ( 
        <>
            <Head>
                <title>Epl Clubs - List</title>
            </Head>
            <div>
                <h1>Employees List</h1>
                <div className={style.container}>
                    {employees.map(employee => {
                        return (
                            <div key={employee.id} className={style.listContainer}>
                                <Link href={'/employees-list/' + employee.id} className={style.list}>{employee.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
 
export default Employees;