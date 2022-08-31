export type Customer = {
  _id: string
  name: string
  surname: string
  email: string
  telephone: string
  gender: 'M' | 'F'
  profileImage: string
  visits?: number[]
  lastVisite?: number
  appointments?: string[]
}

// temp
export type User = {
  name: string
  email: string
}
