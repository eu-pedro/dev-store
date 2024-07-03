import data from '../data.json'

export async function GET() {
  const featuredProdutc = data.products.filter((product) => product.featured)

  return Response.json(featuredProdutc)
}
