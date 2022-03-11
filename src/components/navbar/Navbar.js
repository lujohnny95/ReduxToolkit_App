import { ArrowDropDown } from "@material-ui/icons";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
    const name = useSelector(state => state.user.userInfo.name)

    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <span className="logo">JP App</span>
                    <span className="navbarLink">Home</span>
                    <span className="navbarLink">About</span>
                    <span className="navbarLink">Contact</span>
                </div>
                <div className="navbarCentre">
                    <div className="search">
                        <input 
                            type="text"
                            placeholder="search for something..."
                            className="searchInput"
                        />
                    </div>
                </div>
                <div className="navbarRight">
                    <img 
                        className="avatar"
                        src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="avatar"
                    />
                    <span className="navbarName">{name}</span>
                    <ArrowDropDown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;