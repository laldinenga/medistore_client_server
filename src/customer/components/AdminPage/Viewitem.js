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
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Manufacturer</th>
                        <th>Manufacturing Date</th>
                        <th>Expiry Date</th>
                        <th>Category</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {items.filter((st) => st.name.toLowerCase().includes(search))
                    .map((item, index)=>(
                        <tr key={item.id}>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.manufacturer}</td>
                            <td>{item.manufacturingdate}</td>
                            <td>{item.expirydate}</td>
                            <td>{item.category}</td>
                            <td className="mx-5">

                                <Link to={`/item-profile/${item.id}`} className="btn btn-info">
                                     <FaEye/>
                                </Link>
                            </td>
                            <td className="mx-5">

                                <Link to={`/edit-item/${item.id}`} className="btn btn-warning">
                                     <FaEdit/>
                                </Link>
                            </td>
                            <td className="mx-5">

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
