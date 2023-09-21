import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="grid grid-cols-1">
            <h3 className="text-2xl font-bold text-left text-black">Sidebar</h3>
            <div className="felx justify-between bg-white px-4 py-2 text-gray-700 my-2 w-full">
                <p>Item 1</p>
                <FaChevronDown></FaChevronDown>
            </div>
            <div className="felx justify-between bg-white px-4 py-2 text-gray-700  my-2">
                <p>Item 2</p>
                <FaChevronDown></FaChevronDown>
            </div>
            <div className="felx justify-between bg-white px-4 py-2 text-gray-700  my-2">
                <p>Item 3</p>
                <FaChevronDown></FaChevronDown>
            </div>
        </div>
    );
};

export default Sidebar;