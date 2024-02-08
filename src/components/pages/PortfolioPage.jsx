import PortfolioCard from '../PortfolioCard';

import marsPicture from "/assets/mars.png";
import blogPicture from "/assets/blog-site.png";
import monsterMine from "/assets/monster-mine.png";
import workDay from "/assets/work-day.png";
import noteTaker from "/assets/note-taker.png"
import codeQuiz from "/assets/code-quiz.png"

const portfolioProjectsArray = [
  {
    key: 1,
    img:marsPicture,
    title:'Mars-Rover',
    repoLink:'https://github.com/kingbgreen5/Mars-Rovers',
     deployed:'https://kingbgreen5.github.io/Mars-Rovers/'
  },

 {
  key: 2,
  img:blogPicture,
  title:'Blog-Site',
  repoLink:'https://github.com/kingbgreen5/blog-site',
  deployed: 'https://blog-site-bk-77edcaeea42f.herokuapp.com/'
},
 {
  key: 3,
  img:monsterMine,
  title:'Monster Mine: Collaborative Project',
   repoLink:'https://github.com/kingbgreen5/Monster-Mineshaft',
  deployed: 'https://cryptic-bastion-38379-0ef3d47a3413.herokuapp.com/'
},
 {
  key: 4,
  img:workDay,
  title:'Work-Day-Scheduler',
  repoLink:'https://github.com/kingbgreen5/work-day-schedule',
   deployed: 'https://kingbgreen5.github.io/work-day-schedule/'
},
 {
  key: 5,
  img:noteTaker,
  title:'Note-Taker',
  repoLink:'https://github.com/kingbgreen5/note-taker',
  deployed: 'https://floating-hamlet-15376-a415bce60b61.herokuapp.com/notes'
},
{
  key: 6,
  img:codeQuiz,
  title:'Code-Quiz',
  repoLink:'https://github.com/kingbgreen5/code-quiz',
  deployed: 'https://kingbgreen5.github.io/code-quiz/'
},
]

export default function Portfolio() {
return (
  <div>
    <h1>Deployed Applications</h1><div>
      <br />
      <br />
    </div>
<PortfolioCard  portfolioProjectsArray={portfolioProjectsArray}/>

  </div>
);
}
