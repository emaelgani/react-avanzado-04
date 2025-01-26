import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard} from "../components/index"


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}




export const ShoppingPage = () => {
  return (
    <div>
        Shopping Store
        <hr/>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        {/* <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/>
        <ProductCard product={product}/> */}

            {/* <ProductCard product={product}>
                <ProductCard.Image  />
                <ProductCard.Title title={''}/>
                <ProductCard.Buttons increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    } } counter={0} />
            </ProductCard> */}

            <ProductCard product={product}>
                <ProductCard.Image  />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product}>
                <ProductImage  />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}
