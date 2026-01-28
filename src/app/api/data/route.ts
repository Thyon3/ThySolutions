import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Features', href: '/features' },
  { label: 'Contact', href: '/contact' },
]


// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Who we are.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Thysolutions is a startup software company building modern digital products for businesses and founders.',
    link: 'Learn more',
  },
  {
    heading: 'What we do.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Websites, web apps, mobile apps, APIs, database solutions, and server hosting  all delivered end-to-end.',
    link: 'Learn more',
  },
  {
    heading: 'How we deliver.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'We plan, build, test, deploy, and support your software with clear milestones and reliable engineering practices.',
    link: 'Learn more',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Website Development',
    name: 'Landing Pages',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Software Development',
    name: 'Web Applications',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Mobile Development',
    name: 'iOS & Android Apps',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Database Solutions',
    name: 'Design & Optimization',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Cloud & Hosting',
    name: 'Deployments & Monitoring',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Support',
    name: 'Maintenance & Enhancements',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Custom website build for a growing brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app MVP with backend APIs.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Database migration and performance tuning.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Cloud deployment, monitoring, and hosting setup.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'starting',
    features: {
      discovery: 'Product discovery & planning',
      build: 'Website or landing page build',
      backend: 'API & backend development',
      database: 'Database setup & optimization',
      support: 'Email support',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'starting',
    features: {
      build: 'Web app + admin dashboard',
      integrations: '3rd-party integrations',
      performance: 'Performance & SEO improvements',
      hosting: 'Cloud deployment & hosting',
      support: 'Priority support',
    },
  },
  {
    heading: 'Enterprise',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'starting',
    features: {
      architecture: 'Multi-service architecture',
      cicd: 'CI/CD pipeline & automation',
      security: 'Security hardening',
      observability: 'Monitoring & observability',
      support: 'Dedicated support',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'Founder, Startup Team',
    comment:
      'Thysolutions delivered our MVP quickly and with great quality. Clear communication, solid architecture, and a smooth launch.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Product Lead',
    comment:
      'The team upgraded our website performance and built new features without disrupting production. Fast, reliable, and proactive.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Operations Manager',
    comment:
      'They helped us design a clean database and set up hosting with monitoring and backups. Everything is easier to manage now.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Robert Fox',
    profession: 'Founder, Startup Team',
    comment:
      'Great partnership from planning to deployment. The handover was smooth and the codebase is easy to extend.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CTO',
    comment:
      'Strong engineering practices and thoughtful decisions. The API is stable, secure, and ready to scale.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Business Owner',
    comment:
      'They built our website and mobile app with a clear timeline and regular updates. Highly recommended.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'From idea to MVP:',
    heading2: 'a practical launch checklist.',
    name: 'Published by Thysolutions',
    date: 'January 28, 2026',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '6 min',
    heading: 'Choosing a tech stack:',
    heading2: 'web vs mobile vs both.',
    name: 'Published by Thysolutions',
    date: 'January 28, 2026',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '4 min',
    heading: 'Database basics:',
    heading2: 'schemas, indexes, backups.',
    name: 'Published by Thysolutions',
    date: 'January 28, 2026',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'Hosting 101:',
    heading2: 'deployments and monitoring.',
    name: 'Published by Thysolutions',
    date: 'January 28, 2026',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '7 min',
    heading: 'Security essentials:',
    heading2: 'auth, roles, and secrets.',
    name: 'Published by Thysolutions',
    date: 'January 28, 2026',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'Scaling support:',
    heading2: 'maintenance that works.',
    name: 'Published by Thysolutions',
    date: 'January 28, 2026',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    section: 'Category',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Contact', href: '/contact' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Home', href: '/' },
    ],
  },
  {
    section: 'Pages',
    links: [
      { label: 'Sign In', href: '#' },
      { label: 'Sign Up', href: '#' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    section: 'Others',
    links: [
      { label: 'Documentation', href: '/documentation' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
]


export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
