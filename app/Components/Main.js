"use client";
import Image from "next/image";
import Textslow from "./Textslow";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { format } from "date-fns";

import hero_side from "@/public/hero_side.png";
import about_side from "@/public/about_side_2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

import { Navigation } from "swiper/modules";
import {
  MoveRight,
  UsersRound,
  Quote,
  LaptopMinimalCheck,
  Clock4,
  Calendar,
  CalendarDays,
} from "lucide-react";
export default function Home({ data, data2 }) {
  if (!data2) {
    return <div>Loading...</div>;
  }

  const Recard = ({
    color,
    icon,
    title,
    description,
    direction1,
    direction2,
  }) => {
    return (
      <motion.div
        initial={direction1}
        whileInView={direction2}
        viewport={{ once: true }}
        style={{ backgroundColor: color }}
        className="w-full  shadow-2xl  lg:w-[300px] space-y-3 rounded-2xl py-8 px-6"
      >
        {icon}
        <h2 className="text-3xl ">{title}</h2>
        <p className="text-sm leading-relaxed text-gray-100">{description}</p>
      </motion.div>
    );
  };
  const Secard = ({ image, title, description, tagline, reverse }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        className={` flex  ${
          reverse ? "md:flex-row-reverse " : "md:flex-row"
        } flex-col gap-4    mx-auto  xl:w-3/4 justify-evenly items-center  `}
      >
        <img
          src={image}
          alt={title}
          className="md:w-[400px]  lg:w-[400px]  shadow-lg rounded-lg"
        />
        <div className=" space-y-6 w-[400px]">
          <h3 className="text-5xl text-prime  font-medium">{title}</h3>
          <h4 className="text-lg font-semibold">{tagline}</h4>
          <p className="text-sm dark:text-gray-400 text-gray-600 ">
            {description}
          </p>
        </div>
      </motion.div>
    );
  };
  const Procard = ({ category, title, image }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.2 } }}
        className="md:w-[350px] space-y-1 hover:scale-105 transition-all ease-in-out duration-300  rounded-b-xl pb-2"
      >
        <img
          className="rounded-xl object-cover w-full shadow-xl h-[230px]"
          src={image}
          alt={title}
        />
        <h3 className="text-center text-gray-600 dark:text-gray-400 font-semibold">
          {category}
        </h3>
        <h2 className="text-center  ">{title}</h2>
      </motion.div>
    );
  };
  const Blogcard = ({ image, date, title, description }) => {
    return (
      <div className="w-full md:w-[320px] space-y-2 cursor-pointer hover:scale-105  transition-all ease-in-out duration-300  rounded-b-xl pb-2">
        <img
          className="rounded-xl object-cover w-full shadow-xl h-[230px]"
          src={image}
          alt={title}
        />
        <h3 className=" text-prime font-medium flex gap-2">
          <Calendar size={20} /> {date}{" "}
        </h3>
        <h2 className="text-2xl ">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  };
  const Reviewcard = ({ description, title }) => {
    return (
      <div className="bg-soft-gradient  rounded-2xl h-[400px] flex items-center flex-col justify-center md:w-3/4 space-y-5 mx-auto p-8">
        <Quote className="mx-auto text-blues size-[40px] opacity-50 " />
        <p className="text-center text-sm  md:text-lg text-gray-500 dark:text-gray-300 font-medium leading-relaxed">
          {description}
        </p>
        <p className="text-center   font-medium text-prime text-xl ">
          {title}
        </p>
      </div>
    );
  };

  const text = "Empowering Ideas,";
  const rout = useRouter();

  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [y, setY] = useState(6);
  const [Categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const normalizedData = data.map((item) => ({
    ...item,
    category: item.category.map((cat) => cat.trim().toLowerCase()),
  }));
  const filteredData = normalizedData.filter((item) => {
    const categories = Array.isArray(item.category) ? item.category : [];
    return selectedCategory
      ? categories.includes(selectedCategory.toLowerCase())
      : true;
  });

  useEffect(() => {
    const allCategories = data.flatMap((item) =>
      item.category.map((cat) => cat.trim().toLowerCase())
    );
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, [data]);

  const handelsubmit = (e) => {
    e.preventDefault();
    setError("Sending...");

    axios
      .post("api/contact", { fname, phone, email, subject, message })
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          setError(
            "Message Send Successfully ! You will get Response very soon."
          );
          setTimeout(() => {
            setError("");
          }, 7000);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Server Error! , Try reloading the page.");
      });
  };
  const formatKey = (key) => {
    if (!key) return "";

    const formattedKey = key
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim();

    return formattedKey
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const handelredrict = (title) => {
    rout.push(`Article/${title}`);
  };
  return (
    <>
      <div className="bg-soft-gradient relative shadow-lg">
        <Navbar />

        <div className="min-h-[calc(80vh)] container mx-auto   flex  items-center justify-center ">
          <div className=" space-y-7  md:space-y-6">
            <div className="  text-center md:text-start  space-y-4 ">
              <motion.p
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, transition: { delay: 0.01 } }}
                className="font-semibold text-prime text-lg md:text-xl"
              >
                Innovative Designs & Development
              </motion.p>
              <motion.p className="text-4xl md:text-7xl font-">
                {text.split("").map((letter, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { delay: index * 0.01, duration: 1 },
                    }}
                    viewport={{ once: true }}
                    key={index}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, transition: { delay: 0.01 } }}
                className="text-prime   text-3xl md:text-6xl"
              >
                Elevating Brands
              </motion.p>
            </div>
            <Textslow
              delay={0.05}
              styles="dark:text-gray-400 text-lg text-gray-700 mt-4 md:w-1/2  text-center md:text-start  "
              text={
                "At Bitsmart Tech, we combine creativity, technology, and strategy to deliver impactful digital experiences."
              }
            />

            <motion.button
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, transition: { delay: 0.01 } }}
              className="mt-6 px-6 py-3  mx-auto md:mx-0 group hard-glass-effect hover:scale-105 shadow-lg  transition-all ease-in-out duration-300  flex gap-2 rounded-full bg-hard-gradient text-white"
            >
              Let’s Build Together <MoveRight className="" size={24} />
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, transition: { delay: 0.01 } }}
          >
            <Image
              className="md:block hidden image-adaptive invert-0 dark:invert transition-all duration-300 "
              src={hero_side}
              alt={text}
            />
          </motion.div>
        </div>
        <div className="py-10 lg:py-20"></div>
        <div className="px-5 bg-transparent lg:absolute lg:-bottom-1/4 lg:left-1/2  items-center justify-center lg:translate-x-[-50%] text-white container mx-auto flex gap-5 lg:flex-nowrap flex-wrap ">
          <Recard
            title={"Experienced Team of Experts"}
            direction1={{ x: -300, opacity: 0 }}
            direction2={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            icon={<UsersRound size={36} />}
            description={
              "Our seasoned professionals bring years of industry expertise and technical mastery to every project. With diverse backgrounds in design, development, and digital strategy, we collaborate seamlessly to deliver exceptional results that exceed expectations and drive measurable business growth."
            }
            color="#cc75d3"
          />
          <Recard
            title={"Solution For Every Client"}
            direction1={{ y: 100, opacity: 0 }}
            direction2={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            icon={<LaptopMinimalCheck size={36} />}
            description={
              "We understand that every business has unique challenges and goals. Our tailored approach ensures we create custom solutions that perfectly align with your specific needs, whether it's a stunning website, powerful application, or comprehensive digital transformation strategy."
            }
            color="#867ae6"
          />
          <Recard
            title={"Delivery On Acurate Time"}
            direction1={{ x: 300, opacity: 0 }}
            direction2={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            icon={<Clock4 size={36} />}
            description={
              "Time is precious in business, and we respect that. Our proven project management methodologies and dedicated team ensure we deliver high-quality results on schedule, every time. We keep you informed throughout the process with regular updates and transparent communication."
            }
            color="#63c9b3"
          />
        </div>
      </div>

      <div className="min-h-screen px-4 md:mt-52    mt-40 mb-0 lg:px-0  flex lg:flex-nowrap flex-wrap-reverse gap-4 items-center justify-center container mx-auto">
        <div className="space-y-5 lg:w-[50%] xl:w-[40%] ">
          <h1 className="text-3xl lg:text-4xl md:leading-relaxed">
            We Craft Digital Excellence With Innovation
          </h1>
          <p className="">At BitSmart Tect We are more then just a design.</p>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            We are a passionate team of creative professionals dedicated to
            transforming businesses through innovative digital solutions. Our
            expertise spans web development, mobile applications, branding, and
            digital marketing, ensuring comprehensive support for your digital
            journey.
          </p>
          <Link
            href={"/Aboutus"}
            className="mt-6 place-self-start px-6 py-3 group hover:scale-105 shadow-lg  transition-all ease-in-out duration-300  flex gap-2 rounded-full bg-hard-gradient text-white"
          >
            Read About Us <MoveRight className="" size={24} />
          </Link>
        </div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0, transition: { delay: 0.2, duration: 0.3 } }}
          viewport={{ once: true }}
          className="  width-[120%]"
        >
          {/* <img className="rounded-xl " src="https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="brand" /> */}
          <Image
            className="image-adaptive invert-0 dark:invert transition-all duration-300 "
            src={about_side}
            alt={"At BitSmart Tect We are more then just a design."}
          />
        </motion.div>
      </div>
      <div
        id="review"
        className="h-screen bg-secbg gap-12 flex items-center justify-center flex-col"
      >
        <h2 className="text-3xl md:text-5xl text-prime">
          What Our Clients Says
        </h2>
        <Swiper navigation modules={[Navigation]} loop className="w-full ">
          <SwiperSlide>
            <Reviewcard
              title="Sarah Johnson, CEO of TechFlow Solutions"
              description={
                "Bitsmart Tech transformed our digital presence completely. Their team delivered an exceptional website that perfectly captures our brand identity. The attention to detail and professional approach exceeded our expectations. Highly recommended for any business looking to elevate their online presence."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Reviewcard
              title="Michael Chen, Founder of InnovateCorp"
              description={
                "Working with Bitsmart Tech was a game-changer for our startup. They understood our vision perfectly and delivered a stunning mobile app that helped us scale rapidly. Their expertise in both design and development made the entire process seamless and enjoyable."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <Reviewcard
              title="Emily Rodriguez, Marketing Director at GlobalBrand"
              description={
                "The digital marketing campaign designed by Bitsmart Tech delivered outstanding results. Their strategic approach and creative solutions helped us achieve a 300% increase in online engagement. Their team is responsive, professional, and truly understands modern marketing trends."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" container mx-auto  flex flex-col px-4 lg:px-0 gap-36 py-16">
        <Secard
          image="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title={"Web Design"}
          tagline="Creating stunning, responsive websites that captivate and convert,"
          reverse={false}
          description={
            "We craft modern, user-friendly websites that not only look beautiful but also drive results. Our designs are responsive, fast-loading, and optimized for all devices. From simple landing pages to complex e-commerce platforms, we create digital experiences that engage your audience and achieve your business goals."
          }
        />
        <Secard
          image="https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title={"Branding"}
          tagline="Building memorable brand identities that stand out in the market,"
          reverse={true}
          description={
            "Your brand is more than just a logo. We develop comprehensive brand strategies that include visual identity, messaging, and positioning. Our creative team ensures your brand communicates your values effectively and creates lasting connections with your target audience."
          }
        />
        <Secard
          image="https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title={"Digital Marketing"}
          tagline="Strategic marketing campaigns that drive growth and engagement,"
          reverse={false}
          description={
            "We develop data-driven digital marketing strategies that increase your online visibility and drive conversions. From social media management to PPC campaigns, our comprehensive approach ensures your message reaches the right audience at the right time."
          }
        />
        <Secard
          image="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title={"SEO"}
          tagline="Optimizing your online presence for maximum search visibility,"
          reverse={true}
          description={
            "Our SEO experts use cutting-edge techniques to improve your search engine rankings and drive organic traffic. We implement comprehensive optimization strategies that enhance your website's performance and help you dominate search results in your industry."
          }
        />
      </div>
      <div className="container mx-auto space-y-6 my-10">
        <p className="text-center text-2xl md:text-5xl   font-medium  text- leading-[1.4]">
          Our <span className="text-prime">Incredible Clients</span> We <br />
          Have Worked With
        </p>
        <div className="flex flex-wrap w-3/4  mx-auto items-center justify-center text-2xl font-semibold text-gray-500 text-center gap-12">
          <span>MICROSOFT</span>
          <span>Google</span>
          <span>APPLE</span>
          <span>Amazon</span>
          <span>NETFLIX</span>
          <span>Meta</span>
        </div>
      </div>
      <div
        id="projects"
        className="bg-soft-gradient px-4 lg:px-0 min-h-screen py-28 "
      >
        <div className="container mx-auto space-y-5">
          <h2 className="text-center text-3xl md:text-5xl  text-prime">
            See Our Recent Projects
          </h2>
          <p className="md:w-1/2 text-sm text-gray-500  text-center mx-auto">
            Explore our diverse portfolio showcasing innovative web solutions,
            mobile applications, and digital transformations that have helped
            businesses achieve remarkable growth and success.
          </p>
          <div className="  flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 hover:shadow-lg rounded-3xl  hover:bg-hard-gradient ${
                selectedCategory === null
                  ? "text-white bg-hard-gradient"
                  : "bg-secbg"
              } hover:text-white transition-all ease-in-out duration-500   py-2 text-sm `}
            >
              All
            </button>
            {Categories.map((cat, index) => (
              <button
                onClick={() => setSelectedCategory(cat)}
                key={index}
                className={`px-5 hover:shadow-lg rounded-3xl  hover:bg-hard-gradient ${
                  selectedCategory === cat
                    ? "text-white bg-hard-gradient"
                    : "bg-secbg"
                } hover:text-white transition-all ease-in-out duration-500   py-2 text-sm `}
              >
                {formatKey(cat)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap   items-center justify-center  gap-10 md:gap-8">
            {filteredData.slice(0, y).map((data, index) => (
              <Procard
                key={index}
                title={data.name}
                image={data.imgs[0]}
                category={formatKey(data.category[0])}
              />
            ))}
          </div>
          <button
            onClick={() => setY(data.length)}
            className="mt-6 px-6 py-3 group hover:animate-pulse hover:scale-105 shadow-lg  transition-all ease-in-out duration-300  flex gap-2 mx-auto rounded-full bg-hard-gradient text-white"
          >
            View All Projects <MoveRight className="" size={24} />
          </button>
        </div>
      </div>
      <div className="min-h-screen py-28 px-4 md:px-0  flex flex-col  items-center justify-center  space-y-8">
        <h1 className="text-center text-3xl md:text-5xl text-prime font-SpaceGrotesk ">
          Featured Blog Posts
        </h1>
        {/* <div className="flex flex-wrap items-center justify-center   gap-10 lg:gap-4 "> */}
        <Swiper
          className={"container mx-auto  xl:w-3/4 "}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          loop
        >
          {data2.map((data, index) => (
            <SwiperSlide className="" key={index}>
              <div className=" px-2 min-h-[350px]">
                <div className="    rounded-lg border dark:border-gray-500 cursor-pointer space-y-2 pb-3 flex flex-col">
                  <img
                    src={data.image}
                    onClick={() => handelredrict(data.slug)}
                    className="object-cover  rounded-t-lg w-full h-[200px]"
                    alt={data.title}
                  />

                  <div
                    onClick={() => handelredrict(data.slug)}
                    className="space-y-3 px-2"
                  >
                    <h1 className=" md:text-3xl text-xl  lg:text-2xl line-clamp-2 font-semibold">
                      {data.title}{" "}
                    </h1>
                    <div className="flex w-full items-center justify-between dark:text-gray-300 text-gray-800 font-normal ">
                      <span className="flex items-center gap-2 ">
                        <CalendarDays className="text-blues" />{" "}
                        {data.date
                          ? format(new Date(data.date), "MMM dd yyyy")
                          : ""}
                      </span>
                    </div>
                    <p className="text-sm  text-gray-800 dark:text-gray-400   line-clamp-3">
                      {data.discription}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* </div> */}
        <button className="mt-6 px-6 py-3 group hover:animate-pulse hover:scale-105 shadow-lg  transition-all ease-in-out duration-300  flex gap-2 mx-auto rounded-full bg-hard-gradient text-white">
          Read Articles <MoveRight className="" size={24} />
        </button>
      </div>
      <div className="min-h-screen py-28 bg-secbg">
        <div className="container mx-auto space-y-10">
          <h2 className="text-center text-prime text-3xl md:text-4xl">
            Lets Collaborate & Start Project
          </h2>
          <form
            onSubmit={handelsubmit}
            className="flex flex-col gap-6 w-3/4 mx-auto"
          >
            {error && <span className="text-lg text-red-600">{error}</span>}

            <div className="w-full flex md:flex-row flex-col gap-6">
              <input
                onChange={(e) => setFname(e.target.value)}
                className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg"
                type="text"
                placeholder="First Name*"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg"
                type="email"
                placeholder=" Email*"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-6">
              <input
                required
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg"
                type="tel"
                placeholder="Phone"
              />
              <input
                required
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-4 shadow-md shadow-soft-gradient rounded-lg"
                type="text"
                placeholder=" Subject"
              />
            </div>
            {/* <textarea className="w-full p-4 shadow-md rounded-lg h-[120px]" name="" placeholder="Message" id=""></textarea> */}
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 shadow-md rounded-lg h-[120px]"
              name=""
              placeholder="Message"
              id=""
            ></textarea>

            <button
              type="submit"
              className="mt-6 px-6 py-3 group hover:animate-pulse hover:scale-105 shadow-lg  transition-all ease-in-out duration-300  flex gap-2 place-self-end rounded-full bg-hard-gradient text-white"
            >
              Send Message <MoveRight className="" size={24} />
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
