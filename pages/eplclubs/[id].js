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
        <div>
            <h1>Employee Details</h1>
            <h2>{employee.name}</h2>
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
        </div>
    );
}
 
export default Details;