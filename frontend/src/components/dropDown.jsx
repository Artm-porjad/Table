import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import 'date-input-polyfill';

const DropDown = ({title, data, index_column, index_row, content2, dropValue, typeArr, setIndex, idArr, obj, updateBtn, setUpdateBtn}) => {
    const [result, setResult] = useState(data);
    // const [result, setResult] = useState(updateBtn && obj.hasOwnProperty(idArr[index_column]) ? obj[idArr[index_column]] : data);
    const [titleDropDown, setTitleDropDown] = useState(data);
    const [typeIndex, setTypeIndex] = useState(typeArr[index_column])

   useEffect(() =>{
       updateBtn && obj.hasOwnProperty(idArr[index_column]) ? setResult(obj[idArr[index_column]] ): setResult(data)
   }, [updateBtn])

    const handlerSelect= (e)=>{
        setResult(e.target.value);
        setTitleDropDown(e)
    }

    index_column === 0 ? setIndex(data) : console.log('')

    content2[index_row + 1][index_column] = result

    const onChange = (e)=>{
        setResult(e.currentTarget.value);
    }

    const inputId = typeIndex === "date" || typeIndex === "number" || index_column === 0 ? "input-date-number" : ''

    // console.log(idArr[index_column])

    // if(obj.hasOwnProperty(idArr[index_column])) {
    //     let value = obj[idArr[index_column]];
    //     console.log('', typeof(value), value)
    // }

    // const value = obj.hasOwnProperty(idArr[index_column]) ? obj[idArr[index_column]] : data
    // setResult(value)

    // setResult(value)


    return (
        <div style={{paddingTop: "17px"}}>
            <Form.Label>{title}</Form.Label>
            <InputGroup >
                {dropValue.length === 0 && <Form.Control
                    disabled={false}
                    className={inputId}
                    id={idArr[index_column]}
                    name="text"
                    type={typeArr[index_column]}
                    value={result}
                    defaultValue={result}
                    onChange={onChange}
                />}

                {/*{dropValue.length !== 0 && <>*/}
                {/*    <Form.Control id="input-group-dropdown-1" placeholder={result} disabled={true}/>*/}
                {/*    <DropdownButton*/}
                {/*        title=""*/}
                {/*        onSelect={handlerSelect}*/}
                {/*        variant="outline-secondary"*/}
                {/*        onChange={() => setResult(titleDropDown)}*/}
                {/*    >*/}
                {/*        {dropValue.map((value, key) => {*/}
                {/*            return (<Dropdown.Item key={key} eventKey={value}>{value}</Dropdown.Item>)*/}
                {/*        })*/}
                {/*        }*/}
                {/*        <Dropdown.Divider/>*/}
                {/*    </DropdownButton>*/}
                {/*</>}*/}

                {dropValue.length !== 0 &&
                    <Form.Select
                        className="selector"
                        aria-label="Default select example"
                        onChange={handlerSelect}
                        // onChange={() => setResult(titleDropDown)}
                    >
                        <option>
                            {result}
                        </option>
                        {dropValue.map((value, key) => {
                            return (<option key={key}>{value}</option> )
                        })}
                    </Form.Select>}
            </InputGroup>
        </div>
    );
}


export default DropDown;

{/*{dropValue.length !== 0 && <DropdownButton*/}
{/*    aria-disabled={true}*/}
{/*    onSelect={handlerSelect}*/}
{/*    variant="outline-secondary"*/}
{/*    title={titleDropDown}*/}
{/*    id="input-group-dropdown-1"*/}
{/*    onChange={() => setResult(titleDropDown)}*/}
{/*>*/}
{/*    {dropValue.map((value, key) => {*/}
{/*        return (<Dropdown.Item key={key} eventKey={value}>{value}</Dropdown.Item>)*/}
{/*    })*/}
{/*    }*/}
{/*    <Dropdown.Divider/>*/}
{/*</DropdownButton>}*/}