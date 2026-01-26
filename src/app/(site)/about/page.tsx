import Breadcrumb from '@/app/components/Common/Breadcrumb'
import Aboutus from '@/app/components/Home/AboutUs'
import Team from '@/app/components/Home/Team'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Desgy Solutions',
}

const AboutPage = () => {
    return (
        <>
            <Breadcrumb pageName='About Us' />
            <div className='py-20'>
                <Aboutus />
            </div>
            <div className='pb-20'>
                <Team />
            </div>
        </>
    )
}

export default AboutPage
