import { useEffect, useState } from "react"

export const useSearch = <T>(data: T[], key: keyof T & string) => {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState(data)

    useEffect(() => {
        if(!search) return setFilter(data)
 
        setFilter(data.filter((item) => (item[key] as string).toLowerCase().includes(search.toLowerCase())))
    }, [search, data])

    return {
        setSearch,
        filter
    }
}