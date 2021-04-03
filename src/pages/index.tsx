import React from 'react'
import Head from 'next/Head'

import { Navigation } from '../components/navigation'

const Page = () => {
  return (
    <>
      <Head>
        <title>nextjs-tailwind-template</title>
      </Head>
      <div>
        <Navigation />
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Next.js{' '}
            <span aria-label="fire" role="img">
              🔥
            </span>{' '}
            Tailwind Template
          </h1>
        </div>
      </div>
    </>
  )
}

export default Page
