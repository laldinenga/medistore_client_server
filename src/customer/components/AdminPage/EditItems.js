import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const EditItems = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [item, setItem] = useState({
        name: '',
        price: '',
        manufacturer: '',
        manufacturingdate: '',
        expirydate: '',
        category: ''
    });

    const { name, price, manufacturer, manufacturingdate, expirydate, category } = item;

    useEffect(() => {
        loadItem();
    }, []);

    const loadItem = async()=>{
        const result = await axios.get(`http://localhost:8080/admin/showitem/${id}`);
            setItem(result.data);
            
    };

    const handleInputChange = (e)=>{
        setItem({...item, [e.target.name] : e.target.value});
    };

    const updateItem = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/update/${id}`, item);
        navigate("/admin/viewitems");
    };


    return (
    // <div className='col-sm-8 py-2 px-5 offset'>
    //      <h2 className="mt-5"> Edit Item </h2>
    //     <form onSubmit={(e)=> updateItem(e)}>
    //         <div className='input-group mb-5'>
    //             <label className='input-group-text' htmlFor='name'>Name</label>
    //             <input className='form-control col-sm-6' type='text' name="name" id="name" requiredvalue={name} onChange={(e) => handleInputChange(e)}/>
    //         </div>

    //         <div className='input-group mb-5'>
    //             <label className='input-group-text' htmlFor='price'>Price</label>
    //             <input className='form-control col-sm-6' type='text' name="price" id="price" requiredvalue={price} onChange={(e) => handleInputChange(e)}/>
    //         </div>

    //         <div className='input-group mb-5'>
    //             <label className='input-group-text' htmlFor='manufacturer'>Manufacturer</label>
    //             <input className='form-control col-sm-6' type='text' name="manufacturer" id="manufacturer" requiredvalue={manufacturer} onChange={(e) => handleInputChange(e)}/>
    //         </div>

    //         <div className='input-group mb-5'>
    //             <label className='input-group-text' htmlFor='manufacturingdate'>Manufacturing Date</label>
    //             <input className='form-control col-sm-6' type='date' name="manufacturingdate" id="manufacturingdate" requiredvalue={manufacturingdate} onChange={(e) => handleInputChange(e)}/>
    //         </div>
    //         <div className='input-group mb-5'>
    //             <label className='input-group-text' htmlFor='expirydate'>Expiry Date</label>
    //             <input className='form-control col-sm-6' type='date' name="expirydate" id="expirydate" requiredvalue={expirydate} onChange={(e) => handleInputChange(e)}/>
    //         </div>
    //         <div className='input-group mb-5'>
    //             <label className='input-group-text' htmlFor='department'>Category</label>
    //             <input className='form-control col-sm-6' type='text' name="category" id="category" requiredvalue={category} onChange={(e) => handleInputChange(e)}/>
    //         </div>
    //         <div className="grid grid-cols-12 gap-2">
    //             <div className="col-sm-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //                 <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
    //             </div>

    //             <div className="col-sm-2 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //                 <Link to={"/admin/viewitems"} type="submit" className="btn btn-outline-success btn-lg">Cancel</Link>
    //             </div>
    //         </div>
           

    //     </form>
      
    // </div>
    <div className="max-w-md mx-auto">
        <div className='col-span-8 py-2 px-5'>
            <h2 className="text-3xl mt-5">Edit Item</h2>
            <form onSubmit={(e) => updateItem(e)}>
                <div className='mb-5'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type='text' name="name" id="name" required value={name} onChange={(e) => handleInputChange(e)} className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='price' className='block text-sm font-medium text-gray-700'>Price</label>
                    <input type='text' name="price" id="price" required value={price} onChange={(e) => handleInputChange(e)} className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='manufacturer' className='block text-sm font-medium text-gray-700'>Manufacturer</label>
                    <input type='text' name="manufacturer" id="manufacturer" required value={manufacturer} onChange={(e) => handleInputChange(e)} className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='manufacturingdate' className='block text-sm font-medium text-gray-700'>Manufacturing Date</label>
                    <input type='date' name="manufacturingdate" id="manufacturingdate" required value={manufacturingdate} onChange={(e) => handleInputChange(e)} className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='expirydate' className='block text-sm font-medium text-gray-700'>Expiry Date</label>
                    <input type='date' name="expirydate" id="expirydate" required value={expirydate} onChange={(e) => handleInputChange(e)} className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='category' className='block text-sm font-medium text-gray-700'>Category</label>
                    <input type='text' name="category" id="category" required value={category} onChange={(e) => handleInputChange(e)} className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Save</button>
                    <Link to={"/admin/viewitems"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Cancel</Link>
                </div>
            </form>
        </div>
    </div>
    )

}

export default EditItems;
