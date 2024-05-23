// import React from 'react'
// import { comment } from "postcss"
import BlogCart  from "./BlogCart"

const data = [
    {
        img: "https://www.thesprucepets.com/thmb/-cGrh2a5TCHiw0_nhwzi-S1uKXY=/2119x0/filters:no_upscale():strip_icc()/preparing-natural-food-for-pets-1137592020-52ac6351f68e499fb22594085222ca60.jpg",
        title: "How to plan diet for your dog",
        link: "https://www.akc.org/expert-advice/nutrition/"
    },
    {
        img: "https://animalcarecentersmyrna.com/wp-content/uploads/2020/08/annual-check-ups.jpeg",
        title: "Getting your dog checked is must",
        link: "https://www.aspca.org/pet-care/general-pet-care/routine-veterinary-care"
    },
    {
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/dog-yoga-e1657077155550.jpg?quality=82&strip=1",
        title: "Do dogs really need to exercise??",
        link: "https://www.akc.org/expert-advice/health/exercise-for-dogs/"
    }
];


const BlogSection = () => {
    return (
      <div className="container pt-16">
          <h2 className="font-bold text-2xl">Latest News</h2>
          <p className="text-gray-500">
              Present posts in a way to highlight interesting moments of your blog.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
              {data.map((el) => (
                  <BlogCart
                  key={el.title}
                  img={el.img}
                  title={el.title}
                  link={el.link}
                  />
              ))}
          </div>
      </div>
    )
  }
  
  export default BlogSection;
  
