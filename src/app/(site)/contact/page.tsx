import Breadcrumb from '@/app/components/Common/Breadcrumb'
import Contact from '@/app/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Desgy Solutions',
}

const ContactPage = () => {
    return (
        <>
            <Breadcrumb pageName='Contact Us' />
            <Contact />
        </>
    )
}

export default ContactPage
