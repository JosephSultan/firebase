import './profile.css'


function Profile() {

  return (
   <div> <link> href='https://fonts.googleapis.com/css?family=Open+Sans:700,600' </link>

    <form method="post" action="index.html">
    <div class="box">
    <h1>Dashboard</h1>
    
    <input type="email" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" class="email" />
      
    <input type="password" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" class="email" />
      
    <a href="#"><div class="btn">Sign In</div></a> 
    <a href="#"><div id="btn2">Sign Up</div></a> 
      
    </div> 
      
    </form>
    
    <p>Forgot your password? <u style="color:#f1c40f;">Click Here!</u></p>
      
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script>
    </div>
  )
}


export default Profile
