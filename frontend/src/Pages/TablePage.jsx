import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "../components/Modal";
import TableData from "../components/Table";
import Dropdown from "../components/dropDown";
import { ExportCSV } from "../components/ExportCSV";
import logo from '../images/logo.svg'
import Logo from '../images/Logo.jpg'
import MyVerticallyCenteredModal from "../components/MyModal";
import MyModal from "../components/MyModal";



const data = [
    ['Ссылка из СЭД', 'Куратор АПРФ', 'Направление', 'Фед.проект', 'Тип документа', 'Текущий статус', 'ФОИВ',
    'Название документа', 'Рег. номер МКС в СЭД', 'В дополнение к или взамен (предыстория документа)',
    'Дата поступления в МКС', 'номер в СЭД', 'Контроль Зам. министра', 'Контроль Чукарин', 'Финансовая оценка, тыс. руб.',
    'Экспертная оценка, тыс. руб.', 'Реквизиты ответа в ведомство', 'Дата ответа в ведомство',
    'Дата подписания (согласования) директором ДКР', 'Осталось ДНЕЙ до подписания Директором ДКР ( - просрок)',
    'Просрочка ответа в ведомство', 'ФИО согласующего сотрудника МЦ (текущий согласующий)',
    'Дата поступления текущему согласующему'],
    [
      [],
      ['Иванов', 'Курочкин'],
      ['Спорт и туризм', 'Здравоохранение', 'Уголовные дела', 'Офромление заграничного паспорта'],
      ['ГИС ОМС', 'Федеральный проект 2'],
      [],
      ['Исполнено', 'Не исполнено'],
      [], [], [], [], [], [], [], [], [], [],
      [], [], [], [], [], [], []
    ],
    ['fbe516f6-3e39-11eb-b897-086266012345', 'Курочкин', 'Спорт и туризм', 'Федеральный проект 2', 'ТЗ', 'Исполнено',
      'Федеральный фонд обязательного медицинского страхования', 'qweqw', '123123', null, '10.10.2022', '123123', '',
      '', '$4,356.00', '$2,456.00', null, '02.10.2022', null, null, null, null, null],
    ['fbe516f6-3e39-11eb-b897-086266012346', 'Иванов', 'Уголовные дела', 'ГИС ОМС', 'ТЗ', 'Исполнено', 'МВД России',
      'qweqwe', '123123', null, '09.10.2022', '1234123', '', '', '$12,312.00', '$123,123.00', null, '11.10.2022', null,
      null, null, null, null],
    ['fbe516f6-3e39-11eb-b897-086266012347', 'Иванов', 'Здравоохранение', 'ГИС ОМС', 'ТЗ', 'Не исполнено',
      'Федеральный фонд обязательного медицинского страхования', 'qweqw', '123123', null, '16.10.2022', '12312', '', '',
      '$214,124.00', '$32,423.00', null, '02.10.2022', null, null, null, null, null]
];

const typeArr = [
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "number",
  "text",
  "date",
  "text",
  "text",
  "text",
  "text",
  "text",
  "number",
  "date",
  "date",
  "text",
  "text",
  "text",
  "date",
];

const TablePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  // Первоначальные данные
  const [contentFromBase, setContentFromBase] = useState([[], [], []]);
  const content2 = JSON.parse(JSON.stringify(contentFromBase));
  // Состояние модального окна
  const [modal, setModal] = useState(false);
  const [modalRow, setModalRow] = useState([]);
  const [modalRowIndex, setModalRowIndex] = useState(0);
  const [modal2, setModal2] = useState(false)
  const [sad, setSad] = useState(true)
  // Массив выпадающих списков
  const [dropArr, setDropArr] = useState(data[1]);
  // Заголовки столбцов
  const title = contentFromBase[0];


  const getContent = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  const onSubmit = (event) => {
    setContentFromBase(content2);
    setDropArr(content2[1])
    const data = new FormData();
    data.append("data", JSON.stringify(content2));
    fetch("/api/test1", {
      method: "POST",
      body: data,
    }).finally(() => console.log(123));
    event.preventDefault();
  };

  const onClick = (event) =>{
    setModal(true)
    const a = JSON.parse(JSON.stringify(contentFromBase));
    a[a.length] = [['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'],['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'],]
    setContentFromBase(a)
  }
  useEffect(() => {
    getContent('/api/test').then((data) => {
      setContentFromBase(data);
      setDropArr(data[1])
    });
  }, []);

  const fileName = "Форма списка";

  const onClickHandler = () => {
    setModal2(true)
    setSad(false)
  }

  const onClose = () => {
    setModal(false)
    setModal2(false)
    setSad(true)
  }


  return (
    <div className="App">
      <div>
        <div style={{ display:"flex", alignItems: "center" }}>
          <img src={ Logo } style={{ marginLeft: "10px", marginTop: "10px"}} alt="logo" width="25%"/>
          <h3 style={{ marginLeft: "15%", color: "#515153" }}>Реестр контроля выполнения экспертиз</h3>
        </div>

        {/*<h4 style={{ color: "#515153", marginLeft: "1%", marginTop: "" }}> </h4>*/}

        <div style={{ paddingLeft: "0" }} className="flex align-items-center">
          {/*<div style={{ display:"flex", alignItems:"center", width:"760px"}}>*/}
          {/*  <h5 style={{ color: "#515153", marginLeft: "1%", marginTop: "1%" }}>Департамент цифровой трансформации и координации бюджетных расходов</h5>*/}
          {/*</div>*/}

          <Button
              className="addButton"
              style={{ margin: "1% 1% 1% 5px"}}
              onClick={onClick}
          >
            <b style={{ paddingRight:"5px" }}>+</b>Добавить новую экспертизу
          </Button>

          <ExportCSV csvData={contentFromBase} fileName={fileName} />
        </div>

        <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            >
          <Form onSubmit={onSubmit}>

                  <div className="container">
                    <div id="container_1">
                       <Dropdown
                          title="СЭД ID"
                          data={modalRow[0]}
                          index_column={0}
                          index_row={modalRowIndex + 1}
                          content2={content2}
                          content={contentFromBase}
                          dropValue={dropArr[0]}
                          typeArr={typeArr}
                      />
                    </div>

                    <div>
                      <Button
                          className="outSad"
                          variant="primary"
                          type="submit"
                          onClick={onClickHandler}
                      >
                        Обновить данные из СЭД
                      </Button>
                    </div>
                  </div>

                  {modal && title.slice(1).map((nameColumn, key) => {
                    return (
                        <Dropdown
                            title={nameColumn}
                            data={modalRow.slice(1)[key]}
                            index_column={key+1}
                            index_row={modalRowIndex + 1}
                            key={key}
                            content2={content2}
                            content={contentFromBase}
                            dropValue={dropArr.slice(1)[key]}
                            typeArr={typeArr}
                        />
                    );
                  })}

                  {modal && <Button
                      className="saveChanges"
                      style={{marginLeft: "83%", marginTop: "2%"}}
                      variant="primary"
                      type="submit"
                  >
                    Сохранить изменения
                  </Button>}

                </Form>
        </MyModal>

        {/*{modal && (*/}
        {/*  <Modal id="modal" onClose={onClose} title="Документ экспертизы">*/}

        {/*    <Form onSubmit={onSubmit}>*/}

        {/*      <div className="container">*/}
        {/*        <div id="container_1">*/}
        {/*           <Dropdown*/}
        {/*              title="СЭД ID"*/}
        {/*              data={modalRow[0]}*/}
        {/*              index_column={0}*/}
        {/*              index_row={modalRowIndex + 1}*/}
        {/*              content2={content2}*/}
        {/*              content={contentFromBase}*/}
        {/*              dropValue={dropArr[0]}*/}
        {/*              typeArr={typeArr}*/}
        {/*          />*/}
        {/*        </div>*/}

        {/*        <div>*/}
        {/*          <Button*/}
        {/*              className="outSad"*/}
        {/*              variant="primary"*/}
        {/*              type="submit"*/}
        {/*              onClick={onClickHandler}*/}
        {/*          >*/}
        {/*            Обновить данные из СЭД*/}
        {/*          </Button>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      {modal && title.slice(1).map((nameColumn, key) => {*/}
        {/*        return (*/}
        {/*            <Dropdown*/}
        {/*                title={nameColumn}*/}
        {/*                data={modalRow.slice(1)[key]}*/}
        {/*                index_column={key+1}*/}
        {/*                index_row={modalRowIndex + 1}*/}
        {/*                key={key}*/}
        {/*                content2={content2}*/}
        {/*                content={contentFromBase}*/}
        {/*                dropValue={dropArr.slice(1)[key]}*/}
        {/*                typeArr={typeArr}*/}
        {/*            />*/}
        {/*        );*/}
        {/*      })}*/}

        {/*      {modal && <Button*/}
        {/*          className="saveChanges"*/}
        {/*          style={{marginLeft: "83%", marginTop: "2%"}}*/}
        {/*          variant="primary"*/}
        {/*          type="submit"*/}
        {/*      >*/}
        {/*        Сохранить изменения*/}
        {/*      </Button>}*/}

        {/*    </Form>*/}

        {/*    /!*{disabled && <Form onSubmit={onSubmit}>*!/*/}
        {/*    /!*  {title.map((nameColumn, key) => {*!/*/}
        {/*    /!*    return (*!/*/}
        {/*    /!*        <Dropdown*!/*/}
        {/*    /!*            title={nameColumn}*!/*/}
        {/*    /!*            data={modalRow[key]}*!/*/}
        {/*    /!*            index_column={key}*!/*/}
        {/*    /!*            index_row={modalRowIndex + 1}*!/*/}
        {/*    /!*            key={key}*!/*/}
        {/*    /!*            content2={content2}*!/*/}
        {/*    /!*            content={contentFromBase}*!/*/}
        {/*    /!*            dropValue={dropArr[key]}*!/*/}
        {/*    /!*            typeArr={typeArr}*!/*/}
        {/*    /!*        />*!/*/}
        {/*    /!*    );*!/*/}
        {/*    /!*  })}*!/*/}

        {/*      /!*<Button*!/*/}
        {/*      /!*    style={{marginLeft: "87%"}}*!/*/}
        {/*      /!*    variant="primary"*!/*/}
        {/*      /!*    type="submit"*!/*/}
        {/*      /!*>*!/*/}
        {/*      /!*  Сохранить изменения*!/*/}
        {/*      /!*</Button>*!/*/}
        {/*    /!*</Form>}*!/*/}
        {/*  </Modal>*/}
        {/*)}*/}
      </div>
      <TableData
        typeArr={typeArr}
        title={title}
        data={contentFromBase.slice(2)}
        setModal={setModal}
        setModalRow={setModalRow}
        setModalRowIndex={setModalRowIndex}
        setModalShow={setModalShow}
      />


    </div>
  );
};

export default TablePage;