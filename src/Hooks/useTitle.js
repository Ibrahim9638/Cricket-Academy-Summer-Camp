import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Roy Cricket Academy | ${title}`
    })
}

export default useTitle;