export default async  function reviewsId({params}:{
    params: Promise <{prodId:String,reviewId:String}>
}){
    const {prodId,reviewId} = await params
    return <h1>reviews{reviewId} prod{prodId}</h1>
}