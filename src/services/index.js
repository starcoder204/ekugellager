import {
  login,
  register,
  forgotPassword,
  logout,
  getAddresses,
  newAddress
} from './userService'

import {
  getTopIcons
} from './headerService'

import {
  getCustomText1,
  getQuestions,
  getAnswers,
  lastOrder
} from './homeService'

import {
  getProduct,
  getProductFilters
} from './productService'

export const UserServices = {
  login,
  register,
  forgotPassword,
  logout,
  getAddresses,
  newAddress
}

export const HeaderServices = {
  getTopIcons
}

export const HomeServices = {
  getCustomText1,
  getQuestions,
  getAnswers,
  lastOrder
}

export const ProductServices = {
  getProduct,
  getProductFilters
}
