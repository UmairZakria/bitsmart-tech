import Main from "@/app/Components/Main"
import SmoothScrollProvider from "@/app/Components/SmoothScrollProvider"
async function getData() {
    try {
        const res = await fetch(`http://localhost:3000/api/project`, { next: { revalidate: 60  } });
        const project = await res.json();
        const res2 = await fetch(`http://localhost:3000/api/blogpost`, { next: { revalidate: 60  } });
        const posts = await res2.json();

        return { data:project.data ,data2: posts.blogs };
    } catch (err) {
        console.error("Error fetching post data:", err);
        return { data: [], data: [] };
    }
}

export default async function Page() {

    // const {   data2} = await getData();
    const data = [
        {
          name: "E-Commerce Platform - ShopSmart",
          discription: "A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform handles 10,000+ daily users and processes over $500K in monthly transactions.",
          sourcelink: "https://github.com/bitsmart/shopsmart-platform",
          imgs: [
            "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          category: ["web_design", "ecommerce"]
        },
        {
          name: "Mobile Banking App - SecurePay",
          discription: "A comprehensive mobile banking application for iOS and Android. Includes features like account management, fund transfers, bill payments, investment tracking, and biometric authentication. The app serves 50,000+ users with 99.9% uptime.",
          sourcelink: "https://github.com/bitsmart/securepay-mobile",
          imgs: [
            "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          category: ["mobile_app"]
        },
        {
          name: "Restaurant Management System - FoodFlow",
          discription: "A complete restaurant management solution including order management, inventory tracking, staff scheduling, and customer analytics. The system integrates with POS devices and delivery platforms, helping restaurants increase efficiency by 40%.",
          sourcelink: "https://github.com/bitsmart/foodflow-system",
          imgs: [
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          category: ["web_design"]
        },
        {
          name: "Fitness Tracking App - FitLife",
          discription: "A comprehensive fitness tracking application with workout planning, nutrition tracking, progress monitoring, and social features. The app syncs with wearable devices and provides personalized recommendations based on user goals and performance.",
          sourcelink: "https://github.com/bitsmart/fitlife-app",
          imgs: [
            "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          category: ["mobile_app", "health_fitness"]
        },
        {
          name: "Real Estate Platform - PropertyHub",
          discription: "A modern real estate platform connecting buyers, sellers, and agents. Features include property listings, virtual tours, mortgage calculator, and advanced search filters. The platform has helped facilitate over 1,000 property transactions.",
          sourcelink: "https://github.com/bitsmart/propertyhub-platform",
          imgs: [
            "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/323706/pexels-photo-323706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          category: ["web_design", ]
        },
        {
          name: "Learning Management System - EduTech",
          discription: "An advanced learning management system for educational institutions. Includes course creation, student management, assessment tools, and analytics dashboard. The platform supports 100,000+ students across 50+ educational institutions.",
          sourcelink: "https://github.com/bitsmart/edutech-lms",
          imgs: [
            "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ],
          category: ["web_design", "education"]
        },
        {
            name: "Fashion E-Commerce - StyleStore",
            discription: "A premium fashion e-commerce platform specializing in designer clothing and accessories. Features include virtual try-on, size recommendations, personalized styling, and AR-powered shopping experience. The platform serves 25,000+ fashion-conscious users with 200+ designer brands.",
            sourcelink: "https://github.com/bitsmart/stylestore-fashion",
            imgs: [
              "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            category: ["web_design", "ecommerce"]
          },
          {
            name: "Investment Portfolio App - WealthTrack",
            discription: "A sophisticated investment tracking and portfolio management application. Features include real-time market data, portfolio analytics, risk assessment, and automated rebalancing. The app manages over $50M in assets for 15,000+ active investors with advanced security protocols.",
            sourcelink: "https://github.com/bitsmart/wealthtrack-investment",
            imgs: [
              "https://images.pexels.com/photos/7567559/pexels-photo-7567559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            category: ["mobile_app", ]
          },
          {
            name: "Hotel Management System - StayHub",
            discription: "A comprehensive hotel management solution for boutique hotels and resorts. Features include booking management, guest services, housekeeping coordination, and revenue analytics. The system has helped hotels increase occupancy rates by 35% and improve guest satisfaction scores.",
            sourcelink: "https://github.com/bitsmart/stayhub-hotel",
            imgs: [
              "https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ],
            category: ["web_design",]
          }
      ]
      const data2= [
        {
          title: "The Future of Web Development: Trends to Watch in 2024",
          discription: "Explore the latest trends in web development including AI-powered tools, WebAssembly, and the rise of micro-frontends. Learn how these technologies are shaping the future of digital experiences and what developers need to know to stay ahead.",
          keyword: "web development, AI, trends, 2024, technology",
          image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content: `
            <h2>The Evolution of Web Development</h2>
            <p>Web development has come a long way since the early days of static HTML pages. Today, we're witnessing a revolution in how websites are built, deployed, and maintained. The integration of artificial intelligence, the rise of new frameworks, and the increasing importance of performance are driving unprecedented changes in our industry.</p>
            
            <h3>AI-Powered Development Tools</h3>
            <p>Artificial intelligence is transforming how developers write code. From intelligent code completion to automated testing and debugging, AI tools are becoming indispensable. GitHub Copilot and similar tools are just the beginning of what's possible when AI meets web development.</p>
            
            <h3>WebAssembly: The Performance Game Changer</h3>
            <p>WebAssembly (WASM) is enabling near-native performance in the browser. This technology allows developers to write code in languages like C++, Rust, and Go, then compile it to run in the browser at speeds previously unimaginable for web applications.</p>
            
            <h3>Micro-Frontends: The New Architecture</h3>
            <p>Micro-frontends are gaining popularity as organizations look for ways to scale their frontend development teams. This architecture allows different teams to work on different parts of a web application independently, leading to faster development cycles and better maintainability.</p>
            
            <h2>What This Means for Developers</h2>
            <p>As these trends continue to evolve, developers need to stay adaptable and continuously learn new technologies. The future belongs to those who can combine traditional web development skills with emerging technologies and tools.</p>
          `
        },
        {
          title: "Building Scalable Mobile Apps: Best Practices for 2024",
          discription: "Discover the essential strategies for creating mobile applications that can handle millions of users. From architecture decisions to performance optimization, learn the best practices that successful mobile apps follow.",
          keyword: "mobile development, scalability, best practices, performance",
          image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content: `
            <h2>Understanding Mobile App Scalability</h2>
            <p>Scalability in mobile apps isn't just about handling more users—it's about creating an architecture that can grow with your business. A scalable mobile app can handle increased load without significant performance degradation or the need for major architectural changes.</p>
            
            <h3>Choosing the Right Architecture</h3>
            <p>Modern mobile apps often use a combination of native and cross-platform technologies. React Native, Flutter, and native development each have their place depending on your specific requirements. The key is choosing an architecture that aligns with your long-term goals.</p>
            
            <h3>Performance Optimization Strategies</h3>
            <p>Mobile users have high expectations for app performance. Techniques like lazy loading, efficient data caching, and optimized image handling can make the difference between a successful app and one that users abandon.</p>
            
            <h3>Backend Integration Best Practices</h3>
            <p>Your mobile app's backend needs to be as scalable as the frontend. This means implementing proper API design, using efficient databases, and considering microservices architecture for complex applications.</p>
            
            <h2>Testing and Monitoring</h2>
            <p>Comprehensive testing strategies and real-time monitoring are crucial for maintaining app quality as you scale. Automated testing, crash reporting, and performance monitoring tools help identify and resolve issues before they affect users.</p>
          `
        },
        {
          title: "The Complete Guide to E-commerce SEO in 2024",
          discription: "Master the art of SEO for e-commerce websites with this comprehensive guide. Learn how to optimize product pages, improve site speed, and implement technical SEO strategies that drive sales.",
          keyword: "e-commerce, SEO, digital marketing, optimization",
          image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content: `
            <h2>Why E-commerce SEO is Different</h2>
            <p>E-commerce SEO presents unique challenges that don't exist in other industries. With thousands of product pages, complex category structures, and the need to balance user experience with search optimization, e-commerce sites require specialized SEO strategies.</p>
            
            <h3>Product Page Optimization</h3>
            <p>Product pages are the heart of any e-commerce site's SEO strategy. This includes optimizing product titles, descriptions, images, and structured data. Each product page should target specific keywords while providing valuable information to potential customers.</p>
            
            <h3>Technical SEO for E-commerce</h3>
            <p>Technical SEO is especially important for e-commerce sites. This includes optimizing site speed, implementing proper URL structures, managing duplicate content, and ensuring mobile-friendliness. These technical factors can significantly impact search rankings and user experience.</p>
            
            <h3>Content Marketing for E-commerce</h3>
            <p>Content marketing helps e-commerce sites rank for informational queries and build authority in their niche. This includes creating blog posts, buying guides, product comparisons, and other valuable content that attracts and converts potential customers.</p>
            
            <h2>Measuring Success</h2>
            <p>Tracking the right metrics is crucial for e-commerce SEO success. Focus on organic traffic, conversion rates, average order value, and revenue from organic search to measure the effectiveness of your SEO efforts.</p>
          `
        },
        {
          title: "UI/UX Design Principles: Creating User-Centered Digital Experiences",
          discription: "Learn the fundamental principles of UI/UX design that create engaging and intuitive digital experiences. From user research to prototyping, discover how to design interfaces that users love.",
          keyword: "UI/UX design, user experience, design principles, digital design",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content: `
            <h2>The Foundation of Good Design</h2>
            <p>Great UI/UX design starts with understanding your users. User research, persona development, and journey mapping are essential steps in creating designs that truly meet user needs. Without this foundation, even the most visually appealing designs can fail to deliver value.</p>
            
            <h3>Visual Hierarchy and Information Architecture</h3>
            <p>How information is organized and presented significantly impacts user experience. Clear visual hierarchy helps users navigate interfaces intuitively, while thoughtful information architecture ensures users can find what they're looking for quickly and easily.</p>
            
            <h3>Accessibility and Inclusive Design</h3>
            <p>Designing for accessibility isn't just about compliance—it's about creating experiences that work for everyone. This includes considering users with disabilities, different devices, and varying levels of technical expertise. Inclusive design benefits all users.</p>
            
            <h3>Prototyping and User Testing</h3>
            <p>Prototyping allows designers to test ideas before investing in full development. Combined with user testing, this iterative process helps identify and resolve usability issues early, saving time and resources while improving the final product.</p>
            
            <h2>The Future of Design</h2>
            <p>As technology evolves, so do design opportunities and challenges. Voice interfaces, augmented reality, and AI-powered experiences are creating new possibilities for designers to create innovative and engaging user experiences.</p>
          `
        },
        {
          title: "Digital Marketing Strategies That Drive Real Business Growth",
          discription: "Explore proven digital marketing strategies that go beyond vanity metrics to deliver actual business results. Learn how to create campaigns that generate leads, increase sales, and build lasting customer relationships.",
          keyword: "digital marketing, business growth, lead generation, customer acquisition",
          image: "https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content: `
            <h2>Beyond Vanity Metrics</h2>
            <p>Many businesses focus on vanity metrics like social media followers or website traffic without considering how these translate to actual business value. True digital marketing success is measured by leads generated, sales closed, and customer lifetime value increased.</p>
            
            <h3>Content Marketing That Converts</h3>
            <p>Content marketing is more than just blogging. It's about creating valuable, relevant content that attracts and engages your target audience throughout their buying journey. This includes everything from educational blog posts to case studies and webinars.</p>
            
            <h3>Email Marketing Automation</h3>
            <p>Email marketing remains one of the most effective digital marketing channels. Automation allows businesses to deliver personalized, timely messages that nurture leads and drive conversions. The key is creating email sequences that provide value while moving prospects toward purchase.</p>
            
            <h3>Social Media for Business</h3>
            <p>Social media marketing should be strategic, not just posting for the sake of posting. This means understanding your audience, creating content that resonates with them, and using social platforms to drive traffic to your website and generate leads.</p>
            
            <h2>Measuring and Optimizing</h2>
            <p>Digital marketing success requires continuous measurement and optimization. This means tracking the right metrics, analyzing performance data, and making data-driven decisions to improve campaign effectiveness over time.</p>
          `
        },
        {
          title: "The Rise of Progressive Web Apps: What Developers Need to Know",
          discription: "Discover how Progressive Web Apps (PWAs) are revolutionizing web development and why they're becoming the preferred choice for many businesses. Learn the technical implementation and business benefits.",
          keyword: "PWA, progressive web apps, web development, mobile-first",
          image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          content: `
            <h2>What Are Progressive Web Apps?</h2>
            <p>Progressive Web Apps combine the best features of web and mobile applications. They offer the reach and accessibility of web apps with the performance and user experience of native mobile apps. PWAs can work offline, send push notifications, and be installed on users' devices.</p>
            
            <h3>Key Features and Benefits</h3>
            <p>PWAs offer several advantages over traditional web apps and native mobile apps. They're faster to load, work offline, can be installed without app stores, and are easier to maintain since you only need to update one codebase. This makes them particularly attractive for businesses looking to reach users across multiple platforms.</p>
            
            <h3>Technical Implementation</h3>
            <p>Building a PWA requires implementing several key technologies: service workers for offline functionality, web app manifests for installation capabilities, and HTTPS for security. Understanding these technologies is essential for developers looking to create modern web experiences.</p>
            
            <h3>Business Impact and ROI</h3>
            <p>PWAs can significantly impact business metrics. They typically see higher engagement rates, faster loading times, and better conversion rates compared to traditional web apps. For businesses, this translates to increased user satisfaction and improved bottom-line results.</p>
            
            <h2>The Future of Web Development</h2>
            <p>As browser support for PWA features continues to improve and user expectations evolve, Progressive Web Apps are becoming the standard for modern web development. Developers who master PWA development will be well-positioned for the future of web technology.</p>
          `
        }
      ];
    // if (data.length <= 0) {
    //     <>
    //     <Main data={[]} data2={[]}  />
    // </>
    // }

    return (
        <>
             <SmoothScrollProvider>
                <Main data={data} data2={data2}  />
             </SmoothScrollProvider>
        </>
    );
}
