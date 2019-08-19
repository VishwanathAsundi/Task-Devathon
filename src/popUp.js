import React, { useRef, useEffect } from 'react';

function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            document.querySelector(".popup").style.display = "none";
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}
const PopUp = (props) => {
    const { product } = props;
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div class="popup border bounceIn bg-white" ref={wrapperRef}>
            <div class="row">
                <div class="col-md-6">
                    <div class="product-img">
                        <img src={product.src} alt="" />
                    </div>
                    <div class="product-details pt-3">
                        <form>
                            <div class="border-bottom ">
                                <label class="set-opacity mb-0">Product Title</label>
                                <input type="text" name="productTitle" class="border-0 custom-input"
                                    value={product.productTitle} onChange={(e) => props.handleChange(e)} />
                            </div>
                            <div class="border-bottom mt-2">
                                <label class="set-opacity mb-0">Price</label><br />
                                <input type="text" class="border-0 custom-input" name="price"
                                    value={product.price} onChange={(e) => props.handleChange(e)} />
                            </div>
                            <div class="border-bottom mt-2">
                                <label class="set-opacity mb-0">Offer Price</label>
                                <input type="text" class="border-0 custom-input" name="offerPrice"
                                    placeholder="Enter Offer Price"
                                    value={product.offerPrice}
                                    onChange={(e) => props.handleChange(e)} />
                            </div>
                            <div class="border-bottom mt-2">
                                <label class="set-opacity mb-0">Shipping Cost</label>
                                <input type="number" class="border-0 custom-input" name="shippingCost"
                                    value={product.shippingCost}
                                    onChange={(e) => props.handleChange(e)} />
                            </div>
                            <div class="border-bottom mt-2">
                                <label class="set-opacity mb-0">Inventory</label>
                                <input type="number" class="border-0 custom-input" name="inventory"
                                    value={product.inventory}
                                    onChange={(e) => props.handleChange(e)} />
                            </div>
                            <div class="border-bottom mt-2">
                                <label class="set-opacity mb-0">Description</label>
                                <input type="text" class="border-0 custom-input"
                                    placeholder="Enter Description for Profuct" name="description"
                                    value={product.description}
                                    onChange={(e) => props.handleChange(e)} />
                            </div>

                        </form>
                    </div>
                </div>
                <div class="col-md-6  bg-white border border-top-0 border-bottom-0">
                    <div class="add-img text-center">
                        <div class="img-box">
                            <img src="assets/images/add-pic.jpg" alt="" />
                            <p class="set-opacity">Add More Photos</p>
                        </div>

                    </div>
                    <div class="variations">
                        <p class="plus">+</p>
                        <p class="set-opacity">Have variations to your product like Size,
                                                    Color and more?</p>
                        <button class="btn btn-secondary btn-block next-btn">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopUp;