import Breadcrumb from '@/app/components/Common/Breadcrumb'
import Pricing from '@/app/components/Home/Manage' // Using existing Manage component which seems to be pricing
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing | Desgy Solutions',
}

const PricingPage = () => {
    return (
        <>
            <Breadcrumb pageName='Pricing' />
            <div className='py-20'>
                <Pricing />
            </div>
        </>
    )
}

export default PricingPage
