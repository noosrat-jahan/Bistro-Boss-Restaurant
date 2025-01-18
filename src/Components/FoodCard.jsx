import React, { useContext } from 'react';
import { Card } from "flowbite-react";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';



const FoodCard = ({ item }) => {

  const { user } = useContext(AuthContext)

  const { _id, name, image, price } = item

  const navigate = useNavigate()
  const location = useLocation()


  const axiosSecure = useAxiosSecure()
  // let from = location.state?.from?.pathname || "/";

  const [cart, refetch] = useCart()

  const handleAddtoCart = () => {
    if (user && user.email) {
      // send cart item to the database

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }

      axiosSecure.post('/cart', cartItem)
        .then(res => {
          // console.log(res.data);

          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} is added in your cart`,
              showConfirmButton: false,
              timer: 3500
            });
            // refetch cart to update the cart item count.
            refetch()
          }
        })
    }


    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }

  
  return (
    <div>
      <Card
        className="max-w-sm"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={item.image}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </a>
        <p>{item.recipe}</p>


        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
          <button
            onClick={handleAddtoCart}
            className="btn btn-outline uppercase text-[#BB8506] border-0 border-b-4 border-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </Card>

    </div>
  );
};

export default FoodCard;