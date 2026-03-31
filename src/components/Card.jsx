


function Card({src , price , about, location, time})
{
    return(
        <>
        <div className="card">
            {/* image section */}
            <div className="img-box">
                <img src={src} alt="product"/>
                    
               

            </div>

            {/* Details */}
            <div className="des">
                <div className=" favorit">
                <h3 className="price">RS{price} </h3>
                     {/* heart icon */}
                <span className="heart">
                    <i className="fa-regular fa-heart"></i>
                </span>
                </div>
                <p className="about">{about}</p>
                <p className="location">{location}</p>
                <p className="time">{time}</p>
            </div>

        </div>
        </>
    );
}
export default Card













