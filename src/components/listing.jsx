import { FcRating } from "react-icons/fc";
import { MdOutlineDiscount } from "react-icons/md";
import listingData from "../data/listingdata";
function ListingItem({ image, title, description, price, rating, discount }) {
    return (
        <div className="listing-item">
            <div className="listing-image">
                <img src={image} />
                <div className="listing-rating">
                    <FcRating />
                   {rating > 0 && <span>{rating}</span>} 
                     {rating === 0 && <span>Not Rated</span>}
                </div>
                <div className="listing-discount">
                    <MdOutlineDiscount />
                    <span>{discount}</span>
                </div>
            </div>
            <div className="listing-details">
                <div className="listing-title">
                    <h3>{title}</h3>
                </div>
                <div className="listing-description">
                    <p>{description}</p>
                </div>
                <div className="listing-price">
                    <p className="price">${price}</p>
                </div>
            </div>
        </div>
    );

}

function Listing() {
    return(
        <section className="listing-container">
            {listingData.map((listing) => {
                return (
                    <ListingItem 
                        key={listing.title || "/placeholder-image.webp"} 
                        image={listing.image} 
                        title={listing.title} 
                        description={listing.description} 
                        price={listing.price} 
                        rating={listing.rating} 
                        discount={listing.discount} 
                    />
                );
            })}
        </section>
    )
}

export default Listing;