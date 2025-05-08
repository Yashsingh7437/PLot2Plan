import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
    return (
        <div
            className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
        >
            <div className="flex justify-between w-full">
                <div className="flex items-start">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IoIjfdbAD717N5P-n7mjdf6s3r0nZFkhbg&s"
                        alt=""
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIgsax0oPnT7EW6EkJyHoDcPzq0SZH7WaHQ&s"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="https://www.vervebranding.com/images/vbnpage/portfolio/logos/realestate10.jpg"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700,h_400/https://assets.designhill.com/design-blog/wp-content/uploads/2015/12/website-design.jpg"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyV1_8KgsRWhZ1NvSAEBvto-Km3ChjvXvdg&s"
                        style={{ width: "150px", objectFit: "contain" }}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsored;