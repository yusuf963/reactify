import './imageList.css'
const ImageList = (props) => {
  const images = props.images.map(({ urls, id, description }) => {
    return <img
      key={id}
      src={urls.small}
      alt={description}
    />
  })
  return <div className="image-list">{images}</div>
}

export default ImageList;