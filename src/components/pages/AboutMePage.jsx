

import photo from "../../../public/assets/profilephoto.jpg"

export default function AboutPage() {
return(
  
  <div>
    <br />

 <img className="aboutme-photo"  src = {photo} alt=""/>
 <br />
 <br />
 <br />
 <div class="aboutme">
  Hello, Im Brian.
  Im a Full Stack Web Development Bootcamp student. Currently learning MERN stack and close to graduating form the program. I enjoy learning new aspects of
  Web Development and working on coding projects. After seeing a demonstration by a friend, I've been working on learning VIM motions little by little.
  In my spare time I enjoy working on Video Game Development, Woodworking, and Traditional Archery. My wife and I have a 10 month old baby girl named Ivy and
  our second child due in June!
 </div>
  </div>
)
}
