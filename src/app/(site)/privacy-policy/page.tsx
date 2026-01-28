import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Thysolutions',
}

const PrivacyPage = () => {
    return (
        <>
            <Breadcrumb pageName='Privacy Policy' />
            <div className='site-container py-20'>
                <div className='bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg border border-gray-100 dark:border-gray-700'>
                    <h1 className='text-3xl font-bold mb-6 text-black'>Privacy Policy</h1>
                    <p className='text-gray-600 dark:text-gray-400 mb-6'>
                        Last updated: January 26, 2026
                    </p>

                    <div className='space-y-8 text-gray-700 dark:text-gray-300'>
                        <section>
                            <h2 className='text-xl font-bold mb-4 text-black'>1. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us when you create an account, update your profile,
                                or communicate with us. This may include your name, email address, password, and any other
                                information you choose to provide.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold mb-4 text-black'>2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to provide, maintain, and improve our services,
                                to process your transactions, and to send you technical notices, updates, security alerts,
                                and support messages.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold mb-4 text-black'>3. Information Sharing</h2>
                            <p>
                                We do not share your personal information with third parties except as described in this
                                privacy policy or with your consent.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold mb-4 text-black'>4. Security</h2>
                            <p>
                                We take reasonable measures to help protect information about you from loss, theft,
                                misuse, and unauthorized access, disclosure, alteration, and destruction.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPage
