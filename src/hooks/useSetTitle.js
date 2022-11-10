import { useEffect } from "react"

export const useSetTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Wild Eye`
    }, [title])
};