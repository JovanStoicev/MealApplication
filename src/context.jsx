import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext()
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState(' ')

  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)


  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url)

      if (response.data.meals) {
        setMeals(response.data.meals)
      } else {
        setMeals([])
      }
    } catch (e) {
      console.log(e.response)
    }
    setLoading(false);
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal)
    setSelectedMeal(meal);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])

  return <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectedMeal, selectMeal, closeModal }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }