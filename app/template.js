'use client'
import React from 'react'
import Header from '../componets/header'
import Footer from '../componets/footer'

export default function Template({children}) {
    return (
        <>
   
        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
)
}
