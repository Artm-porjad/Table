import React from 'react';
import style from './style.module.css';

const FormOfCard = () => {
    return (
        <div className={style.container}>
            <div className={style.title__container}>
                <h3 className={style.title}>Документы экспертизы № в СЭД: 4/4033-Н, поступил в МЦ 05.10.2022</h3>
                <p className={style.p}>На экспертизе</p>
            </div>

            <div className={style.input__container}>
                <div className={style.input__group}>
                    <label className={style.label} htmlFor="inputText1">СЭД ID</label>
                    <input type="text" className={style.input__item} id="inputText1" placeholder="Please select" />
                </div>
                <button type="submit" className={style.button}>Обновить данные из СЭД</button>
            </div>

            <div className={style.input__group}>
                <label className={style.label} htmlFor="inputText2">Название документа</label>
                <input type="text" className={style.input__item} id="inputText2" />
            </div>

            <div className={style.columns}>
                <div className={style.col__left}>

                    <div className={style.select__container}>
                        <div className={style.select0__group}>
                            <label className={style.label}>Фед. проект</label>
                            <select className={style.select}>
                                <option selected>ЕГИСЗ</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className={style.select0__group}>
                            <label className={style.label}>Тип документа</label>
                            <select className={style.select}>
                                <option selected>ЕГИСЗ</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.input__group}>
                        <label className={style.label} htmlFor="inputText3">В дополнение к или взамен (предыстория документа)</label>
                        <input type="text" className={style.input__item} id="inputText3" />
                    </div>

                    <div>
                        <label className={style.label}>Контроль</label>
                        <table style={{ width: '75%' }} className={`${style.table} table table-bordered`}>
                            <thead>
                            <tr className="table-active">
                                <th className={style.th} scope="col">Зам. министра</th>
                                <th className={style.th} scope="col">2-й зам. министра</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>12.10.2022</td>
                                <td>12.10.2022</td>
                            </tr>
                            </tbody>
                        </table>

                        <label className={style.label}>Оценка</label>
                        <table style={{ width: '75%' }} className={`${style.table} table table-bordered`}>
                            <thead>
                            <tr className="table-active">
                                <th className={style.th} scope="col">Финансовая оценка, тыс. руб</th>
                                <th className={style.th} scope="col">Экспертная оценка, тыс. руб</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>20 000,00</td>
                                <td>15 000,00</td>
                            </tr>
                            </tbody>
                        </table>

                        <label className={style.label}>Сроки</label>
                        <table style={{ width: '75%' }} className={`${style.table} table table-bordered`}>
                            <thead>
                            <tr className="table-active">
                                <th className={style.th} scope="col">Рекомендуемый срок рассм ЦЭКИ</th>
                                <th className={style.th} scope="col">Крайний срок рассмотрения МЦ</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>12.10.2022</td>
                                <td>12.10.2022</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={style.col__right}>
                    <div className={style.select__group}>
                        <label className={style.label}>ФОИВ</label>
                        <select className={style.select}>
                            <option selected>ЕГИСЗ</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className={style.input__group}>
                        <label className={style.label} htmlFor="inputText4">Количество страниц</label>
                        <input style={{ width: '40%' }} type="text" className={style.input__item} id="inputText4" />
                    </div>

                    <div className={style.table__right}>
                        <h4 style={{ marginBottom: '1rem' }}>Рег. номер в СЭД 098-160196</h4>
                        <label className={style.label}>Ответственные сотрудники</label>
                        <table className={`${style.table}} table table-bordered`}>
                            <thead>
                            <tr className="table-active">
                                <th className={style.th} scope="col">Должность</th>
                                <th className={style.th} scope="col">ФИО</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Куратор</td>
                                <td />
                            </tr>
                            <tr>
                                <td>Ответственный эксперт</td>
                                <td />
                            </tr>
                            <tr>
                                <td>Соисполнитель 1</td>
                                <td />
                            </tr>
                            <tr>
                                <td>Соисполнитель 2</td>
                                <td />
                            </tr>
                            <tr>
                                <td>Соисполнитель 3</td>
                                <td />
                            </tr>
                            <tr>
                                <td>Соисполнитель 4</td>
                                <td />
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button style={{ alignSelf: 'flex-end', marginTop: '.5rem' }} type="submit" className={style.button}>Сохранить</button>
        </div>
    );
};

export default FormOfCard;