import { ProductButtons, ProductImage, ProductTitle } from "../components"
 import ProductCard from '../components';

const product = {
    id:'1',
    title: 'Coffee Mug - 01',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>
                
            <ProductCard product={ product }>
                <ProductImage />
                <ProductTitle />
                <ProductButtons   />
            </ProductCard>

            <ProductCard product={ product }>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>
        </div>
    </div>
  )
}
