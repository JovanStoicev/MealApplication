import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'

const Meals = () => {
  const { loading, meals, selectMeal } = useGlobalContext()

  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>

  }
  if (meals.length < 1) {
    return <section className="section">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        return <article key={singleMeal.idMeal} className="single-meal">
          <img src={singleMeal.strMealThumb} className="img" onClick={ () => selectMeal(singleMeal.idMeal) } />
          <footer>
            <h5>{singleMeal.strMeal}</h5>
            <button className="like-btn"> <BsHandThumbsUp /> </button>
          </footer>
        </article>
      })}
    </section>
  )
}

export default Meals;