"use client"

import { useParams } from "next/navigation";

const ContactDetailedPage = () => {
    const details = useParams()
    console.log(details);
    return (
        <>
            <h1>Contact Detailed Page</h1>
        </>
    )
}

export default ContactDetailedPage;