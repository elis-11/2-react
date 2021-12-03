import React from 'react'
import MyInput from '../../UI/input/MyInput'
import Select from './select/Select'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
            value={filter.query}
            onChange={(e) => setFilter({...filter, query: e.target.value})}
            // 1:23
            placeholder="search..."
        />
        <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue={'sort by'}
            options={[ { value: 'title', name: 'name' }, { value: 'body', name: 'description' } ]}
        />
    </div>

    )
}

export default PostFilter
