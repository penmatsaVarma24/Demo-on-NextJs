const AboutDetailedPage = ({params}) => {
    const {id} = params;
    return (
        <>
            <h1>About Detailed page</h1>
            <p>We are in About page - {id}</p>
        </>
    )
}

export default AboutDetailedPage;