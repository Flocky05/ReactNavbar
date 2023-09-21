import img from "../../assets/contract/facebook1.png"
import img1 from "../../assets/contract/linkedIn.png"
import img2 from "../../assets/contract/twitter.png"
import img3 from "../../assets/contract/youtube1.png"

const Contact = () => {
    return (
        <div className="grid grid-cols-1 justify-items-center p-20 m-20 bg-blue-100 rounded-lg">
            <div>
                <div className="py-4">
                    <h2 className="text-xl lg:text-3xl font-bold text-center">Contract With Us</h2>
                    <p className="text-center lg:font-semibold">TelePhone:1248754</p>
                </div>
                <div className="grid grid-cols-4 gap-5 md:gap-8 lg:gap-14">
                    <img src={img} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Contact;