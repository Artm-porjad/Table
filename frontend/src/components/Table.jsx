import Table from "react-bootstrap/Table";

const TableData = ({ title, data, setModal, setModalRow, setModalRowIndex, setModalShow }) => {

    return (
        <>
            <Table striped bordered hover variant="light" size="sm">
                <thead  id="th" className="table-primary text-center align-text-top">
                    <tr>
                        {title.map((nameColumn, key) => {
                            return <th style={{ backgroundColor: "#394458", color: "white"}}   key={key}>{nameColumn}</th>;
                        })}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.map((row, key) => {
                        return(
                            <tr onClick={() => {
                                setModalShow(true)
                                setModal(true);
                                setModalRow(row);
                                setModalRowIndex(key);
                            }} key={key}>
                                {row.map((nameColumn2, key)=>{
                                    return <td key={key}>{nameColumn2}</td>
                            })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default TableData;