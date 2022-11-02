import asyncio
import json
from datetime import date
from starlette.responses import JSONResponse
from website.sql.sql import select_documents_sql, select_directions_sql, select_documents_statuses_sql, \
    select_persons_sql, \
    select_fed_projects_sql, insert_row_sql

d = ['Ссылка из СЭД',
     'Куратор АПРФ',
     'Направление',
     'Фед.проект',
     'Тип документа',
     'Текущий статус',
     'ФОИВ',
     'Название документа',
     'Рег. номер МКС в СЭД',
     'В дополнение к или взамен (предыстория документа)',
     'Дата поступления в МКС',
     'номер в СЭД',
     'Контроль Зам. министра',
     'Контроль Чукарин',
     'Финансовая оценка, тыс. руб.',
     'Экспертная оценка, тыс. руб.',
     'Реквизиты ответа в ведомство',
     'Дата ответа в ведомство',
     'Дата подписания (согласования) директором ДКР',
     'Осталось ДНЕЙ до подписания Директором ДКР ( - просрок)',
     'Просрочка ответа в ведомство',
     'ФИО согласующего сотрудника МЦ (текущий согласующий)',
     'Дата поступления текущему согласующему'
     ]


async def get_table(request):
    engine = request.app.state.postgres
    data_to_send = [d]
    c = []
    async with engine.connect() as conn:
        for i in range(23):
            a = []
            if i == 2:
                data = await conn.stream(select_directions_sql())
                async for row in data:
                    a.append(str(row[0]))
            elif i == 5:
                data = await conn.stream(select_documents_statuses_sql())
                async for row in data:
                    a.append(str(row[0]))
            elif i == 3:
                data = await conn.stream(select_fed_projects_sql())
                async for row in data:
                    a.append(str(row[0]))
            elif i == 1:
                data = await conn.stream(select_persons_sql())
                async for row in data:
                    a.append(str(row[0]))
            c.append(a)
    data_to_send.append(c)
    async with engine.connect() as conn:
        data = await conn.stream(select_documents_sql())
        async for row in data:
            n = len(row)
            row_to_send = []
            for i in range(n + 3):
                try:
                    if i == 0:
                        row_to_send.append(str(row[0]))
                    elif i == 10:
                        row_to_send.append(row[10].strftime("%d.%m.%Y"))
                    elif i == 17:
                        row_to_send.append(row[17].strftime("%d.%m.%Y"))
                    else:
                        row_to_send.append(row[i])
                except IndexError:
                    row_to_send.append(None)
            data_to_send.append(row_to_send)
        return JSONResponse(data_to_send)


def format_date(strdate):
    if '.' in strdate:
        return date(year=int(strdate[6:]), month=int(strdate[3:5]), day=int(strdate[:2]))
    elif '-' in strdate:
        return date(year=int(strdate[:4]), month=int(strdate[5:7]), day=int(strdate[8:]))


async def post_table(request):
    engine = request.app.state.postgres
    data = json.loads((await request.form())['data'])[2:]
    n = len(data)
    for i in range(n):
        params = {
            'id_doc_status': data[i][5],
            'fed_proj': data[i][3],
            'ivanov': 'Иванов',
            'lastname': data[i][1],
            'dir_name': data[i][2],
            'id': data[i][0],
            'fin_assessment': data[i][14],
            'exp_assessment': data[i][15],
            'ach_control': data[i][13],
            'yac_control': data[i][12],
            'regnum_mc': data[i][8],
            'regnum_incoming': data[i][11],
            'document_name': data[i][7],
            'regdate_mc': None,
            'pages_number': None,
            'incoming_date_mc': format_date(data[i][10]),
            'out_to_ceki_date': None,
            'dkr_signed_date': None,
            'agreement_creation_date': None,
            'regnum_out': data[i][16],
            'out_date': format_date(data[i][17]),
            'current_matching': data[i][21],
            'dkr_incoming_date': None,
            'dkr_director_signed_date': None,
            'agreement_signed_departments': None,
            'agreement_signed_former_minister': None,
            'doc_type': data[i][4]

        }
        async with engine.connect() as conn:
            await conn.stream(insert_row_sql(params))
            await conn.commit()

    return JSONResponse('ok')


a = [['Ссылка из СЭД', 'Куратор АПРФ', 'Направление', 'Фед.проект', 'Тип документа', 'Текущий статус', 'ФОИВ',
      'Название документа', 'Рег. номер МКС в СЭД', 'В дополнение к или взамен (предыстория документа)',
      'Дата поступления в МКС', 'номер в СЭД', 'Контроль Яцеленко', 'Контроль Чукарин', 'Финансовая оценка, тыс. руб.',
      'Экспертная оценка, тыс. руб.', 'Реквизиты ответа в ведомство', 'Дата ответа в ведомство',
      'Дата подписания (согласования) директором ДКР', 'Осталось ДНЕЙ до подписания Директором ДКР ( - просрок)',
      'Просрочка ответа в ведомство', 'ФИО согласующего сотрудника МЦ (текущий согласующий)',
      'Дата поступления текущему согласующему'], [[], ['Иванов', 'Курочкин'],
                                                  ['Спорт и туризм', 'Здравоохранение', 'Уголовные дела',
                                                   'Офромление заграничного паспорта'],
                                                  ['ГИС ОМС', 'Федеральный проект 2'], [],
                                                  ['Исполнено', 'Не исполнено'], [], [], [], [], [], [], [], [], [], [],
                                                  [], [], [], [], [], [], []],
     ['fbe516f6-3e39-11eb-b897-086266012345', 'Курочкин', 'Спорт и туризм', 'Федеральный проект 2', 'ТЗ', 'Исполнено',
      'Федеральный фонд обязательного медицинского страхования', 'qweqw', '123123', None, '10.10.2022', '123123', '',
      '', '$4,356.00', '$2,456.00', None, '02.10.2022', None, None, None, None, None],
     ['fbe516f6-3e39-11eb-b897-086266012346', 'Иванов', 'Уголовные дела', 'ГИС ОМС', 'ТЗ', 'Исполнено', 'МВД России',
      'qweqwe', '123123', None, '09.10.2022', '1234123', '', '', '$12,312.00', '$123,123.00', None, '11.10.2022', None,
      None, None, None, None],
     ['fbe516f6-3e39-11eb-b897-086266012347', 'Иванов', 'Здравоохранение', 'ГИС ОМС', 'ТЗ', 'Не исполнено',
      'Федеральный фонд обязательного медицинского страхования', 'qweqw', '123123', None, '16.10.2022', '12312', '', '',
      '$214,124.00', '$32,423.00', None, '02.10.2022', None, None, None, None, None]]
