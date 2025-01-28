import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart = () => {


  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({ })

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {

        setShoppingCart(oldShoppingCart => {
            type NewType = ProductInCart

            //Lo busco, y si no está, agrego uno nuevo
            const productInCart: NewType = oldShoppingCart[product.id] || { ...product, count: 0}
            
            if(Math.max(productInCart.count + count, 0) > 0 ){
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //En caso contrario, borro el artículo.
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;

            return {
                ...rest
            }

           
        })


    }

    return {
        shoppingCart,
        onProductCountChange,

    }



}