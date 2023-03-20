import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext()
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState(' ')
  // const [randomMeal, setRandomMeal] = useState([])


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

  // const fetchRandomMeal = async (url) => {
  //   try {
  //     const response = await axios(url);
  //     setRandomMeal(response.data.meals);
  //   } catch (e) {
  //     console.log(e.response)
  //   }
  // }

  useEffect(() => {
    // fetchRandomMeal(randomMealUrl);
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm])

  return <AppContext.Provider value={{ loading, meals, setSearchTerm }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }