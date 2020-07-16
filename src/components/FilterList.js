import React from 'react';
import FilterButton from "./FilterButton";
import { ButtonGroup } from 'react-bootstrap'

const FilterList = ({ filter, filters, setFilter }) => {
    return (
        <ButtonGroup aria-label="Basic example" className="mt-4 mb-4 w-100">
            {
                filters.map(item => {
                    return (
                        <FilterButton
                            key={item}
                            name={item}
                            isPressed={item === filter}
                            setFilter={setFilter}
                        />
                    )
                })
            }
        </ButtonGroup>
    )
}

export default FilterList

