import { API_KEY } from './Constants/constants'

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const upComingMalayalam = `discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&primary_release_year=2025`
export const malayalam = `discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&primary_release_year=2024`
export const tamil = `discover/movie?api_key=${API_KEY}&with_original_language=ta&sort_by=popularity.desc&primary_release_year=2024`
export const hindi = `discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=popularity.desc&primary_release_year=2024`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`