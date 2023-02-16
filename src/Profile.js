import './profile.css'
import 'thisIsMyCopy.html'


function Profile() {

  return (
    <div className="content" dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>
  )
}


export default Profile
