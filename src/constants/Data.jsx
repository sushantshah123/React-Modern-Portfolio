import {BsCodeSlash, BsWordpress} from "react-icons/bs"
import {FcBusinessman} from "react-icons/fc"
import blog from "../assets/images/blog.png"
import ecommerce from "../assets/images/ecommerce.png"
import food from "../assets/images/food.png"
import travel from "../assets/images/travel.png"
import portfolio from "../assets/images/portfolio.png"
import typing from "../assets/images/typing.png"

export const data = [
    {
        id:1000,
        title:"Home",
        link:"home"
    },
    {
        id:1001,
        title:"Features",
        link:"features"
    }, {
        id:1002,
        title:"Projects",
        link:"projects"
    }, {
        id:1003,
        title:"Resume",
        link:"resume"
    },
    {
        id:1004,
        title:"Testimonial",
        link:"testimonial"
    }, {
        id:1005,
        title:"Contact",
        link:"contact"
    },
]

export const features = [
    {
        id:1,
        icon:<BsCodeSlash/>,
        title:"MERN Developer",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        id:2,
        icon:<BsWordpress/>,
        title:"Wordpress Developer",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        id:3,
        icon:<FcBusinessman/>,
        title:"Trainer",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
]


export const projects = [
    {
        id:1,
        image:blog,
        title:"Blog App",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id:2,
        image:ecommerce,
        // link:"https://github.com/sushantshah123/Ecommerce-React-Strapi",
        title:"Ecommerce App",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id:3,
        image:typing,
        title:"Typing Speed Game",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id:4,
        image:travel,
        title:"Travel App",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id:5,
        image:portfolio,
        title:"Modern Portfolio",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id:6,
        image:food,
        title:"Food Delivery App",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
]