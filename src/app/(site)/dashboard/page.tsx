import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Breadcrumb from '@/app/components/Common/Breadcrumb'

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin')
    }

    return (
        <>
            <Breadcrumb pageName='User Dashboard' />
            <div className='site-container py-20'>
                <div className='bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700'>
                    <h1 className='text-3xl font-bold mb-6 text-black'>Welcome back, {session.user?.name}!</h1>
                    <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
                        This is your private dashboard. Only authenticated users can see this page.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl'>
                            <h3 className='text-blue-600 dark:text-blue-400 font-bold text-xl mb-2'>Level</h3>
                            <p className='text-blue-800 dark:text-blue-300 text-3xl font-black'>Pro Plan</p>
                        </div>
                        <div className='bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl'>
                            <h3 className='text-purple-600 dark:text-purple-400 font-bold text-xl mb-2'>Storage</h3>
                            <p className='text-purple-800 dark:text-purple-300 text-3xl font-black'>75% Used</p>
                        </div>
                        <div className='bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl'>
                            <h3 className='text-green-600 dark:text-green-400 font-bold text-xl mb-2'>Credits</h3>
                            <p className='text-green-800 dark:text-green-300 text-3xl font-black'>1,250</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
