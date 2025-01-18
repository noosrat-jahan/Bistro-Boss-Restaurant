import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaSpoon } from 'react-icons/fa6';
import { FaUtensils, FaUtensilSpoon } from 'react-icons/fa';

const AddItems = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className='py-10'>
                <SectionTitle
                    heading={"ADD AN ITEM"} subHeading={"What's new?"}></SectionTitle>
            </div>

            <div className='w-3/4 mx-auto bg-[#F3F3F3] p-5 mb-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    {/* name field  */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe name"
                            className="input input-bordered w-full " />
                    </label>

                    {/* category  */}
                    <div className='flex gap-3'>
                        {/* category  */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled selected>Category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </label>

                        {/* price  */}

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text"> Price*</span>
                            </div>
                            <input
                                {...register("price", {required: true})}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* details  */}

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea
                            {...register("recipe")}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details">
                        </textarea>

                    </label>

                    {/* file upload  */}
                    <div className='form-control w-full'>
                        <input
                            {...register("image", {required: true})}
                            type="file"
                            className="file-input w-full"
                        />
                    </div>

                    {/* submit form button  */}
                    <button type="submit" className='flex gap-3 items-center bg-gradient-to-r from-[#835D23] to-[#B58130] text-white py-2.5 px-3 rounded'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;