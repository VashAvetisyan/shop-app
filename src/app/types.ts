import { z } from 'zod';

export type ProductType = {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsType = CartItemType[];

export const shippingInfoSchema = z.object({
    name:z.string().min(1, "Name is required!"),
    email: z.string().min(1, "Email is required!"),
    phone: z.string().min(7, "phone number should be at least 7 characters!").max(15, "phone number should be at most 15 characters").regex(/^[0-9]+$/, "phone number should contain only digits!"),
    address: z.string().min(1, "Addres is required!"),
    city: z.string().min(1, "City is required!")
})

export type ShippingFormInputs = z.infer<typeof shippingInfoSchema>


export const paymentInfoSchema = z.object({
    cardHolder:z.string().min(1, "Card holder name is required!"),
    cardNumber: z.string().min(16, "Card number is required").max(16, "Card number is required!"),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/,"Expiration date must be in MM/YY format!"),
    ccv: z.string().min(3, "CCV is required").max(3, "CCV is required!")
})

export type PaymentFormInputs = z.infer<typeof paymentInfoSchema>


export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated: boolean;
}

export type CartsStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (productId: CartItemType) => void;
    clearCart: () => void;
}