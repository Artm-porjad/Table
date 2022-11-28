import Table from "react-bootstrap/Table";
import {BiEdit, BiUserCircle} from "react-icons/bi";

const TableData = ({ title, data, setModal, setModalRow, setModalRowIndex, setModalShow, idArr, setModalNew,setDel, setCountChanges }) => {

    return (
        <>
            {/*<Table striped bordered hover variant="light" size="sm">*/}
            {/*    <thead id="th" className="table-primary text-center align-text-top">*/}
            {/*        <tr>*/}
            {/*            {title.map((nameColumn, key) => {*/}
            {/*                return <th*/}
            {/*                    id={key === 3? 'fedProject': ''*/}
            {/*                    ||*/}
            {/*                    key === 7 ? 'nameProject' : ''*/}
            {/*                    ||*/}
            {/*                    key === 8 ? 'regNumber' : ''*/}
            {/*                    ||*/}
            {/*                    key === 18 ? 'eighteen' : ''*/}
            {/*                    ||*/}
            {/*                    key === 19 ? 'nineteen' : ''*/}
            {/*                    ||*/}
            {/*                    key === 21 ? 'twentytwo' : ''*/}
            {/*                    }*/}
            {/*                    style={{ backgroundColor: "#394458", color: "white"}}*/}
            {/*                    key={key}*/}
            {/*                >*/}
            {/*                    {nameColumn}*/}
            {/*                </th>;*/}
            {/*            })}*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody style={{ verticalAlign: "middle" }} className="text-center">*/}
            {/*        {data.map((row, key) => {*/}
            {/*            return(*/}
            {/*                <tr onClick={() => {*/}
            {/*                    setModalShow(true)*/}
            {/*                    setModal(true);*/}
            {/*                    setModalRow(row);*/}
            {/*                    setModalRowIndex(key);*/}
            {/*                    setModalNew(false);*/}
            {/*                    setDel(false);*/}
            {/*                    setCountChanges(false);*/}
            {/*                }} key={key}>*/}
            {/*                    {row.map((nameColumn2, key)=>{*/}
            {/*                        return <td key={idArr[key]}>{nameColumn2}</td>*/}
            {/*                })}*/}
            {/*                </tr>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </tbody>*/}
            {/*</Table>*/}

        {/*-------------------------------------------------------СВЕРХУ РАБОЧИЙ КОД-----------------------------------*/}
            <Table bordered size="sm">
                <thead id="th" style={{borderColor:"#ededed", borderTop:"1px solid white", fontWeight: "bold"}} className="table-primary text-center align-text-top">
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
                            ||
                            key === 0 ? 'zero' : ''
                            }
                            style={{ backgroundColor: "white", color:"#2a2a2a", fontWeight: "500", padding:"15px 15px"}}
                            key={key}
                        >
                            {nameColumn}
                        </th>;
                    })}
                </tr>
                </thead>
                <tbody>
                {data.map((row, key) => {
                    return(
                        <>
                            <tr >
                                <td style={{borderCollapse: "collapse", borderRight:"1px solid #ededed", borderBottom:" 3px solid #212529", padding:"15px 15px" }} rowSpan="2">
                                    <b style={{ display:"flex", justifyContent:"center", fontSize: "14px", color: "#53535f"}}>{row[0]}</b>
                                    <div style={{ display:"flex", justifyContent:"center" }}>
                                        #
                                        <a style={{ textDecoration:"none" }} href="">{row[1]}</a>
                                    </div>
                                    <div id={row[2] === 'Исполнено'? "gren" : "orang"} style={{ fontSize: "75%", fontWeight: "700", display: "flex", justifyContent: "center", lineHeight: "1.7", padding: "0.25em 0.7em", borderRadius: "10rem", color: "white" }}>{ row[2] }</div>
                                    <div style={{  fontSize:"30px", color:"#3f87f5" ,display:"flex", justifyContent:"center", cursor: "pointer" }}>
                                        <BiEdit style={{ marginTop: "0.5em" }} onClick={()=>{
                                            setModalShow(true)
                                            setModal(true);
                                            setModalRow(row);
                                            setModalRowIndex(key);
                                            setModalNew(false);
                                            setDel(false);
                                            setCountChanges(false);
                                        }}/>
                                    </div>

                                </td>
                                <td style={{padding:"15px 5px"}} colSpan="11"><div className="alert alert-success">{row[3]}</div></td>
                            </tr>
                            <tr
                                // onClick={() => {
                                //     setModalShow(true)
                                //     setModal(true);
                                //     setModalRow(row);
                                //     setModalRowIndex(key);
                                // }}
                                style={{backgroundColor:"white"}} key={key}>
                                <td style={{ borderBottom: "3px solid #212529", padding: "15px 15px" }}>
                                    <b style={{ display: "flex", justifyContent: "center", color: "#53535f", whiteSpace: "nowrap"}}>
                                        {row[4]}
                                    </b>
                                    <div style={{ color: "#72849a", marginTop: "1em", marginBottom: "1em", fontSize: "14px", display: "flex", justifyContent: "center", whiteSpace: "nowrap" }}>
                                        {row[5]}
                                    </div>
                                </td>
                                <td style={{ whiteSpace: "nowrap", color: "#53535f", padding: "15px 15px", borderBottom: "3px solid #212529" }}>{row[6]}</td>
                                <td style={{ borderBottom: "3px solid #212529"}}>
                                    <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", padding: "15px 15px"}}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div style={{  display: "flex", alignItems: "center",color: "#52c41a", fontSize: "25px" }}><BiUserCircle /></div>
                                            <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column" }}>
                                                <h5 style={{ fontSize: "16px", fontWeight: "normal", paddingBottom: 0, marginBottom: 0 }}>Зам. Министра</h5>
                                                <p style={{ fontSize: "13px", color: "rgb(162 171 184)", marginBottom: 0}}>{ row[7] }</p>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div style={{ color: "#3f87f5", fontSize: "25px", display:"flex", justifyContent:"center" }}><BiUserCircle /></div>
                                            <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", paddingTop:"18px"}}>
                                                <h5 style={{ fontSize: "16px", fontWeight: "normal", marginBottom: 0}}>Директор</h5>
                                                <p style={{ fontSize: "13px", color: "rgb(162 171 184)", marginBottom: 0}}>{ row[8] }</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td style={{ textAlign: "center", padding: "15px 15px", color: "#53535f", fontSize: "14px", borderBottom: "3px solid #212529" }}>{ row[9] } </td>
                                <td style={{ textAlign:"center", fontSize: "14px", borderBottom: "3px solid #212529"}}>
                                    <span style={{ color: "#53535f" }}>{ row[10] }</span>
                                    <br/>
                                    <span style={{ color: "#DE4436" }}>{ row[11] }</span>
                                </td>
                                <td style={{ borderBottom: "3px solid #212529" }}>{ row[12] }</td>
                                <td style={{ borderBottom: "3px solid #212529", textAlign: "center", fontSize: "14px" }}>
                                    <b style={{ color: "#53535f" }}>{ row[13] }</b>
                                    <br/>
                                    <span style={{ color: "#53535f" }}>{ row[14] }</span>
                                </td>
                                <td style={{ borderBottom: "3px solid #212529" }}>{ row[15] }</td>
                                <td style={{ borderBottom: "3px solid #212529" }}> { row[16] } </td>
                                <td style={{ borderBottom: "3px solid #212529", textAlign: "center" }}>
                                    <b style={{ color: "#53535f", fontSize: "14px"}} >
                                        { row[17] }
                                    </b>
                                </td>
                            </tr>
                        </>

                    );
                })}
                </tbody>
            </Table>
        </>
    );
};

export default TableData;