import './profile.css';

function Profile() {
  return (
    <div id="wrapper">
      <section id="sidebar">
        <div className="white-label"></div>
        <div id="sidebar-nav">
          <ul>
            <li className="active">
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-dashboard"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-desktop"></i> My Website
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-usd"></i> Ecommerce
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-pencil-square-o"></i> My Blog
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-sitemap"></i> SEO Tools
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-line-chart"></i> Reporting
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-comments-o"></i>Social Marketing
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-map-marker"></i> Get Traffic
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-users"></i> Employees
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-calendar-o"></i> Reservations
              </a>
            </li>
            <li>
              <a href="https://sladiver.netlify.app/">
                <i className="fa fa-calendar"></i> Calendar
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="content">
        <div id="header">
          <div className="header-nav">
            <div className="menu-button">
              {/*<i class="fa fa-navicon"></i>*/}
            </div>
            <div className="nav">
              <ul>
                <li className="nav-settings">
                  <div className="font-icon">
                    <i className="fa fa-tasks"></i>
                  </div>
                </li>
                <li className="nav-mail">
                  <div className="font-icon">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  </li>
                <li className="nav-calendar">
                  <div className="font-icon">
                    <i className="fa fa-calendar"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-profile">
            <div className="profile-name">John Doe</div>
          </div>
        </div>
        <div id="main">
          <h1>Welcome to my website!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            malesuada lorem a massa ultrices molestie. Sed efficitur felis non
            sem faucibus, vel dignissim justo auctor. Nunc volutpat est id
            ipsum efficitur, at mollis enim fringilla. Integer id tellus
            dignissim, efficitur tellus nec, sagittis tellus. Duis at tortor
            placerat, sollicitudin mauris in, rhoncus enim. In suscipit
            tincidunt enim vel rhoncus. Donec sagittis enim eu metus dapibus
            dignissim. Pellentesque eu sem nec metus blandit tincidunt. Sed
            dignissim, nulla vel lobortis bibendum, neque dui molestie orci,
            a tincidunt lorem massa et arcu. Curabitur ultrices sapien a nisi
            ultrices tincidunt. Mauris lacinia magna vel dolor rhoncus, eu
            vehicula nisl molestie. Nullam a luctus massa.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Profile;