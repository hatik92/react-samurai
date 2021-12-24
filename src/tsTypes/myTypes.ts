export type Contacts = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string
  large: string
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts
  photos: PhotosType
}

export type UsersItem = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: PhotosType
  status: null | string
  followed: boolean
}
export type Users = {
  items: Array<UsersItem>
  totalCount: number
  error:string | null
}

export type Image = {
  large: string
  small: string
}