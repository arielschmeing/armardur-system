export type SetValue<T> = [
    key: keyof T,
    value: T[keyof T]
]