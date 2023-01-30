export interface IImage {
  id: string,
  url: string,
  width: string,
  height: string
}

export interface IUser {
  name: string,
  email: string,
  slug: string,
  image: IImage | null, 
  cover: IImage | null,
}