export default function PortfolioCard(props) {

return(
    <div>
            <ul  >
                {props.portfolioProjectsArray.map((projects) => (
                    <li key={projects.key}>
                 <div class="portfolio-card" >
                    <h3>{projects.title}</h3>
                    <img className="portfolio-card-photo"  src={projects.img} alt=""/>
                   <div><a href={projects.deployed} target="_blank">Deployed Application</a></div>
                   <div><a href={projects.repoLink} target="_blank">Repository Link</a></div>
                   </div>
                    </li>
                ))}
            </ul>
    </div>
)};