import './index.css'

const Technology = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails

  return (
    <li className={`technology-list-card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default Technology
