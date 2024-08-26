'use client'
import React from 'react'

import Footer from '../componets/footer'

export default function Template({children}) {
    return (
        <>
            {children}
            <Footer/>
        </>
)
}
