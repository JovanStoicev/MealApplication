import { useGlobalContext } from '../context'

const Favorites = () => {
  const {favorites, selectMeal, removeFromFavorites} = useGlobalContext()
  return(
   <section className="favorites">
    <div className="favorites-content">
      <h5>Favorites</h5>
      <div className="favorites-container">
        {favorites.map((item) => {
        return <div key={item.idMeal} className="favorite-item">
          <img src={item.strMealThumb} className="img favorites-img" onClick={() => selectMeal(item.idMeal, true)} />
          <button className="remove-btn" onClick={() => removeFromFavorites(item.idMeal)}>Remove</button>
        </div>
        })}
      </div>
    </div>
   </section>
  )
}

export default Favorites;