
type Props = {
  product: {
    title: any
  }
}

 const product =  ({ product }: Props) => {

  return (
    <h1>{product.title}</h1>
   
  )
}

export const getStaticPaths = async () => {
  const url = "https://fakestoreapi.com/products/"
  const res = await fetch(url)
  const entries = await res.json()
  const paths = entries.map((entry: any) => ({
    params: { id: entry.id.toString() },
  }))
  
  return {
    paths,
    fallback: false,
    
  }
}

export const getStaticProps = async ({ params: {id} }: { params: {id: string} }) => {
  const url = `https://fakestoreapi.com/products/${id}`
  const res = await fetch(url)
  const product = await res.json()
  console.log('product:', product) 

  return {
    props: {
      product
       
  }
}
}

export default product