import Breadcrumb from '@/app/components/Common/Breadcrumb'
import FAQ from '@/app/components/Home/FAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQ | Thysolutions',
}

const FAQPage = () => {
    return (
        <>
            <Breadcrumb pageName='Frequently Asked Questions' />
            <div className='py-20'>
                <FAQ />
            </div>
        </>
    )
}

export default FAQPage
