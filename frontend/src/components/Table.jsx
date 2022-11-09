import Table from "react-bootstrap/Table";

const TableData = ({ title, data, setModal, setModalRow, setModalRowIndex, setModalShow, idArr }) => {

    return (
        <>
            <Table striped bordered hover variant="light" size="sm">
                <thead id="th" className="table-primary text-center align-text-top">
                    <tr>
                        {title.map((nameColumn, key) => {
                            return <th
                                id={key === 3? 'fedProject': ''
                                ||
                                key === 7 ? 'nameProject' : ''
                                ||
                                key === 8 ? 'regNumber' : ''
                                ||
                                key === 18 ? 'eighteen' : ''
                                ||
                                key === 19 ? 'nineteen' : ''
                                ||
                                key === 21 ? 'twentytwo' : ''
                                }
                                style={{ backgroundColor: "#394458", color: "white"}}
                                key={key}
                            >
                                {nameColumn}
                            </th>;
                        })}
                    </tr>
                </thead>
                <tbody style={{ verticalAlign: "middle" }} className="text-center">
                    {data.map((row, key) => {
                        return(
                            <tr onClick={() => {
                                setModalShow(true)
                                setModal(true);
                                setModalRow(row);
                                setModalRowIndex(key);
                            }} key={key}>
                                {row.map((nameColumn2, key)=>{
                                    return <td key={idArr[key]}>{nameColumn2}</td>
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