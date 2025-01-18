import React from 'react'

const SelectHeader = ({ name, id, options, onChangeFun }) => {

    const onChangeHandler = (event) => {
        onChangeFun(event.target.value);
    }

    return (
        <>
            <select
                name={name}
                id={id}
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none"
                style={{
                    backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`
                    )}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 10px center',
                    backgroundSize: '1rem',
                }}

                onChange={onChangeHandler}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}

export default SelectHeader