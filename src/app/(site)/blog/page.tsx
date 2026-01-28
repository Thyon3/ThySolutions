import Breadcrumb from '@/app/components/Common/Breadcrumb'
import Articles from '@/app/components/Home/Articles'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Thysolutions',
}

const BlogPage = () => {
    return (
        <>
            <Breadcrumb pageName='Our Blog' />
            <div className='py-20'>
                <Articles />
            </div>
        </>
    )
}

export default BlogPage
