export type IRest = {
  id: string
  name: string
  img: string
  alt: string
  description: string
  categories: CategoryType[]
}

type CategoryType = {
  id: string
  title: string
  dishes: DishesType[]
}

type DishesType = {
  id: string
  name: string
  img: string
  alt: string
  title: string
  kcal: number
  gm: number
  protein: number
  fat: number
  carbohydrates: number
  cookingProcess: string
  ingredients: string
}
