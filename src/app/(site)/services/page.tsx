import Breadcrumb from '@/app/components/Common/Breadcrumb'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | Desgy Solutions',
}

const ServicesPage = () => {
    return (
        <>
            <Breadcrumb pageName='Our Services' />
            <div className='py-20'>
                <Digital />
            </div>
            <div className='pb-20'>
                <Beliefs />
            </div>
        </>
    )
}

export default ServicesPage
