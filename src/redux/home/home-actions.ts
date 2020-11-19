import { HomeTypes } from "./home-types"

export const HOME_START: string = "HOME_START"

export const homeStart = () : HomeTypes => ({
  type: HOME_START
})