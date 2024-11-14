import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
const Faq = () => {

    const queries = [

        {
            id: 1,
            queryName: '1. What types of stickers do you offer?',
            queryAns: 'We provide a wide range of stickers, including custom designs, face stickers, and stickers for walls, vehicles, and more.',
        },

        {
            id: 2,
            queryName: '2. Can I request a custom design for my sticker?',
            queryAns: 'Absolutely! We specialize in creating custom stickers based on your specific ideas and requirements.',
        },

        {
            id: 3,
            queryName: '3. Can I request a face sticker?',
            queryAns: 'Yes, you can! The only condition for a face sticker is that it works best if the image is in silhouette.',
        },

        {
            id: 4,
            queryName: '4. How can I order items from your shop?',
            queryAns: 'Simply reach out to us with your requirements, and we will take it from there.'
        },

        {
            id: 5,
            queryName: '5. How long does it take to complete an order?',
            queryAns: 'The time depends on your specific request.'
        },

        {
            id: 6,
            queryName: '6. Do you offer delivery?',
            queryAns: 'No, orders must be picked up at our shop.'
        },

        {
            id: 7,
            queryName: '4. What payment options do you accept?',
            queryAns: 'We accept cash and online payments.'
        },

        {
            id: 8,
            queryName: '8. Can I see samples of your work?',
            queryAns: 'Yes, visit our Services section to check out examples of our work.'
        },
    ]
  return (
    <>
        <Helmet>
            <title>FAQs | Vicky Art Station </title>
            <meta property="og:url" content='https://www.vickyartstation.com.np/faq' />
            <meta property="og:title" content='FAQs | Vicky Art Station - Stickers, own of your choice'/>
            <meta name="twitter:title" content="FAQs | Vicky Art Station - Stickers, own of your choice" />

        </Helmet>
    <Navbar/>
    <section className="wrapper">
        <small className='font-textFont text-2xl font-bold dark:text-lightColor'>FAQs</small>

        {/* qns container */}
        <section className="my-5">

            {queries.map(query=>(
                <div key={query.id} className="bg-lightColor shadow-md p-5 rounded-lg mb-6">
                    <h3 className="text-2xl font-textFont font-bold xs:text-[1.2rem]">{query.queryName}</h3>
                    <p className="mt-3 xs:text-[1rem]">{query.queryAns}</p>
                </div>
            ))}
        </section>


    </section>
    <Footer/>
    </>
  )
}

export default Faq