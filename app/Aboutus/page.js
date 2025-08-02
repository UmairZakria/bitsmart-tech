import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import about_side2 from "@/public/team_work.png"
import about_down from "@/public/about_down.png"
import Footer from '../Components/Footer'
import Textslow from '../Components/Textslow'
import SmoothScrollProvider from '../Components/SmoothScrollProvider'


const Wecard = ({ title, description, image="" }) => {
  return (
    <div className='space-y-5'>
      <h2 className='text-2xl  flex items-center flex-wrap gap-2'> {image !== "" ? <img className='size-[28px]' src={image} alt={title} /> : "" } {title}</h2>
      <p className='text-sm md:text-lg dark:text-gray-400 text-gray-600 '>{description}</p>
    </div>
  )
}
const coreValues = [
  {
    title: "Innovation & Excellence",
    image: "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000",
    description: "We aim to be the top choice for businesses by delivering cutting-edge digital products that combine superior design, performance, and innovation."
  },
  {
    title: "Collaboration",
    image : "https://img.icons8.com/?size=100&id=PaGAKNeualA9&format=png&color=000000",
    description: "Great ideas thrive in a collaborative environment. We believe that teamwork fosters creativity, efficiency, and the best possible outcomes for our clients."
  },
  {
    title: "Passion & Fun",
    image: "https://img.icons8.com/?size=100&id=TQvsQuFHlkNy&format=png&color=000000",
    description: "We encourage a positive and energetic work culture, where passion drives productivity. Innovation flourishes when people enjoy what they do."
  },
  {
    title: "Striving for the Best",
    image: "https://img.icons8.com/?size=100&id=PrC1bPql14Xp&format=png&color=000000",
    description: "We push boundaries to deliver top-tier digital experiences, ensuring our solutions exceed industry standards and customer expectations."
  },
  {
    title: "Trust & Respect",
    image : "https://img.icons8.com/?size=100&id=Ik7y1upMZWu6&format=png&color=000000",
    description: "Integrity, transparency, and mutual respect form the foundation of our relationships—with both clients and team members. We build trust through consistency and quality."
  },
  {
    title: "Lifelong Learning",
    image: "https://img.icons8.com/?size=100&id=ZYujt38OjL95&format=png&color=000000",
    description: "Technology evolves, and so do we. We embrace a continuous learning mindset, staying ahead of trends to provide future-ready solutions."
  },

];
const Page = () => {
  return (
    <>
      <SmoothScrollProvider>
      <Navbar />
      <div className='w-full  py-8 px-2 md:px-10'>
        <div className='bg-soft-gradient rounded-xl gap-10 flex-col flex items-center justify-center p-10 py-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-center text-prime'>Who we Are?</h1>
          <p className='text-lg md:text-2xl text-center lg:w-3/4 lg:mx-auto'>We are proud to have a family filled with creative thinkers and talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.</p>
        </div>

      </div>
      <div className='container mx-auto my-16 flex md:flex-row  flex-col-reverse md:px-0 px-4 gap-5 items-center justify-center'>
        <div className=' md:w-1/2 space-y-6 '>
          <h2 className='text-3xl  font-semibold'>Meet Bitsmart Tech</h2>
          <p>Bitsmart Tech began its journey with a vision to provide cutting-edge digital solutions. Over time, we have evolved into a full-cycle software development company, delivering innovative and scalable products. Our commitment to quality, client satisfaction, and a forward-thinking approach sets us apart in the industry.</p>
          <p>We take pride in being a developer-centric company, fostering a collaborative and growth-driven environment. Our expertise spans across web development, modern frameworks, and seamless digital experiences.</p>
          <p>
            We have had the privilege of working with forward-thinking businesses, helping startups and established companies transform their ideas into reality with the latest technologies. At Bitsmart Tech, we don't just build software—we build success.
          </p>

        </div>
        <div>
          <Image src={about_side2} className='image-adaptive invert-0 dark:invert transition-all duration-300 ' alt='Bitsmart Tech' />
        </div>

      </div>

      <div className='mb-16 bg-secbg '>
        <div className="container grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2 px-4 md:px-0 md:gap-y-20 gap-10 mx-auto md:p-10 py-10 items-center justify-center">
          <div className='md:col-span-2 '>

            <Image src={about_down} className='mx-auto' alt='digital solutions' />
          </div>
          <Wecard title={'Our Approach'} description={"At Bitsmart Tech, we are committed to delivering cutting-edge digital solutions that empower businesses. Our approach is driven by innovation, precision, and a deep understanding of modern technologies to create seamless user experiences."} />
          <Wecard title={'Vision & Mission'} description={"We strive to be the go-to technology partner for businesses, offering top-tier software development, design, and digital transformation solutions. Our mission is to simplify complex challenges through technology and help businesses scale efficiently."} />
          <Wecard title={'Goals'} description={"Our goal is to build future-ready digital products that combine functionality, aesthetics, and performance. We aim to push the boundaries of creativity and efficiency, ensuring businesses stay ahead in the competitive digital landscape."} />
          <Wecard title={'Team'} description={"Our team consists of passionate developers, designers, and tech enthusiasts who thrive on innovation. At Bitsmart Tech, we believe in a collaborative and growth-driven culture, where ideas turn into powerful digital solutions."} />

        </div>




      </div>
      <div className='w-full  py-8 mb-20 px-4 md:px-16'>

      <div className='space-y-10'>
        <h1 className='text-2xl md:text-5xl font-semibold text-prime'>Core Values at Bitsmart Tech</h1>
        <p className='text-lg md:text-xl lg:w-3/4 leading-relaxed '>At Bitsmart Tech, we are driven by a passion for innovation, collaboration, and continuous growth. Our core values define who we are and how we deliver excellence in digital solutions.</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-10 md:gap-y-24  mx-auto items-center justify-center'>
        {coreValues.map((value,index)=>(
          <Wecard key={index} title={value.title} image={value.image?value.image:""} description={value.description} />
        ))}

        </div>
        </div>


      </div>
      <Footer />
      </SmoothScrollProvider>
    </>
  );
}

export default Page
