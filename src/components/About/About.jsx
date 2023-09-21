
import img from "../../assets/about2.avif"
const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-4">
                <h3 className="text-3xl font-bold">CyberTech Solution</h3>
                <p className="py-4">Since 1990, CyberTech Solutions, LLC has been providing embedded systems, rapid prototyping, agricultural systems, mobile apps, and custom software development solutions. The mission statement of CyberTech Solutions is simple: Answering the complex needs of the market with custom service and design.</p>
                <p className="py-4">CyberTech Solutions combined engineering expertise in cost effective solutions and our flexibility in design concepts, offers you the many options needed to remain competitive and profitable. Each unique solution offers the best matched technology, rapid return on your investment and rock solid reliability.  CyberTech Solutions is an Innovation Deliverer.</p>
                <button className="bg-blue-500 px-6 py-2 rounded-lg text-white">Lear More</button>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default About;