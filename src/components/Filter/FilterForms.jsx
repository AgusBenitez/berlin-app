import React from 'react'

const FilterForms = () => {
    return (
        <div className='filterForms'>
            <form>
                <h3>Cities</h3>
                <input placeholder='From' type='text' />
                <input placeholder='To' type='text' />
            </form>
            <form>
                <h3>Dates</h3>
                <input placeholder='From' type='date' />
                <input placeholder='To' type='date' />
            </form>
            <button>Search</button>
        </div>
    )
}

export default FilterForms
