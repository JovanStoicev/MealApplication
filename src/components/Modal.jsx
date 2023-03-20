import { useGlobalContext } from '../context'

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext()
  // strMealThumb = image
  // strMeal = title
  // strInstructions = text
  // strSource = source
  
  return <aside className ="modal-overlay">
    <div className="modal-container">
      <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="img modal-img"></img>
      <div className="modal-content">
        <h4>{selectedMeal.strMeal}</h4>
        <p>Cooking Instructions</p>
        <p>{selectedMeal.strInstructions}</p>
        <a href={selectedMeal.strSource} target="_blank">Original Source</a>
        <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
      </div>
    </div>
  </aside>
}

export default Modal;