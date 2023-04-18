import { GetStaticProps } from "next"


type ProductProps = {
  data: any
}


const Product = ({ data }: ProductProps) => {
  


  console.log("data", data)
  return (
    <>
      <h1>hola</h1>
      {/* <h1>{data.title}</h1>  */}
    </>
  )
}





export const getStaticPaths = async () => {

  const res = await fetch("https://fakestoreapi.com/products/")
  const entries = await res.json()
  const ids = entries.map((item: any) => (item.id))
  const paths = ids.map((item: any) => ({params: { id: item.toString() }}))
  console.log("paths", paths)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const id = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await res.json()

  console.log("params", params)
  console.log("id", id)
  return {
    props: data,

  }
  
}


export default Product