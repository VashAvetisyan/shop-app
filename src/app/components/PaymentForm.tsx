import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ShoppingBagIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { PaymentFormInputs, paymentInfoSchema } from "../types";
import Image from "next/image";

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>(
        {
            resolver: zodResolver(paymentInfoSchema),
        }
    )

    const router = useRouter()
    const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {

    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>
            <div className='flex flex-col gap-1'>
                <label htmlFor="card" className='text-xs text-gray-500 font-medium'>Name</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='card' {...register("cardHolder")} placeholder='John Doe' />
                {errors.cardHolder && <p className='text-xs text-red-500'>{errors.cardHolder.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="cardNumber" className='text-xs text-gray-500 font-medium'>Card Number</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='cardNumber' {...register("cardNumber")} placeholder='1234 5678 9012 3456' />
                {errors.cardNumber && <p className='text-xs text-red-500'>{errors.cardNumber.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="expirationDate" className='text-xs text-gray-500 font-medium'>Expiration Date</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='expirationDate' {...register("expirationDate")} placeholder='MM/YY' />
                {errors.expirationDate && <p className='text-xs text-red-500'>{errors.expirationDate.message}</p>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="ccv" className='text-xs text-gray-500 font-medium'>ccv</label>
                <input type="text" className='border-b border-gray-200 py-2 outline-none text-sm' id='ccv' {...register("ccv")} placeholder='123' />
                {errors.ccv && <p className='text-xs text-red-500'>{errors.ccv.message}</p>}
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
                <Image src="/cards.png" alt="klarna" width={50} height={25} className="rounded-md" />
                <Image src="/stripe.png" alt="klarna" width={50} height={25} className="rounded-md" />
            </div>
            <button
                type='submit'
                className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex justify-center items-center gap-2">
                Continue
                <ShoppingBagIcon className="w-3 h-3" />
            </button>
        </form>
    )
}

export default PaymentForm