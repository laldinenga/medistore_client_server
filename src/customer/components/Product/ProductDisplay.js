

// const products = [
//     {
//         id: 1,
//         name: 'Earthen Bottle',
//         href: '#',
//         price: '$48',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//         id: 2,
//         name: 'Nomad Tumbler',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//         id: 3,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 4,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 5,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 6,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 7,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 8,
//         name: 'Machined Mechanical Pencil',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     // More products...
// ]

import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

// export default function ProductDisplay() {

//     const [products, setProducts] = useState();

//     useEffect(() => {
//         axios.get("http://localhost:8080/admin/showitems").then((response) => {
//             setProducts(response.data.products);
//         })
//     }, [])
export default function ProductDisplay() {
    const[products, setProducts] = useState([]);

    useEffect(() =>{
        loaditems();
    }, []);

    const loaditems = async()=>{
        const result = await axios.get("http://localhost:8080/admin/showitems", {
            validateStatus:() => {
                    return true;
                }
            }
        );
        if (result.status === 302) {
            setProducts(result.data);
        }
        console.log(products.filepath);
            
    };

    // href={product.href}
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products?.map((product) => (
                        <a key={product.id} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src= {`/Images/${product.name}.jpg`}
                                    className="h-25 w-25 object-contain object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-2 text-lg font-medium text-gray-900">${product.price}</p>
                            <Link to="/shoppingcart" className= " mt-2 bg-red-500 hover:bg-red-700 text-white font-bold pt-1 py-2 px-2 rounded"
                            type="submit">Add to Cart</Link>
                            {/* <a className= " mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" href="/">Add to Cart</a> */}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
} 


