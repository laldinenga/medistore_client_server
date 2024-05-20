import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaEye, FaTrashAlt, FaEdit} from "react-icons/fa";
import {Link} from "react-router-dom";
import Search from "../common/Search";

const Viewitem = () => {
    const[items, setItems] = useState([]);
    const [search, setSearch] = useState("");

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
            setItems(result.data);
        }
            
    };

    const handleDelete = async(id) =>{
        await axios.delete(`http://localhost:8080/admin/delete/${id}`);
        loaditems();
    };

    return (
        <section>
            <Search search={search} setSearch={setSearch}/>
            <table className=" table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Manufacturer</th>
                        <th className="px-4 py-2">Manufacturing Date</th>
                        <th className="px-4 py-2">Expiry Date</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2" colSpan="3">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center px-4 py-2">
                    {items.filter((st) => st.name.toLowerCase().includes(search))
                    .map((item, index)=>(
                        <tr key={item.id}>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td className="px-4 py-2">{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.manufacturer}</td>
                            <td>{item.manufacturingdate}</td>
                            <td>{item.expirydate}</td>
                            <td className="px-4 py-2">{item.category}</td>
                            <td className="px-4 py-2">
                                <img src= {`/Images/${item.name}.jpg`}  
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            </td>
                            <td className="mx-10">

                                <Link to={`/item-profile/${item.id}`} className="btn btn-info">
                                     <FaEye/>
                                </Link>
                            </td>
                            <td className="mx-10">

                                <Link to={`/admin/viewitems/edititem/${item.id}`} className="btn btn-warning">
                                     <FaEdit/>
                                </Link>
                            </td>
                            <td className="mx-10">

                                <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>
                                     <FaTrashAlt/>
                                </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Viewitem;
