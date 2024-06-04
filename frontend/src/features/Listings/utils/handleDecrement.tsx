const handleDecrement = (page: number, setPage: (page: number) => void) => {
    setPage(page > 1 ? page - 1 : 1);
}

export default handleDecrement;