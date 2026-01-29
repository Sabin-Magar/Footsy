import p_img1 from './p_img1.jpeg'
import p_img2_1 from './p_img2_1.jpeg'
import p_img2_2 from './p_img2_2.jpeg'
import p_img3 from './p_img3.jpeg'
import p_img4 from './p_img4.jpeg'
import p_img5 from './p_img5.jpeg'
import p_img6 from './p_img6.jpeg'
import p_img7 from './p_img7.jpeg'
import p_img8 from './p_img8.jpeg'
import p_img9 from './p_img9.jpeg'
import p_img10 from './p_img10.jpeg'
import p_img11 from './p_img11.jpeg'
import p_img12 from './p_img12.jpeg'
import p_img13 from './p_img13.jpeg'
import p_img14 from './p_img14.jpeg'
import p_img15 from './p_img15.jpeg'
import p_img16 from './p_img16.jpeg'
import p_img17 from './p_img17.jpeg'
import p_img18 from './p_img18.jpeg'
import p_img19 from './p_img19.jpeg'
import p_img20 from './p_img20.jpeg'
import p_img21 from './p_img21.jpeg'

import logo from './logo.png'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import esewa_logo from './esewa_logo.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    esewa_logo
}

export const products = [
    {
        _id: "aaaaa",
        name: "Nike Air Max 97",
        description: "Light-weight Athletic Shoes. Sleek and stylish running shoes with lightweight cushioning for all-day comfort.",
        price: 100,
        image: [p_img1],
        category: "Nike",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Nike Zoom Vomero 5",
        description: "A retro-inspired trainer featuring breathable mesh and responsive cushioning.",
        price: 200,
        image: [p_img2_1,p_img2_2],
        category: "Nike",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "New Balance M1906AD Tech Explosion",
        description: "Modern lifestyle sneakers combining vintage aesthetics with advanced support.",
        price: 220,
        image: [p_img3],
        category: "New Balance",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "New Balance M's 990v6 Grey",
        description: "A classic grey runner offering premium comfort and timeless design.",
        price: 110,
        image: [p_img4],
        category: "New Balance",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Nike P6000",
        description: "Retro running-inspired sneakers with breathable mesh and durable overlays.",
        price: 130,
        image: [p_img5],
        category: "Nike",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "ASICS Gel kayano 14",
        description: "High-performance sneakers known for their stability, comfort, and heritage look.",
        price: 140,
        image: [p_img6],
        category: "ASICS",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Vans - Potato",
        description: "Casual low-top sneakers with a unique twist on the classic Vans silhouette.",
        price: 190,
        image: [p_img7],
        category: "Vans",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716621542448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Nike Air Max",
        description: "Versatile everyday sneakers blending sporty design with visible Air cushioning.",
        price: 140,
        image: [p_img8],
        category: "Nike",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "Converse Chuck70 Core High Top",
        description: "Iconic high-top sneakers with vintage detailing and durable canvas build.",
        price: 100,
        image: [p_img9],
        category: "Converse",
        subCategory: "High",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Converse Chuck70 Vintage Preto",
        description: "Retro-style black Converse with premium canvas and a timeless silhouette.",
        price: 110,
        image: [p_img10],
        category: "Converse",
        subCategory: "High",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Nike Air Jordan 1 Retro High OG Travis Scott",
        description: "Limited-edition Jordans featuring reversed Swoosh and signature Travis Scott flair.",
        price: 120,
        image: [p_img11],
        category: "Nike",
        subCategory: "High",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Vans Old Skool",
        description: "Classic skate shoes with suede panels and the signature side stripe.",
        price: 150,
        image: [p_img12],
        category: "Vans",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "ASICS Gel NYC",
        description: "Streetwear-ready sneakers fusing modern design with ASICS performance tech.",
        price: 130,
        image: [p_img13],
        category: "ASICS",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Adidas Samba",
        description: "Legendary low-profile trainers with soft leather and retro soccer-inspired design.",
        price: 160,
        image: [p_img14],
        category: "Adidas",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "New Balance - 530",
        description: "Comfort-driven lifestyle sneakers with ABZORB cushioning and 90s appeal.",
        price: 140,
        image: [p_img15],
        category: "New Balance",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Onitsuka Tiger Mexico 66",
        description: "Heritage sneakers combining sleek Japanese design and vintage athletic charm.",
        price: 170,
        image: [p_img16],
        category: "ASICS",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Adidas Campus",
        description: "Classic suede sneakers delivering casual comfort and old-school style.",
        price: 150,
        image: [p_img17],
        category: "Adidas",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Reebok Club C Vintage",
        description: "Clean, retro tennis-inspired shoes with soft leather and timeless appeal.",
        price: 180,
        image: [p_img18],
        category: "Reebok",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Vans-Era Black",
        description: "Minimal black skate shoes with a sturdy canvas upper and cushioned sole.",
        price: 160,
        image: [p_img19],
        category: "Vans",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Nike Air Max-1 x mica grey",
        description: "Refined Air Max 1 edition featuring premium materials and subtle grey tones.",
        price: 190,
        image: [p_img20],
        category: "Nike",
        subCategory: "Low",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Nike Air Jordan 1 High",
        description: "Iconic high-top sneakers offering legendary style and supportive fit.",
        price: 170,
        image: [p_img21],
        category: "Nike",
        subCategory: "High",
        sizes: ["39", "40", "41", "42", "43", "44"],
        date: 1716634345448,
        bestseller: false
    }

]