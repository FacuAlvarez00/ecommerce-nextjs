import "../globals.css"

const fetchPost = () => {
    return fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
}


export default async function products(){
    const products = await fetchPost()
  return (

   <div className="product__holder">
     <h1>Page products</h1>

      {products.slice(0, 3).map((product: any) => ( 
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
        </div>
      ))}


    </div>
  )
      }