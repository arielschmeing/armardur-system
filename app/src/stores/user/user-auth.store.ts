import { create } from "zustand"
import { Payload } from "../../interfaces/payload.interface"
import { persist } from "zustand/middleware"
import { TOKEN_KEY } from "../../constants/token-key"
import { User } from "../../interfaces/domains/user.interface"

interface UserAuth {
    token: string | null
    payload: () => Payload | null
    user: User | null
    updateToken: (newToken: string) => void
    updateUser: (newUser: User) => void
    logout: () => void
}

export const useUserAuth = create<UserAuth>()(
    persist(
        (set, get) => ({
            token: localStorage.getItem(TOKEN_KEY),
            user: null,

            payload: (): Payload | null => {
                const token = get().token
                
                if(!token) return null
                
                return JSON.parse(atob(token.split(".")[1]))
            },

            updateToken: (newToken: string) => {
                set({ token: newToken })
                localStorage.setItem(TOKEN_KEY, newToken)
            },

            logout: () => {
                set({ token: null })
                localStorage.removeItem(TOKEN_KEY)
            },

            updateUser: (newUser: User) => {
                set({ user: newUser })
            }
        }),
        {
            name: TOKEN_KEY,
            partialize: (state) => ({ token: state.token })
        }
    )
)