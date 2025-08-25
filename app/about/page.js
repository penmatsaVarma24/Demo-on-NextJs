import Link from "next/link";

const AboutPage = () => {
    return (
        <>
            <h1>About page</h1>
            <p>We are in about page</p>
            <ul>
                <li><Link href="/about/1">About 1</Link></li>
                <li><Link href="/about/2">About 2</Link></li>
                <li><Link href="/about/3">About 3</Link></li>
            </ul>
        </>
    )
}

export default AboutPage;