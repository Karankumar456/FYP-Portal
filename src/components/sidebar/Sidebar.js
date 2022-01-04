import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Portal</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>

        <h2>Hospital</h2>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">View All Hospital</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Add New Hospital</a>
        </div>
        <hr></hr>

        <h2>Super Admin</h2>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Organ</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">View All Organ</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Add New Organ</a>
        </div>
        <h2>User's</h2>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">View All Organ</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Register As Donar List</a>
        </div>
        
        <h2>Report's</h2>
      
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Hospital Report's</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">User Report's</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Register Donar Report's</a>
        </div>
      
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
