import { useState } from "react"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard} from "../components/index"

import '../styles/custom-styles.css'
import { products } from "../data/products"

const product = products[0]

export const ShoppingPage = () => {


    return (
        <div>
            Shopping Store
            <hr/>

                <ProductCard 
                    key={product.id} 
                    product={product} 
                    className="bg-dark text-white"
                    initialValues ={{
                        count: 4,
                        maxCount: 10,
                    }}>
                        {
                            ({reset, count, increaseBy, isMaxCountReached, maxCount}) => (
                                <>
                                    <ProductImage className="custom-image"/>
                                    <ProductTitle className="text-bold" />
                                    <ProductButtons className="custom-buttons" />
                                    <h1>{}</h1>

                                    <button onClick={reset}>Reset</button>
                                    <button onClick={() => increaseBy(-2)}>-2</button>

                                    { !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
                                    <span>{count} - {maxCount}</span>
                                </>
                            )
                        }
                </ProductCard>
        </div>
    )
}
