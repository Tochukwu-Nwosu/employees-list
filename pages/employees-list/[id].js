import Head from "next/head";

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(employee => {
        return {
            params: { id: employee.id.toString() }
        }
    })
    return {
        paths,
        fallback: false   // if user enters url with params-id that does not exist
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {
            employee: data
        }
    }
}

const Details = ({ employee }) => {
    return (
        <>
            <Head>
                <title>Employees List - List</title>
            </Head>
            <div className="employee-container">
                <h2>{employee.name}</h2>
                <p>Email: {employee.email}</p>
                <p>Phone: {employee.phone}</p>
            </div>
        </>
    );
}
 
export default Details;