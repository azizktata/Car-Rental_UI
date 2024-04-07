import { Mission } from "./mission"

export interface Client {
    username: string
    password: string
    id: number
    firstName: string
    lastName: string
    email: string
    fonction: string
    mesMissions: Mission[]
    mesReports: Report[]
  }