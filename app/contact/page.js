import Link from "next/link";

const ContactPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold line">Contact page</h1>
            <p>We are in contact page</p>
            <ul>
                <li><Link href="/contact/1">Contact 1</Link></li>
                <li><Link href="/contact/2/title2">Contact 2</Link></li>
                <li><Link href="/contact/3/title3/19082025">Contact 2</Link></li>
            </ul>
        </>
    )
}

export default ContactPage;