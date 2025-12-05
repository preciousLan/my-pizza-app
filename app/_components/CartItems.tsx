"use client"

const CartItems = ({cart}) => {
   const {id,image,title,price} = cart

  return (
    <div className="px-4">
    <div className="flex bg-red-100 p-3  border gap-5 justify-between w-full max-w-[700px] mx-auto mt-10">
        <p className="max-w-[300px]">{title}</p>
        <p>{price}</p>
    </div>

    </div>
  )
}

export default CartItems