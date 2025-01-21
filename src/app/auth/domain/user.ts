export interface User {
    id: string
    email: string
    fullName: string
    isActive: boolean
    roles: string[]
    token: string
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending'
