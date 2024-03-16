function Student({student: {name, image, email}}) {
    return (
      <div className='card'>
         <div className="imgwrapper">
              <img src={image} />
         </div>
          <h2>{name}</h2>
          <p>{email}</p>
  
      </div>
    )
}
export default Student
