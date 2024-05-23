import axios from "axios";
import { useState } from 'react';
import { Link as Routerlink, useNavigate } from 'react-router-dom';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'



export default function AddPrescription() {

    let navigate = useNavigate();
    const [imagedata, setimagedata] = useState({
        image: null
    });

    const [Prescription, setPrescription] = useState({
        Doctor_name: '',
        Issue_Date: ''
    });

    const { Doctor_name, Issue_Date } = Prescription;


    const handlefileChange = (e) => {
        setimagedata({ ...imagedata, image: e.target.files[0] })
    };

    const handleInputChange = (e) => {
        setPrescription({ ...Prescription, [e.target.name]: e.target.value });
    };

    const saveItems = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData();
            formData.append('image', imagedata.image);
            const [formResponse, imageUploadResponse] = await Promise.all([

                axios.post("http://localhost:8080/presupload/detaildocs", Prescription),
                axios.post("http://localhost:8080/image/imageupload", formData),
            ]);
            alert("Item Added Successful");
            console.log('Form data response:', formResponse);
            console.log('Image upload response:', imageUploadResponse);


        } catch (err) {
            alert("Item already Exist");
            return (err);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <form noValidate onSubmit={(e) => saveItems(e)}>
                <div className="space-y-2">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Add Your Prescription Details Below
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Prescription Photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="image"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="image"
                                                    name="image"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={(e) => handlefileChange(e)} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">No single items should have similar name.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Doctor_name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Doctor_name"
                                        id="Doctor_name"
                                        autoComplete="Doctor_name"
                                        requiredvalue={Doctor_name}
                                        onChange={(e) => handleInputChange(e)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="manufacturingdate" className="block text-sm font-medium leading-6 text-gray-900">
                                    Issue_Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="Issue_Date"
                                        name="Issue_Date"
                                        type="date"
                                        autoComplete="Issue_Date"
                                        requiredvalue={Issue_Date}
                                        onChange={(e) => handleInputChange(e)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}