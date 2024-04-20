
import React from 'react'
import Projectprops from './Projectprops'
import mental_health from "../assets/mental_health.png";
import shopify from "../assets/shopify.png";
import book_store from "../assets/book_store.png"

const Project = () => (
    <div className='sm:flex justify-center'>
        <Projectprops img={mental_health} title="Mental-Health"
            para="It is a Consulting Web App for teenagers struggling with mental health issues." link="https://psychology-consulting.netlify.app/" />

        <Projectprops img={shopify} title="Shopify" para="an ecommerce website for clothes of men and women." link="https://github.com/mansijaiswal12/shopify" />

        <Projectprops img={book_store} title="Book-Store" para="an Book-Store system which can store read write info of books." link="https://book-store-react-rtk.netlify.app/"/>
    </div>
)

export default Project
