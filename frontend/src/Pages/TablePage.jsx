import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";
import TableData from "../components/Table";
import Dropdown from "../components/dropDown";
import {ExportCSV} from "../components/ExportCSV";
import Logo from '../images/Logo.jpg'
import MyModal from "../components/MyModal";
import CustomModal from "../components/CustomModal";
import style from "../components/style.module.css";
import Spinner from "../components/Spinner";


const data = [
    ['Ссылка из СЭД', 'Куратор АПРФ', 'Направление', 'Фед. проект', 'Тип документа', 'Текущий статус', 'ФОИВ',
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

const data2 = [
    ['Тип/СЭД Статус','Федеральный проект ФОИВ', 'Рег. номер МЦ в СЭД (Входящий №)', 'Контроль','Дата исходящего в ЦЭКИ',
        'Рекомендуемый / Крайний срок рассмотрения ЦЭКИ', 'Куратор','Ответ в ведомство',
        'Осталось дней до подписания Директором ДКР ( - просрок)', 'Просрочка ответа в ведомство','Текущий согласующий(ФИО/Дата)'],
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [], [], [], [], []
    ],
    ['НПА', '46722689', 'Исполнено', 'ППРФ «Об утверждении Положения о федеральной государственной информационной системе ведения Единого государственного реестра недвижимости»', 'Росреестр', 'Хуснуллин М.Ш.', '13-8883-АБ/22 (107-199794832)',
        '02.11.2022', '01.11.2022', '14.10.2022', '20.10.2022', '01.11.2022', '', 'П8-1-02-107-80637', '03.11.2022', '', '','Сергиенко Л.С.'],
    ['НПА', '46722689', 'Не исполнено', 'ППРФ «Об утверждении Правил аккредитации юридических лиц для проведения оценки уязвимости объектов транспортной инфраструктуры и транспортных средств и признании утратившими силу некоторых актов Правительства Российской Федерации и отдельных положений некоторых актов Правительства Российской Федерации»', 'Росреестр', 'Хуснуллин М.Ш.', '13-8883-АБ/22 (107-199794832)',
        '01.11.2022', '01.11.2022', '14.10.2022', '20.10.2022', '01.11.2022', '','П8-1-02-107-80637', '03.11.2022', '', '', 'Сергиенко Л.С.'],
    ['ТЗ', '46722689', 'Исполнено', 'ППРФ «Об утверждении Положения о федеральной государственной информационной системе ведения Единого государственного реестра недвижимости»', 'Росреестр', 'Хуснуллин М.Ш.', '13-8883-АБ/22 (107-199794832)',
        '01.11.2022', '01.11.2022', '14.10.2022', '20.10.2022', '01.11.2022', '', 'П8-1-02-107-80637', '03.11.2022', '', '', 'Сергиенко Л.С.']
]

const idArr = [
    'sed_link',
    'kurator_APRF',
    'directions_name',
    'fp_name',
    'doc_type',
    'status_description',
    'foiv_name',
    'document_name',
    'regnum_mc',
    'linked_doc',
    'incoming_date_mc',
    'regnum_incoming',
    'former_minister_control',
    'dkr_director_control',
    'fin_assessment',
    'exp_assessment',
    'regnum_out',
    'out_date',
    'dkr_director_signed_date',
    'days_to_dkr_director_signed',
    'answer_delay',
    'current_matching',
    'current_matching_date'
]

const idArr2 = [
    'sed_link',
    'kurator_APRF',
    'directions_name',
    'project_name',
    'fp_name',
    'doc_type',
    'status_description',
    'foiv_name',
    'document_name',
    'regnum_mc',
    'linked_doc',
    'incoming_date_mc'
]

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

const obj = {
    "id": "f19d937f-9e95-4d0c-a9e1-5a660ad7bc98",
    "fin_assessment": null,
    "exp_assessment": null,
    "id_foiv": "6f2fe5c1-f122-401f-a587-72022682c35a",
    "id_doc_status": "d6e37cdf-226f-4059-bfea-d539efa9280a",
    "dkr_director_control": "2022-10-13T00:00:00.000Z",
    "former_minister_control": "2022-11-08T00:00:00.000Z",
    "regnum_mc": "096-199794047",
    "regnum_incoming": "Д14/27575-ИС",
    "document_name": "ТЗ на развитие ЕГИС ОТБ",
    "regdate_mc": "2022-10-12T00:00:00.000Z",
    "pages_number": 93,
    "incoming_date_mc": "2022-10-11T00:00:00.000Z",
    "out_to_ceki_date": "2022-10-13T00:00:00.000Z",
    "dkr_signed_date": null,
    "agreement_creation_date": null,
    "regnum_out": "нет",
    "out_date": null,
    "current_matching": null,
    "dkr_incoming_date": null,
    "dkr_director_signed_date": null,
    "agreement_signed_departments": null,
    "agreement_signed_former_minister": null,
    "doc_type": "ТЗ",
    "id_fed_projects": null,
    "id_foiv_supervisors": "fb79348c-1170-4122-a5f2-5dd1d7f7e342",
    "current_matching_date": null,
    "sed_link": "https://doc.minsvyaz.ru/document.card.php?id=46718575&DNSID=wQlteSRV_yEWSlve8iRlpjA",
    "recommend_ceki_date": "2022-10-19T00:00:00.000Z",
    "deadline_mc_date": "2022-11-08T00:00:00.000Z",
    "kurator_name": "Ермилов Алексей Александрович"
}

const TablePage = () => {
    const [modalShow, setModalShow] = React.useState(false);
    // Первоначальные данные
    const [contentFromBase, setContentFromBase] = useState(data2);
    const content2 = JSON.parse(JSON.stringify(contentFromBase));
    // Состояние модального окна
    const [modal, setModal] = useState(false);
    const [modalRow, setModalRow] = useState([]);
    const [modalRowIndex, setModalRowIndex] = useState(0);
    const [modal2, setModal2] = useState(false)
    const [sad, setSad] = useState(true)
    const [index, setIndex] = useState(0)
    // Массив выпадающих списков
    const [dropArr, setDropArr] = useState(data[1]);
    const [json, setJson] = useState(Object.values(obj))
    //Состояние для модального окна при добавлении новой экспертизы
    const [modalNew, setModalNew] = useState(false)
    //
    const [object, setObject] = useState(obj)
    const [updateBtn, setUpdateBtn] = useState(false)
    //Счётчик добавленных строк
    const [count, setCount] = useState(0)
    //Состояние для окна подтверждения закрытия формы
    const [saveChanges, setSaveChanges] = useState(false)
    //Счётчик изменений
    const [countChanges, setCountChanges] = useState(false)
    //Удалить строку из таблицы или нет
    const [del, setDel] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)
    // Заголовки столбцов
    const title = contentFromBase[0];


    const getContent = async (url) => {
        // setIsLoading(true)
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

    const onClick = (event) => {
        setDel(true)
        setCount(prevState => prevState + 1)
        setModalNew(true)
        setModalShow(true)
        setModal(false)
        const a = JSON.parse(JSON.stringify(contentFromBase));
        a[a.length] = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
        setContentFromBase(a)
    }

    useEffect(() => {
        getContent('/api/test').then((data) => {
            setContentFromBase(data);
            setDropArr(data[1])
            // setIsLoading(false)
        });
    }, []);

    const fileName = "Форма списка";

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch('http://172.16.105.30:8000/?id=f19d937f-9e95-4d0c-a9e1-5a660ad7bc98', {
                method: 'POST',
                body: JSON.stringify(index)
            })
            const json = await res.json();
            setObject(json)
            console.log('Успех:', JSON.stringify(json));
        } catch (error) {
            console.error('Ошибка:', error);
        }

        // try {
        //   const response = await fetch('http://172.16.105.30:8000/?id=f19d937f-9e95-4d0c-a9e1-5a660ad7bc98', {
        //     method: 'GET'
        //   });
        //   const json = await response.json();
        //   console.log('Успех:', JSON.stringify(json));
        //   setObject(json)
        // } catch (error) {
        //   console.error('Ошибка:', error);
        // }
    };

    const onClickHandler = () => {
        setUpdateBtn(true)
        setCountChanges(true)
    }

    return (
        <div className="App">
            <div className="header">

                {/*-----------------------------------СНИЗУ РАБОЧАЯ ШАПКА ТАБЛИЦЫ-----------------------------------------*/}

                {/*<div style={{display: "flex", alignItems: "center"}}>*/}
                {/*    <img src={Logo} style={{marginLeft: "10px", marginTop: "10px"}} alt="logo" width="25%"/>*/}
                {/*    <h3 style={{marginLeft: "15%", color: "#515153"}}>Реестр контроля выполнения экспертиз</h3>*/}
                {/*</div>*/}

                {/*/!*<h4 style={{ color: "#515153", marginLeft: "1%", marginTop: "" }}> </h4>*!/*/}

                {/*<div style={{paddingLeft: "0"}} className="flex align-items-center">*/}
                {/*    /!*<div style={{ display:"flex", alignItems:"center", width:"760px"}}>*!/*/}
                {/*    /!*  <h5 style={{ color: "#515153", marginLeft: "1%", marginTop: "1%" }}>Департамент цифровой трансформации и координации бюджетных расходов</h5>*!/*/}
                {/*    /!*</div>*!/*/}

                {/*    <Button*/}
                {/*        className="addButton"*/}
                {/*        style={{margin: "1% 1% 1% 5px"}}*/}
                {/*        onClick={onClick}*/}
                {/*    >*/}
                {/*        <b style={{paddingRight: "5px"}}>+</b>Добавить новую экспертизу*/}
                {/*    </Button>*/}

                {/*    <ExportCSV csvData={contentFromBase} fileName={fileName}/>*/}
                {/*</div>*/}

                {/*---------------------------------------СВЕРХУ РАБОЧИЙ КОД---------------------------------------------------------------*/}

                {/*---------------------------------------СНИЗУ ПРАВИЛЬНАЯ ШАПКА---------------------------------------------------------------*/}

                <div style={{ display:"flex", alignItems: "center" }}>
                    <img src={ Logo } style={{ marginLeft: "10px"}} alt="logo" width="16%"/>
                    <div style={{ marginLeft:"4%"}} className="flex align-items-center">
                        <Button
                            className="addButton"
                            onClick={onClick}
                        >
                            <b style={{ paddingRight: "5px"}}>+</b>Добавить новую экспертизу
                        </Button>
                    </div>

                    <h3 style={{marginLeft:"5%", color: "#72849a", fontSize:"22px", fontWeight:"normal"}}>Реестр контроля выполнения экспертиз</h3>
                </div>

                {/*------------------------------------------СВЕРХУ ПРАВИЛЬНАЯ ШАПКА---------------------------------------------------------------*/}

                <MyModal
                    show={modalShow}
                    onHide={() => {
                        // setModalShow(false);
                        // setModalShow(false);
                        countChanges ? setSaveChanges(true) : setModalShow(false) && setModalShow(false);
                        !countChanges && contentFromBase[contentFromBase.length - 1][1] === '-' ? setContentFromBase(contentFromBase.slice(0, -1)) : setContentFromBase(contentFromBase);
                        // count !== 0 && contentFromBase[contentFromBase.length-1][0] === '-' ? setContentFromBase(contentFromBase.slice(0, -1)) : setContentFromBase(contentFromBase)
                    }}
                    index_row={modalRowIndex + 2}
                    data={modalRow.slice(5)}
                    dat={data2}
                >
                    {/*<Form onSubmit={onSubmitHandler}>*/}
                    {/*    {modal && <div className="container">*/}
                    {/*        <div id="container_1">*/}
                    {/*            <Dropdown*/}
                    {/*                idArr={idArr[0]}*/}
                    {/*                title="СЭД ID"*/}
                    {/*                data={modalRow[0]}*/}
                    {/*                index_column={0}*/}
                    {/*                index_row={modalRowIndex + 1}*/}
                    {/*                content2={content2}*/}
                    {/*                content={contentFromBase}*/}
                    {/*                dropValue={dropArr[0]}*/}
                    {/*                typeArr={typeArr}*/}
                    {/*                setIndex={setIndex}*/}
                    {/*                obj={object}*/}
                    {/*                updateBtn={updateBtn}*/}
                    {/*                setUpdateBtn={setUpdateBtn}*/}
                    {/*                countChanges={countChanges}*/}
                    {/*                setCountChanges={setCountChanges}*/}
                    {/*            />*/}
                    {/*        </div>*/}

                    {/*        <div>*/}
                    {/*            <Button*/}
                    {/*                className="outSad"*/}
                    {/*                variant="primary"*/}
                    {/*                type="submit"*/}
                    {/*                onClick={onClickHandler}*/}
                    {/*            >*/}
                    {/*                Обновить данные из СЭД*/}
                    {/*            </Button>*/}
                    {/*        </div>*/}
                    {/*    </div>}*/}
                    {/*</Form>*/}

                    {/*<Form onSubmit={onSubmit}>*/}

                    {/*    {modal && title.slice(1).map((nameColumn, key) => {*/}
                    {/*        return (*/}
                    {/*            <Dropdown*/}
                    {/*                idArr={idArr.slice(0)}*/}
                    {/*                title={nameColumn}*/}
                    {/*                data={modalRow.slice(1)[key]}*/}
                    {/*                index_column={key + 1}*/}
                    {/*                index_row={modalRowIndex + 1}*/}
                    {/*                key={key}*/}
                    {/*                content2={content2}*/}
                    {/*                content={contentFromBase}*/}
                    {/*                dropValue={dropArr.slice(1)[key]}*/}
                    {/*                typeArr={typeArr}*/}
                    {/*                setIndex={setIndex}*/}
                    {/*                updateBtn={updateBtn}*/}
                    {/*                setUpdateBtn={setUpdateBtn}*/}
                    {/*                obj={object}*/}
                    {/*                countChanges={countChanges}*/}
                    {/*                setCountChanges={setCountChanges}*/}
                    {/*            />*/}
                    {/*        );*/}
                    {/*    })}*/}

                    {/*    {modal && <Button*/}
                    {/*        className="saveChanges"*/}
                    {/*        style={{marginLeft: "83%", marginTop: "2%"}}*/}
                    {/*        variant="primary"*/}
                    {/*        type="submit"*/}
                    {/*        onClick={() => {*/}
                    {/*            setModalShow(false);*/}
                    {/*            setUpdateBtn(false);*/}
                    {/*            setCountChanges(false);*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Сохранить*/}
                    {/*    </Button>}*/}

                    {/*</Form>*/}

                    {/*/!*--------------------------------Форма при добавлении новой экспертизы--------------------------------------*!/*/}

                    {/*<Form onSubmit={onSubmitHandler}>*/}
                    {/*    {modalNew && <div className="container">*/}
                    {/*        <div id="container_1">*/}
                    {/*            <Dropdown*/}
                    {/*                idArr={idArr[0]}*/}
                    {/*                title="СЭД ID"*/}
                    {/*                data={contentFromBase[contentFromBase.length - 1][0]}*/}
                    {/*                index_column={0}*/}
                    {/*                index_row={contentFromBase.length - 2}*/}
                    {/*                content2={content2}*/}
                    {/*                content={contentFromBase}*/}
                    {/*                dropValue={dropArr[0]}*/}
                    {/*                typeArr={typeArr}*/}
                    {/*                setIndex={setIndex}*/}
                    {/*                obj={object}*/}
                    {/*                updateBtn={updateBtn}*/}
                    {/*                setUpdateBtn={setUpdateBtn}*/}
                    {/*                countChanges={countChanges}*/}
                    {/*                setCountChanges={setCountChanges}*/}
                    {/*            />*/}
                    {/*        </div>*/}

                    {/*        <div>*/}
                    {/*            <Button*/}
                    {/*                className="outSad"*/}
                    {/*                variant="primary"*/}
                    {/*                type="submit"*/}
                    {/*                onClick={onClickHandler}*/}
                    {/*            >*/}
                    {/*                Обновить данные из СЭД*/}
                    {/*            </Button>*/}
                    {/*        </div>*/}
                    {/*    </div>}*/}
                    {/*</Form>*/}

                    {/*<Form onSubmit={onSubmit}>*/}

                    {/*    {modalNew && title.slice(1).map((nameColumn, key) => {*/}
                    {/*        return (*/}
                    {/*            <Dropdown*/}
                    {/*                idArr={idArr.slice(0)}*/}
                    {/*                title={nameColumn}*/}
                    {/*                data={contentFromBase[contentFromBase.length - 1].slice(1)[key]}*/}
                    {/*                index_column={key + 1}*/}
                    {/*                index_row={contentFromBase.length - 2}*/}
                    {/*                key={key}*/}
                    {/*                content2={content2}*/}
                    {/*                content={contentFromBase}*/}
                    {/*                dropValue={dropArr.slice(1)[key]}*/}
                    {/*                typeArr={typeArr}*/}
                    {/*                setIndex={setIndex}*/}
                    {/*                updateBtn={updateBtn}*/}
                    {/*                setUpdateBtn={setUpdateBtn}*/}
                    {/*                countChanges={countChanges}*/}
                    {/*                setCountChanges={setCountChanges}*/}
                    {/*                obj={object}*/}
                    {/*            />*/}
                    {/*        );*/}
                    {/*    })}*/}

                    {/*    {modalNew && <Button*/}
                    {/*        className="saveChanges"*/}
                    {/*        style={{marginLeft: "83%", marginTop: "2%"}}*/}
                    {/*        variant="primary"*/}
                    {/*        type="submit"*/}
                    {/*        onClick={() => {*/}
                    {/*            setModalShow(false);*/}
                    {/*            setUpdateBtn(false);*/}
                    {/*            setCountChanges(false);*/}
                    {/*            setCount(0);*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Сохранить*/}
                    {/*    </Button>}*/}
                    {/*</Form>*/}

                    {/*----------------------------------------Форма карточки в парвильном варианте------------------------------------------------------------------*/}

                    {/*<Form onSubmit={onSubmitHandler}>*/}
                    {/*    <div className={style.container}>*/}
                    {/*        <div className={style.input__container}>*/}
                    {/*            <div className={style.input__group}>*/}
                    {/*                <Dropdown*/}
                    {/*                    idArr={idArr[0]}*/}
                    {/*                    title="СЭД ID"*/}
                    {/*                    data={modalRow[0]}*/}
                    {/*                    index_column={0}*/}
                    {/*                    index_row={modalRowIndex + 1}*/}
                    {/*                    content2={content2}*/}
                    {/*                    content={contentFromBase}*/}
                    {/*                    dropValue={dropArr[0]}*/}
                    {/*                    typeArr={typeArr}*/}
                    {/*                    setIndex={setIndex}*/}
                    {/*                    obj={object}*/}
                    {/*                    updateBtn={updateBtn}*/}
                    {/*                    setUpdateBtn={setUpdateBtn}*/}
                    {/*                    countChanges={countChanges}*/}
                    {/*                    setCountChanges={setCountChanges}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <Button*/}
                    {/*                className={style.button}*/}
                    {/*                style={{backgroundColor: "#308EF2"}}*/}
                    {/*                variant="primary"*/}
                    {/*                type="submit"*/}
                    {/*                onClick={onClickHandler}*/}
                    {/*            >*/}
                    {/*                Обновить данные из СЭД*/}
                    {/*            </Button>*/}
                    {/*        </div>*/}
                    {/*        <div className={style.input__group}>*/}
                    {/*            <Dropdown*/}
                    {/*                idArr={idArr[7]}*/}
                    {/*                title="Название документа"*/}
                    {/*                data={modalRow[7]}*/}
                    {/*                index_column={7}*/}
                    {/*                index_row={modalRowIndex + 1}*/}
                    {/*                content2={content2}*/}
                    {/*                content={contentFromBase}*/}
                    {/*                dropValue={dropArr[7]}*/}
                    {/*                typeArr={typeArr}*/}
                    {/*                setIndex={setIndex}*/}
                    {/*                obj={object}*/}
                    {/*                updateBtn={updateBtn}*/}
                    {/*                setUpdateBtn={setUpdateBtn}*/}
                    {/*                countChanges={countChanges}*/}
                    {/*                setCountChanges={setCountChanges}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className={style.columns}>*/}

                    {/*            <div className={style.col__left}>*/}
                    {/*                <div className={style.select__container}>*/}
                    {/*                    <div className={style.select0__group}>*/}
                    {/*                        <Dropdown*/}
                    {/*                            idArr={idArr[3]}*/}
                    {/*                            title="Фед. проект"*/}
                    {/*                            data={modalRow[3]}*/}
                    {/*                            index_column={3}*/}
                    {/*                            index_row={modalRowIndex + 1}*/}
                    {/*                            content2={content2}*/}
                    {/*                            content={contentFromBase}*/}
                    {/*                            dropValue={dropArr[3]}*/}
                    {/*                            typeArr={typeArr}*/}
                    {/*                            setIndex={setIndex}*/}
                    {/*                            obj={object}*/}
                    {/*                            updateBtn={updateBtn}*/}
                    {/*                            setUpdateBtn={setUpdateBtn}*/}
                    {/*                            countChanges={countChanges}*/}
                    {/*                            setCountChanges={setCountChanges}*/}
                    {/*                        />*/}

                    {/*                    </div>*/}
                    {/*                    <div className={style.select0__group}>*/}
                    {/*                        <Dropdown*/}
                    {/*                            idArr={idArr[4]}*/}
                    {/*                            title="Тип документа"*/}
                    {/*                            data={modalRow[4]}*/}
                    {/*                            index_column={4}*/}
                    {/*                            index_row={modalRowIndex + 1}*/}
                    {/*                            content2={content2}*/}
                    {/*                            content={contentFromBase}*/}
                    {/*                            dropValue={dropArr[4]}*/}
                    {/*                            typeArr={typeArr}*/}
                    {/*                            setIndex={setIndex}*/}
                    {/*                            obj={object}*/}
                    {/*                            updateBtn={updateBtn}*/}
                    {/*                            setUpdateBtn={setUpdateBtn}*/}
                    {/*                            countChanges={countChanges}*/}
                    {/*                            setCountChanges={setCountChanges}*/}
                    {/*                        />*/}

                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className={style.input__group}>*/}
                    {/*                    <Dropdown*/}
                    {/*                        idArr={idArr[9]}*/}
                    {/*                        title="В дополнение к или взамен (предыстория документа)"*/}
                    {/*                        data={modalRow[9]}*/}
                    {/*                        index_column={9}*/}
                    {/*                        index_row={modalRowIndex + 1}*/}
                    {/*                        content2={content2}*/}
                    {/*                        content={contentFromBase}*/}
                    {/*                        dropValue={dropArr[9]}*/}
                    {/*                        typeArr={typeArr}*/}
                    {/*                        setIndex={setIndex}*/}
                    {/*                        obj={object}*/}
                    {/*                        updateBtn={updateBtn}*/}
                    {/*                        setUpdateBtn={setUpdateBtn}*/}
                    {/*                        countChanges={countChanges}*/}
                    {/*                        setCountChanges={setCountChanges}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div>*/}
                    {/*                    <label className={style.label}>Контроль</label>*/}
                    {/*                    <table style={{ width: '75%' }} className={`${style.table} table table-bordered`}>*/}
                    {/*                        <thead>*/}
                    {/*                        <tr className="table-active">*/}
                    {/*                            <th className={style.th} scope="col">Зам. министра</th>*/}
                    {/*                            <th className={style.th} scope="col">2-й зам. министра</th>*/}
                    {/*                        </tr>*/}
                    {/*                        </thead>*/}
                    {/*                        <tbody>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>12.10.2022</td>*/}
                    {/*                            <td>12.10.2022</td>*/}
                    {/*                        </tr>*/}
                    {/*                        </tbody>*/}
                    {/*                    </table>*/}

                    {/*                    <label className={style.label}>Оценка</label>*/}
                    {/*                    <table style={{ width: '75%' }} className={`${style.table} table table-bordered`}>*/}
                    {/*                        <thead>*/}
                    {/*                        <tr className="table-active">*/}
                    {/*                            <th className={style.th} scope="col">Финансовая оценка, тыс. руб</th>*/}
                    {/*                            <th className={style.th} scope="col">Экспертная оценка, тыс. руб</th>*/}
                    {/*                        </tr>*/}
                    {/*                        </thead>*/}
                    {/*                        <tbody>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>{modalRow[14]}</td>*/}
                    {/*                            <td>{modalRow[15]}</td>*/}
                    {/*                        </tr>*/}
                    {/*                        </tbody>*/}
                    {/*                    </table>*/}

                    {/*                    <label className={style.label}>Сроки</label>*/}
                    {/*                    <table style={{ width: '75%' }} className={`${style.table} table table-bordered`}>*/}
                    {/*                        <thead>*/}
                    {/*                        <tr className="table-active">*/}
                    {/*                            <th className={style.th} scope="col">Рекомендуемый срок рассм ЦЭКИ</th>*/}
                    {/*                            <th className={style.th} scope="col">Крайний срок рассмотрения МЦ</th>*/}
                    {/*                        </tr>*/}
                    {/*                        </thead>*/}
                    {/*                        <tbody>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>12.10.2022</td>*/}
                    {/*                            <td>12.10.2022</td>*/}
                    {/*                        </tr>*/}
                    {/*                        </tbody>*/}
                    {/*                    </table>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={style.col__right}>*/}
                    {/*                <div className={style.select__group}>*/}
                    {/*                    <Dropdown*/}
                    {/*                        idArr={idArr[6]}*/}
                    {/*                        title="ФОИВ"*/}
                    {/*                        data={modalRow[6]}*/}
                    {/*                        index_column={6}*/}
                    {/*                        index_row={modalRowIndex + 1}*/}
                    {/*                        content2={content2}*/}
                    {/*                        content={contentFromBase}*/}
                    {/*                        dropValue={dropArr[6]}*/}
                    {/*                        typeArr={typeArr}*/}
                    {/*                        setIndex={setIndex}*/}
                    {/*                        obj={object}*/}
                    {/*                        updateBtn={updateBtn}*/}
                    {/*                        setUpdateBtn={setUpdateBtn}*/}
                    {/*                        countChanges={countChanges}*/}
                    {/*                        setCountChanges={setCountChanges}*/}
                    {/*                    />*/}
                    {/*                </div>*/}

                    {/*                <div className={style.input__group}>*/}
                    {/*                    <label className={style.label} htmlFor="inputText4">Количество страниц</label>*/}
                    {/*                    <input style={{ width: '40%' }} type="text" className={style.input__item} id="inputText4" />*/}
                    {/*                </div>*/}

                    {/*                <div className={style.table__right}>*/}
                    {/*                    <h4 style={{ marginBottom: '1rem' }}>Рег. номер в СЭД 098-160196</h4>*/}
                    {/*                    <label className={style.label}>Ответственные сотрудники</label>*/}
                    {/*                    <table className={`${style.table}} table table-bordered`}>*/}
                    {/*                        <thead>*/}
                    {/*                        <tr className="table-active">*/}
                    {/*                            <th className={style.th} scope="col">Должность</th>*/}
                    {/*                            <th className={style.th} scope="col">ФИО</th>*/}
                    {/*                        </tr>*/}
                    {/*                        </thead>*/}
                    {/*                        <tbody>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>Куратор</td>*/}
                    {/*                            <td />*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>Ответственный эксперт</td>*/}
                    {/*                            <td />*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>Соисполнитель 1</td>*/}
                    {/*                            <td />*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>Соисполнитель 2</td>*/}
                    {/*                            <td />*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>Соисполнитель 3</td>*/}
                    {/*                            <td />*/}
                    {/*                        </tr>*/}
                    {/*                        <tr>*/}
                    {/*                            <td>Соисполнитель 4</td>*/}
                    {/*                            <td />*/}
                    {/*                        </tr>*/}
                    {/*                        </tbody>*/}
                    {/*                    </table>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Form>*/}
                    {/*<Form onSubmit={onSubmit}>*/}

                    {/*    {modal && <Button*/}
                    {/*        className="saveChanges"*/}
                    {/*        style={{marginLeft: "83%", marginTop: "2%"}}*/}
                    {/*        variant="primary"*/}
                    {/*        type="submit"*/}
                    {/*        onClick={() => {*/}
                    {/*            setModalShow(false);*/}
                    {/*            setUpdateBtn(false);*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Сохранить*/}
                    {/*    </Button>}*/}
                    {/*</Form>*/}

                {/*------------------------------------СВЕРХУ РАБОЧИЙ КОД-----------------------------------------------------*/}

                    <Form onSubmit={onSubmitHandler}>
                        {modal &&
                            <div style={{display: "flex", flexWrap: "wrap", alignItems: "end", marginBottom: "30px"}}>
                                <div>
                                    <Dropdown
                                        idArr={idArr2[0]}
                                        title="СЭД ID"
                                        data={modalRow[1]}
                                        index_column={1}
                                        index_row={modalRowIndex + 1}
                                        content2={content2}
                                        content={contentFromBase}
                                        dropValue={dropArr[0]}
                                        typeArr={typeArr}
                                        setIndex={setIndex}
                                        obj={object}
                                        updateBtn={updateBtn}
                                        setUpdateBtn={setUpdateBtn}
                                        countChanges={countChanges}
                                        setCountChanges={setCountChanges}
                                    />
                                </div>
                                <Button
                                    style={{backgroundColor: "#308EF2", marginLeft: "10px"}}
                                    variant="primary"
                                    type="submit"
                                    onClick={onClickHandler}
                                >
                                    Обновить данные из СЭД
                                </Button>
                            </div>}
                    </Form>

                    <Form onSubmit={onSubmit}>
                        {modal && <div>

                            <div>
                                <Dropdown
                                    idArr={idArr[3]}
                                    title="Название документа"
                                    data={modalRow[3]}
                                    index_column={3}
                                    index_row={modalRowIndex + 1}
                                    content2={content2}
                                    content={contentFromBase}
                                    dropValue={dropArr[3]}
                                    typeArr={typeArr}
                                    setIndex={setIndex}
                                    obj={object}
                                    updateBtn={updateBtn}
                                    setUpdateBtn={setUpdateBtn}
                                    countChanges={countChanges}
                                    setCountChanges={setCountChanges}
                                />
                            </div>

                            {/*<div>*/}
                            {/*    <label htmlFor="">Название документа</label>*/}
                            {/*    <textarea style={{*/}
                            {/*        minWidth: "100%",*/}
                            {/*        border: "1px solid #edf2f9",*/}
                            {/*        padding: "9px 16px"*/}
                            {/*    }}>{ contentFromBase[modalRowIndex+2][3] }</textarea>*/}
                            {/*</div>*/}

                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "column", width: "60%"}}
                                     className="col-left">
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div style={{minWidth: "300px"}}>
                                            <Dropdown
                                                idArr={idArr[1]}
                                                title="Фед. проект"
                                                data={modalRow[1]}
                                                index_column={4}
                                                index_row={modalRowIndex + 1}
                                                content2={content2}
                                                content={contentFromBase}
                                                dropValue={dropArr[3]}
                                                typeArr={typeArr}
                                                setIndex={setIndex}
                                                obj={object}
                                                updateBtn={updateBtn}
                                                setUpdateBtn={setUpdateBtn}
                                                countChanges={countChanges}
                                                setCountChanges={setCountChanges}
                                            />
                                        </div>
                                        <div>
                                            <Dropdown
                                                idArr={idArr[0]}
                                                title="Тип документа"
                                                data={modalRow[0]}
                                                index_column={0}
                                                index_row={modalRowIndex + 1}
                                                content2={content2}
                                                content={contentFromBase}
                                                dropValue={dropArr[4]}
                                                typeArr={typeArr}
                                                setIndex={setIndex}
                                                obj={object}
                                                updateBtn={updateBtn}
                                                setUpdateBtn={setUpdateBtn}
                                                countChanges={countChanges}
                                                setCountChanges={setCountChanges}

                                            />

                                        </div>

                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Стр.</label>
                                            <input style={{
                                                borderRadius: "0.375rem",
                                                maxWidth: "100px",
                                                color: "#53535f",
                                                lineHeight: "1.5",
                                                padding: "0.55rem 1rem",
                                                height: "auto",
                                                fontSize: "0.875rem",
                                                border: "1px solid #edf2f9",
                                                backgroundColor: "#e9ecef",
                                                opacity: "1"
                                            }} type="text" placeholder="Стр." readOnly/>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "25px"}}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Рег. номер МЦ в
                                                СЭД</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "370px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[6]} readOnly
                                            />
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Дата</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "260px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[7]} readOnly
                                            />
                                        </div>
                                    </div>

                                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "25px"}}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Входящий №</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "370px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[6]} readOnly
                                            />
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Дата</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "260px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[7]} readOnly
                                            />
                                        </div>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
                                        <div>
                                            <Dropdown
                                                idArr={idArr[4]}
                                                title="В дополнение к или взамен (предыстория документа)"
                                                data={modalRow[4]}
                                                index_column={4}
                                                index_row={modalRowIndex + 1}
                                                content2={content2}
                                                content={contentFromBase}
                                                dropValue={dropArr[4]}
                                                typeArr={typeArr}
                                                setIndex={setIndex}
                                                obj={object}
                                                updateBtn={updateBtn}
                                                setUpdateBtn={setUpdateBtn}
                                                countChanges={countChanges}
                                                setCountChanges={setCountChanges}

                                            />
                                            <label style={{marginTop: "25px"}}>Контроль</label>
                                            <table style={{width: '100%'}} className={` table table-bordered`}>
                                                <thead>
                                                <tr className="table-active">
                                                    <th scope="col">Заместитель Министра</th>
                                                    <th scope="col">Директор ДКР</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td style={{padding: "12px 5px"}}>
                                                        <input
                                                            style={{
                                                                borderRadius: "0.375rem",
                                                                minWidth: "100%",
                                                                color: "#53535f",
                                                                lineHeight: "1.5",
                                                                padding: "0.55rem 1rem",
                                                                height: "auto",
                                                                fontSize: "0.875rem",
                                                                border: "1px solid #edf2f9",
                                                                backgroundColor: "#e9ecef",
                                                                opacity: "1"
                                                            }}
                                                            type="text" placeholder="Заместитель Министра" readOnly
                                                        />
                                                    </td>
                                                    <td style={{padding: "12px 5px"}}>
                                                        <input
                                                            style={{
                                                                borderRadius: "0.375rem",
                                                                minWidth: "100%",
                                                                color: "#53535f",
                                                                lineHeight: "1.5",
                                                                padding: "0.55rem 1rem",
                                                                height: "auto",
                                                                fontSize: "0.875rem",
                                                                border: "1px solid #edf2f9",
                                                                backgroundColor: "#e9ecef",
                                                                opacity: "1"
                                                            }}
                                                            type="text" placeholder="Директор ДКР" readOnly
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <label style={{marginTop: "25px"}}>Сроки</label>
                                            <table style={{width: '100%'}} className={` table table-bordered`}>
                                                <thead>
                                                <tr className="table-active">
                                                    <th scope="col">Рекомендуемый срок рассм. ЦЭКИ</th>
                                                    <th scope="col">Крайний срок рассм. МЦ</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", width: "37%", marginTop: "14px"}}
                                     className="col-right">

                                    <label style={{marginBottom: "0.4rem"}} htmlFor="">ФОИВ</label>
                                    <input
                                        style={{
                                            borderRadius: "0.375rem",
                                            minWidth: "370px",
                                            color: "#53535f",
                                            lineHeight: "1.5",
                                            padding: "0.55rem 1rem",
                                            height: "auto",
                                            fontSize: "0.875rem",
                                            border: "1px solid #edf2f9",
                                            backgroundColor: "#e9ecef",
                                            opacity: "1"
                                        }}
                                        type="text" placeholder="ФОИВ" readOnly
                                    />

                                    <label style={{marginBottom: "0.4rem", marginTop: "25px"}}
                                           htmlFor="">Куратор</label>
                                    <input
                                        style={{
                                            borderRadius: "0.375rem",
                                            minWidth: "370px",
                                            color: "#53535f",
                                            lineHeight: "1.5",
                                            padding: "0.55rem 1rem",
                                            height: "auto",
                                            fontSize: "0.875rem",
                                            border: "1px solid #edf2f9",
                                            backgroundColor: "#e9ecef",
                                            opacity: "1"
                                        }}
                                        type="text" placeholder="" readOnly
                                    />


                                    <label style={{marginTop: "33px"}}>Контроль</label>
                                    <table style={{width: '100%'}} className={` table table-bordered`}>
                                        <thead>
                                        <tr className="table-active">
                                            <th scope="col">Фио</th>
                                            <th scope="col">Дата</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                            <div style={{display: "flex", justifyContent: "end"}}>
                                <Button
                                    className="saveChanges"
                                    style={{marginTop: "2%", marginRight: "16px"}}
                                    variant="primary"
                                    type="submit"
                                    onClick={() => {
                                        setModalShow(false);
                                        setUpdateBtn(false)
                                    }}
                                >
                                    Сохранить изменения
                                </Button>
                            </div>
                        </div>}
                    </Form>

                    {/*-----------------------------------СНИЗУ СОЗДАНИЕ НОВОЙ ЭКСПЕРТИЗЫ---------------------------------*/}

                    <Form onSubmit={onSubmitHandler}>
                        {modalNew &&
                            <div style={{display: "flex", flexWrap: "wrap", alignItems: "end", marginBottom: "30px"}}>
                                <div>
                                    <Dropdown
                                        idArr={idArr2[0]}
                                        title="СЭД ID"
                                        data={contentFromBase[contentFromBase.length - 1][0]}
                                        index_column={1}
                                        index_row={contentFromBase.length - 2}
                                        content2={content2}
                                        content={contentFromBase}
                                        dropValue={dropArr[0]}
                                        typeArr={typeArr}
                                        setIndex={setIndex}
                                        obj={object}
                                        updateBtn={updateBtn}
                                        setUpdateBtn={setUpdateBtn}
                                        countChanges={countChanges}
                                        setCountChanges={setCountChanges}
                                    />
                                </div>
                                <Button
                                    style={{backgroundColor: "#308EF2", marginLeft: "10px"}}
                                    variant="primary"
                                    type="submit"
                                    onClick={onClickHandler}
                                >
                                    Обновить данные из СЭД
                                </Button>
                            </div>}
                    </Form>
                    <Form onSubmit={onSubmit}>
                        {modalNew && <div>

                            <div>
                                <Dropdown
                                    idArr={idArr[3]}
                                    title="Название документа"
                                    data={contentFromBase[contentFromBase.length - 1][3]}
                                    index_column={3}
                                    index_row={contentFromBase.length - 2}
                                    content2={content2}
                                    content={contentFromBase}
                                    dropValue={dropArr[3]}
                                    typeArr={typeArr}
                                    setIndex={setIndex}
                                    obj={object}
                                    updateBtn={updateBtn}
                                    setUpdateBtn={setUpdateBtn}
                                    countChanges={countChanges}
                                    setCountChanges={setCountChanges}
                                />
                            </div>

                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "column", width: "60%"}}
                                     className="col-left">
                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <div style={{minWidth: "300px"}}>
                                            <Dropdown
                                                idArr={idArr[3]}
                                                title="Фед. проект"
                                                data={contentFromBase[contentFromBase.length-1][4]}
                                                index_column={4}
                                                index_row={contentFromBase.length - 2}
                                                content2={content2}
                                                content={contentFromBase}
                                                dropValue={dropArr[3]}
                                                typeArr={typeArr}
                                                setIndex={setIndex}
                                                obj={object}
                                                updateBtn={updateBtn}
                                                setUpdateBtn={setUpdateBtn}
                                                countChanges={countChanges}
                                                setCountChanges={setCountChanges}
                                            />
                                        </div>
                                        <div>
                                            <Dropdown
                                                idArr={idArr[3]}
                                                title="Тип документа"
                                                data={contentFromBase[contentFromBase.length-1][0]}
                                                index_column={0}
                                                index_row={contentFromBase.length - 2}
                                                content2={content2}
                                                content={contentFromBase}
                                                dropValue={dropArr[0]}
                                                typeArr={typeArr}
                                                setIndex={setIndex}
                                                obj={object}
                                                updateBtn={updateBtn}
                                                setUpdateBtn={setUpdateBtn}
                                                countChanges={countChanges}
                                                setCountChanges={setCountChanges}
                                            />

                                        </div>

                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Стр.</label>
                                            <input style={{
                                                borderRadius: "0.375rem",
                                                maxWidth: "100px",
                                                color: "#53535f",
                                                lineHeight: "1.5",
                                                padding: "0.55rem 1rem",
                                                height: "auto",
                                                fontSize: "0.875rem",
                                                border: "1px solid #edf2f9",
                                                backgroundColor: "#e9ecef",
                                                opacity: "1"
                                            }} type="text" placeholder="Стр." readOnly/>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "25px"}}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Рег. номер МЦ в
                                                СЭД</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "370px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[6]} readOnly
                                            />
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Дата</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "260px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[7]} readOnly
                                            />
                                        </div>
                                    </div>

                                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "25px"}}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Входящий №</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "370px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[6]} readOnly
                                            />
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "end"}}>
                                            <label style={{marginBottom: "0.4rem"}} htmlFor="">Дата</label>
                                            <input
                                                style={{
                                                    borderRadius: "0.375rem",
                                                    minWidth: "260px",
                                                    color: "#53535f",
                                                    lineHeight: "1.5",
                                                    padding: "0.55rem 1rem",
                                                    height: "auto",
                                                    fontSize: "0.875rem",
                                                    border: "1px solid #edf2f9",
                                                    backgroundColor: "#e9ecef",
                                                    opacity: "1"
                                                }}
                                                type="text" placeholder={modalRow[7]} readOnly
                                            />
                                        </div>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
                                        <div>
                                            <Dropdown
                                                idArr={idArr[4]}
                                                title="В дополнение к или взамен (предыстория документа)"
                                                data={modalRow[4]}
                                                index_column={4}
                                                index_row={modalRowIndex + 1}
                                                content2={content2}
                                                content={contentFromBase}
                                                dropValue={dropArr[4]}
                                                typeArr={typeArr}
                                                setIndex={setIndex}
                                                obj={object}
                                                updateBtn={updateBtn}
                                                setUpdateBtn={setUpdateBtn}
                                                countChanges={countChanges}
                                                setCountChanges={setCountChanges}

                                            />
                                            <label style={{marginTop: "25px"}}>Контроль</label>
                                            <table style={{width: '100%'}} className={` table table-bordered`}>
                                                <thead>
                                                <tr className="table-active">
                                                    <th scope="col">Заместитель Министра</th>
                                                    <th scope="col">Директор ДКР</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td style={{padding: "12px 5px"}}>
                                                        <input
                                                            style={{
                                                                borderRadius: "0.375rem",
                                                                minWidth: "100%",
                                                                color: "#53535f",
                                                                lineHeight: "1.5",
                                                                padding: "0.55rem 1rem",
                                                                height: "auto",
                                                                fontSize: "0.875rem",
                                                                border: "1px solid #edf2f9",
                                                                backgroundColor: "#e9ecef",
                                                                opacity: "1"
                                                            }}
                                                            type="text" placeholder="Заместитель Министра" readOnly
                                                        />
                                                    </td>
                                                    <td style={{padding: "12px 5px"}}>
                                                        <input
                                                            style={{
                                                                borderRadius: "0.375rem",
                                                                minWidth: "100%",
                                                                color: "#53535f",
                                                                lineHeight: "1.5",
                                                                padding: "0.55rem 1rem",
                                                                height: "auto",
                                                                fontSize: "0.875rem",
                                                                border: "1px solid #edf2f9",
                                                                backgroundColor: "#e9ecef",
                                                                opacity: "1"
                                                            }}
                                                            type="text" placeholder="Директор ДКР" readOnly
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <label style={{marginTop: "25px"}}>Сроки</label>
                                            <table style={{width: '100%'}} className={` table table-bordered`}>
                                                <thead>
                                                <tr className="table-active">
                                                    <th scope="col">Рекомендуемый срок рассм. ЦЭКИ</th>
                                                    <th scope="col">Крайний срок рассм. МЦ</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", width: "37%", marginTop: "14px"}}
                                     className="col-right">

                                    <label style={{marginBottom: "0.4rem"}} htmlFor="">ФОИВ</label>
                                    <input
                                        style={{
                                            borderRadius: "0.375rem",
                                            minWidth: "370px",
                                            color: "#53535f",
                                            lineHeight: "1.5",
                                            padding: "0.55rem 1rem",
                                            height: "auto",
                                            fontSize: "0.875rem",
                                            border: "1px solid #edf2f9",
                                            backgroundColor: "#e9ecef",
                                            opacity: "1"
                                        }}
                                        type="text" placeholder="ФОИВ" readOnly
                                    />

                                    <label style={{marginBottom: "0.4rem", marginTop: "25px"}}
                                           htmlFor="">Куратор</label>
                                    <input
                                        style={{
                                            borderRadius: "0.375rem",
                                            minWidth: "370px",
                                            color: "#53535f",
                                            lineHeight: "1.5",
                                            padding: "0.55rem 1rem",
                                            height: "auto",
                                            fontSize: "0.875rem",
                                            border: "1px solid #edf2f9",
                                            backgroundColor: "#e9ecef",
                                            opacity: "1"
                                        }}
                                        type="text" placeholder="" readOnly
                                    />


                                    <label style={{marginTop: "33px"}}>Контроль</label>
                                    <table style={{width: '100%'}} className={` table table-bordered`}>
                                        <thead>
                                        <tr className="table-active">
                                            <th scope="col">Фио</th>
                                            <th scope="col">Дата</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>}
                        {modalNew && <Button
                            className="saveChanges"
                            style={{marginLeft: "83%", marginTop: "2%"}}
                            variant="primary"
                            type="submit"
                            onClick={() => {
                                setModalShow(false);
                                setUpdateBtn(false);
                                setCountChanges(false);
                                setCount(0);
                            }}
                        >
                            Сохранить
                        </Button>}
                    </Form>

                </MyModal>

                <CustomModal
                    className="modal-b"
                    show={saveChanges}
                    onHide={() => {
                        setSaveChanges(false)
                    }}
                >
                    <h3>Вы уверены, что хотите выйти?</h3>
                    <h6>Несохранённые данные будут утеряны...</h6>
                    <Button
                        className="btnSave"
                        variant="primary"
                        onClick={() => {
                            count !== 0 && contentFromBase[contentFromBase.length - 1][0] === '-' ? setContentFromBase(contentFromBase.slice(0, -1)) : setContentFromBase(contentFromBase);
                            setModalShow(false);
                            setUpdateBtn(false);
                            setSaveChanges(false);
                            setCountChanges(false);
                        }}
                    >
                        Да
                    </Button>
                    <Button className="btnSave" style={{marginLeft: "20px"}} onClick={() => {
                        setSaveChanges(false);
                        setModalShow(true);
                    }}>Нет</Button>

                </CustomModal>

                {/*<MyModal title="Вы уверены?" show={modalShow} onHide={() => {setSaveChanges(false)}}>*/}
                {/*    <Button>Да</Button>*/}
                {/*    <Button>Нет</Button>*/}
                {/*</MyModal>*/}

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

            {/*----------------------------------------- СНИЗУ ТАБЛИЦА В ПРАВИЛЬНОМ ВИДЕ------------------------------------------*/}


            <div className="main-content" style={{overflow:"hidden", width:"100%"}}>
                <div className="card" style={{ borderRadius:"0.25rem", border: "1px solid #edf2f9", boxSizing:"border-box" }}>
                    <div className="card-body" style={{overflowX:"auto",position:"relative", padding:"1.5rem", flex:"1 1 auto", boxSizing:"border-box", marginTop:"25px" }}>
                        <TableData
                            typeArr={typeArr}
                            title={title}
                            data={contentFromBase.slice(2)}
                            setModal={setModal}
                            setModalRow={setModalRow}
                            setModalRowIndex={setModalRowIndex}
                            setModalShow={setModalShow}
                            idArr={idArr}
                            setModalNew={setModalNew}
                            setDel={setDel}
                            setCountChanges={setCountChanges}
                        />
                    </div>
                </div>
            </div>

            {/*------------------------------------------Снизу код рабочий---------------------------------------------------*/}

            {/*<TableData*/}
            {/*    typeArr={typeArr}*/}
            {/*    title={title}*/}
            {/*    data={contentFromBase.slice(2)}*/}
            {/*    setModal={setModal}*/}
            {/*    setModalRow={setModalRow}*/}
            {/*    setModalRowIndex={setModalRowIndex}*/}
            {/*    setModalShow={setModalShow}*/}
            {/*    idArr={idArr}*/}
            {/*    setModalNew={setModalNew}*/}
            {/*    setDel={setDel}*/}
            {/*    setCountChanges={setCountChanges}*/}
            {/*/>*/}



        </div>
    );
};

export default TablePage;