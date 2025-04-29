export default async function ProdId({params}:{
    params:Promise<{prodId:String}>
}){
    const prodId = (await params).prodId
    return <h1>detya{prodId}</h1>
}