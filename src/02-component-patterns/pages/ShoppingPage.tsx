import { useState } from "react"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard} from "../components/index"

import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"



export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            Shopping Store
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

            { products.map(product => (

                <ProductCard 
                    key={product.id} 
                    product={product} 
                    className="bg-dark text-white"
                    value={shoppingCart[product.id]?.count || 0}
                    onChange={(event) => onProductCountChange(event)}>
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

            ))}

            </div>


            <div className="shopping-cart">
              

                { Object.entries(shoppingCart).map( ([key, product])  => {
                        return (
                            <ProductCard 
                                key={key} 
                                product={product} 
                                style={{width: '100px'}} 
                                className="bg-dark text-white"
                                onChange={(event) => onProductCountChange(event)}
                                value={product.count}
                            >
                            <ProductImage className="custom-image"/>
                            <ProductButtons className="custom-buttons" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}/>
                            </ProductCard>

                        )
                    }
                )}
                </div>

           
        </div>
    )
}
