
type ProductProps = {
  data: any
}

const Product = ({ data }: ProductProps) => {
  console.log(data)
  return (
    <>
      <h1>hola</h1>
      <h1>{data}</h1>
    </>
  )
}



export const getStaticProps = async (context: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
  const data = await res.json()
  
  return {
    props: {data}
      
       
  
}
}


export const getStaticPaths = async () => {

  const res = await fetch("https://fakestoreapi.com/products/")
  const entries = await res.json()
  const ids = entries.map((item: any) => (item.id))


  const paths = ids.map((item: any) => ({params: { id: item.toString() }}))
  
  return {
    paths,
    fallback: false,
    
  }
}






export default Product