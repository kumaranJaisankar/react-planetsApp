// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachDetails} = props
  const {name, imageUrl, description} = eachDetails
  return (
    <div className="planets-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img-size" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
