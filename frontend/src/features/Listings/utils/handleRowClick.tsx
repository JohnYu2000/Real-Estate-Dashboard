const handleRowClick = (listing: any, selectedRow: any, setSelectedRow: (row: any) => void) => {
    if (selectedRow && selectedRow.id === listing.id) {
        setSelectedRow(null);
    } else {
        setSelectedRow(listing);
    }
};

export default handleRowClick;