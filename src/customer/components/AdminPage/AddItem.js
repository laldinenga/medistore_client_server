import axios from "axios";
import { useState } from 'react';
import { Link as Routerlink, useNavigate } from 'react-router-dom';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'



export default function AddItem() {

  let navigate = useNavigate();
  const [imagedata, setimagedata] = useState({
    image: null
  });

  const [itemsDetail, setItems] = useState({
    name: '',
    price: '',
    manufacturer: '',
    manufacturingdate: '',
    expirydate: '',
    category: ''
  });

  const { name, price, manufacturer, manufacturingdate, expirydate, category } = itemsDetail;


  const handlefileChange = (e) => {
    setimagedata({ ...imagedata, image: e.target.files[0] })
  };

  const handleInputChange = (e) => {
    setItems({ ...itemsDetail, [e.target.name]: e.target.value });
  };

  const saveItems = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append('image', imagedata.image);
      const [formResponse, imageUploadResponse] = await Promise.all([

        axios.post("http://localhost:8080/admin/additem", itemsDetail),
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
              Add Your Product Detail below
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Catalog Photo
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
                  name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="Product-name"
                    requiredvalue={name}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="Product-price"
                    requiredvalue={price}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="manufacturer" className="block text-sm font-medium leading-6 text-gray-900">
                  Manufacturer
                </label>
                <div className="mt-2">
                  <input
                    id="manufacturer"
                    name="manufacturer"
                    type="text"
                    autoComplete="manufacturer"
                    requiredvalue={manufacturer}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="manufacturingdate" className="block text-sm font-medium leading-6 text-gray-900">
                  Manufacturing Date
                </label>
                <div className="mt-2">
                  <input
                    id="manufacturingdate"
                    name="manufacturingdate"
                    type="date"
                    autoComplete="manufacturingdate"
                    requiredvalue={manufacturingdate}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="expirydate" className="block text-sm font-medium leading-6 text-gray-900">
                  Expiry Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="expirydate"
                    id="expirydate"
                    autoComplete="expirydate"
                    requiredvalue={expirydate}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="category"
                    id="category"
                    autoComplete="category"
                    requiredvalue={category}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}