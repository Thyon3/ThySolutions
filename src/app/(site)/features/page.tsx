import Breadcrumb from '@/app/components/Common/Breadcrumb'
import Featured from '@/app/components/Home/Featured'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Features | Desgy Solutions',
}

const FeaturesPage = () => {
    return (
        <>
            <Breadcrumb pageName='Features' />
            <div className='py-20'>
                <Featured />
            </div>
        </>
    )
}

export default FeaturesPage
