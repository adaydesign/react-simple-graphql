import React, { useContext } from 'react'
import { FilterContext } from './App'

const FilterInput = () => {
    const [filter, setFilter] = useContext(FilterContext)
    return (
        <div>
            <select value={filter.type} onChange={(e)=>setFilter(p=>{ return {...p, type: e.target.value}})}>
                <option value="vocab">vocab</option>
                <option value="meaning">meaning</option>
            </select>
            <input type="text" placeholder="search vocab" value={filter.text} onChange={(e)=>setFilter(p=> { return {...p, text:e.target.value}})}/>
        </div>
    )
}

export default FilterInput
