export interface Skill {
    id?: number
    name: string
    level?: number
    range?: number
    duration?: number
    castTime?: number
    description: string
    branches: string[]
    elements?: string[]
}