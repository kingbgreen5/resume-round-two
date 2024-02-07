import PortfolioCard from '../PortfolioCard';
const portfolioProjectsArray = [
  {
    key: 1,
    img:"/Mars.png",
    title:'Mars-Rover',
    repoLink:'https://github.com/kingbgreen5/Mars-Rovers',
     deployed:'https://kingbgreen5.github.io/Mars-Rovers/'
  },

 {
  key: 2,
  img:"blog-site.png",
  title:'Blog-Site',
  repoLink:'https://github.com/kingbgreen5/blog-site',
  deployed: 'https://blog-site-bk-77edcaeea42f.herokuapp.com/'
},
 {
  key: 3,
  img:"/monster-mine.png",
  title:'Monster Mine: Collaborative Project',
   repoLink:'https://github.com/kingbgreen5/Monster-Mineshaft',
  deployed: 'https://cryptic-bastion-38379-0ef3d47a3413.herokuapp.com/'
},
 {
  key: 4,
  img:"/work-day.png",
  title:'Work-Day-Scheduler',
  repoLink:'https://github.com/kingbgreen5/work-day-schedule',
   deployed: 'https://kingbgreen5.github.io/work-day-schedule/'
},
 {
  key: 5,
  img:"public/note-taker.png",
  title:'Note-Taker',
  repoLink:'https://github.com/kingbgreen5/note-taker',
  deployed: 'https://floating-hamlet-15376-a415bce60b61.herokuapp.com/notes'
},
{
  key: 6,
  img:"public/code-quiz.png",
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
