import React from 'react';
import FilterButton from "./FilterButton";
import { ButtonGroup } from 'react-bootstrap'

const FilterList = ({ filter, filters, setFilter }) => {
    return (
        <>
            <hr className="mt-4 mb-4" />
            <ButtonGroup aria-label="Filters list" className="mb-4 w-100">
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
        </>
    )
}

export default FilterList

