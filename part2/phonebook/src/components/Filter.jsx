const Filter = ({ searchFilter, handleFilterChange }) => {
    return (
        <form>
            <p>filter shown with<input value={searchFilter} onChange={handleFilterChange} /></p>
        </form>
    )
}

export default Filter