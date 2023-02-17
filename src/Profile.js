import './Profilenew.css';



function Profile() {

    return (
<div class="app-container">
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">SLA Dive</p>
  
    </div>
    <div class="app-header-right">
      <button class="mode-switch" title="Switch Theme">
        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      
      <button class="profile-btn">
        <span>Best Team</span>
      </button>
    </div>
    <button class="messages-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    </button>
  </div>
  <div class="app-content">
    <div class="app-sidebar">
      <a href="https://sladiver.netlify.app/" class="app-sidebar-link active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg>
      </a>
      
      <a href="https://sladiver.netlify.app/" class="app-sidebar-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" /></svg>
      </a>
   
    </div>
    <div class="projects-section">
      <div class="projects-section-header">
        <p>Your App connections</p>
        <p class="time">🚀</p>
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <div class="item-status">
            <span class="status-number">3</span>
            <span class="status-type">Simple steps to connect to SLA Dive</span>
          </div>
        </div>
        <div class="view-actions">
       
          <button class="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="3" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      <div class="project-boxes jsGridView">
        <div class="project-box-wrapper">
          <div class="project-box"  style={{ backgroundColor: '#fee4cb' }}>
            <div class="project-box-header">
              <span> </span>
              <div class="more-wrapper">
                <button class="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">Connect Intercom</p>
          <p class="box-content-subheader">Secure Oauth2 </p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header"> </p>
          <div class="box-progress-bar">
            <span class="box-progress"  style={{ width: '100%',backgroundColor: '#ff942e' }}></span>
          </div>
          <p class="box-progress-percentage"> </p>
        </div>
        <div class="project-box-footer">
        <button class="days-left" style={{ backgroundColor: '#ff942e' }} onClick={() => window.open('https://sladive.netlify.app/', '_blank')}>
            Intercom sign in
            </button>
           
        </div>
      </div>
    </div>
    <div class="project-box-wrapper">
      <div class="project-box" style={{ backgroundColor: '#e9e7fd'}}>
        <div class="project-box-header">
          <span> </span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">Add to Slack</p>
          <p class="box-content-subheader">Secure Oauth2</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header"> </p>
          <div class="box-progress-bar">
            <span class="box-progress" style={{width: '100%', backgroundColor: '#4f3ff0'}}></span>
          </div>
          <p class="box-progress-percentage"> </p>
          <div class="project-box-footer">
        <button class="days-left" style={{ backgroundColor: '#ff942e' }} onClick={() => window.open('https://sladive.tk/slack', '_blank')}>
            Add to Slack
            </button>
       
        </div>
      </div>
    </div>
    <div class="project-box-wrapper">
      <div class="project-box">
        <div class="project-box-header">
          <span> </span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">Dashboard</p>
          <p class="box-content-subheader">In 24hours</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header"> </p>
          <div class="box-progress-bar">
            <span class="box-progress" style={{width: '100%', backgroundColor: '#096c86"'}}></span>
          </div>
          <p class="box-progress-percentage"> </p>
        </div>
        <div class="project-box-footer">
          <div class="participants">
         
       
        </div>
      </div>
    </div>
  
       





</div>
<div class="messages-section">
  <button class="messages-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" /></svg>
  </button>
  <div class="projects-section-header">
    <p> </p>
  </div>
  <div class="messages">
    <div class="message-box">
      <div class="message-content">
        <div class="message-header">
          <div class="name"> </div>
        
        </div>
        <p class="message-line">
          Got any question at all or need some guidance_ Feel free to reach out to us now!
        </p>
        <p class="message-line time">
           
        </p>
      </div>
    </div>
   
       

  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>


    );
}
export default Profile;