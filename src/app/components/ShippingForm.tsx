import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { shippingInfoSchema, ShippingFormInputs } from '../types'
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>(
        {
            resolver: zodResolver(shippingInfoSchema),
        }
    )

    const router = useRouter()
    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", { scroll: false })
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='text-xs text-gray-500 font-medium'>Name</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='name' {...register("name")} placeholder='John Doe' />
                {errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-xs text-gray-500 font-medium'>Email</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='email' {...register("email")} placeholder='john@example.com' />
                {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="phone" className='text-xs text-gray-500 font-medium'>Phone Number</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='phone' {...register("phone")} placeholder='+374654655' />
                {errors.phone && <p className='text-xs text-red-500'>{errors.phone.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="address" className='text-xs text-gray-500 font-medium'>Address</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='address' {...register("address")} placeholder='123 Main Street' />
                {errors.address && <p className='text-xs text-red-500'>{errors.address.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="address" className='text-xs text-gray-500 font-medium'>City</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='city' {...register("city")} placeholder='Yerevan' />
                {errors.city && <p className='text-xs text-red-500'>{errors.city.message}</p>}
            </div>
            <button
                type='submit'
                className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex justify-center items-center gap-2">
                Continue
                <ArrowRight className="w-3 h-3" />
            </button>
        </form>
    )
}

export default ShippingForm