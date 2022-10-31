"""0000000019

Revision ID: 0000000019

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000019'
down_revision = '0000000018'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
            insert into public.directions (id, name)
            values  ('fbe516a3-3e39-11eb-b897-0862660ccbd4', 'Спорт и туризм'),
                    ('fbe516a3-3e39-11eb-b123-0862660ccbd4', 'Здравоохранение'),
                    ('fbe516a3-3e39-11eb-b124-0862660ccbd4', 'Уголовные дела'),
                    ('fbe516a3-3e39-11eb-b125-0862660ccbd4', 'Офромление заграничного паспорта');
        ''')

    conn.execute('''
                insert into public.doc_status (id, description)
                values  ('fbe516f6-3e39-11eb-1337-0862660ccbd4', 'Исполнено'),
                        ('fbe516f6-3e39-11eb-1337-0862660ccbd5', 'Не исполнено');
            ''')

    conn.execute('''
                insert into public.fed_projects (id, name)
                values  ('fbe516a3-3e39-1122-b897-0862660ccbd4', 'ГИС ОМС'),
                        ('fbe516a3-3e39-1122-b897-0862660ccbd5', 'Федеральный проект 2');
            ''')

    conn.execute('''
                insert into public.persons (id, name, surname, lastname, phone, email)
                values  ('fbe516f6-3e39-11eb-b897-0862660ccbd4', 'Иван', 'Иванов', 'Иванов', '+79777777777', 'ivanov@mail.ru'),
                        ('fbe516f6-3e39-11eb-b897-0862660c1111', 'Курочка', 'Курочкин', 'Курочкин', '+79666666666', 'curochka@mail.ru');
            ''')

    conn.execute('''
                insert into public.foiv_supervisors (id, id_persons)
                values  ('fbe516f1-3e39-11eb-b897-0862660ccbd4', 'fbe516f6-3e39-11eb-b897-0862660ccbd4');
            ''')

    conn.execute('''
                insert into public.gov_supervisors (id, id_persons)
                values  ('fbe516f6-3e39-11eb-b897-0862660ccbd5', 'fbe516f6-3e39-11eb-b897-0862660ccbd4'),
                        ('fbe516f6-3e31-11eb-b897-0862660c1111', 'fbe516f6-3e39-11eb-b897-0862660c1111');
            ''')

    conn.execute('''
                insert into public.foiv (id, short_name, full_name, id_gov_supervisors, id_directions, priority)
                values  ('fbe516f6-3e39-11eb-b897-0862660cc111', 'Федеральный фонд обязательного медицинского страхования', 'Федеральный фонд обязательного медицинского страхования полное имя', 'fbe516f6-3e39-11eb-b897-0862660ccbd5', 'fbe516a3-3e39-11eb-b897-0862660ccbd4', '1'),
                        ('fbe516f6-3e39-11eb-b897-0862660cc222', 'Федеральный фонд обязательного медицинского страхования', 'Федеральный фонд обязательного медицинского страхования полное имя', 'fbe516f6-3e39-11eb-b897-0862660ccbd5', 'fbe516a3-3e39-11eb-b123-0862660ccbd4', '2'),
                        ('fbe516f6-3e39-11eb-b897-0862660cc555', 'МВД России', 'МВД России полное имя', 'fbe516f6-3e39-11eb-b897-0862660ccbd5', 'fbe516a3-3e39-11eb-b124-0862660ccbd4', '5'),
                        ('fbe516f6-3e39-11eb-b897-0862660cc666', 'МВД России', 'МВД России полное имя', 'fbe516f6-3e39-11eb-b897-0862660ccbd5', 'fbe516a3-3e39-11eb-b125-0862660ccbd4', '6'),
                        ('fbe516f6-3e39-11eb-b897-0862660cc333', 'Федеральный фонд обязательного медицинского страхования', 'Федеральный фонд обязательного медицинского страхования полное имя', 'fbe516f6-3e31-11eb-b897-0862660c1111', 'fbe516a3-3e39-11eb-b897-0862660ccbd4', '3'),
                        ('fbe516f6-3e39-11eb-b897-0862660cc444', 'Федеральный фонд обязательного медицинского страхования', 'Федеральный фонд обязательного медицинского страхования полное имя', 'fbe516f6-3e31-11eb-b897-0862660c1111', 'fbe516a3-3e39-11eb-b123-0862660ccbd4', '4');
            ''')

    conn.execute('''
                insert into public.documents (id, fin_assessment, exp_assessment, id_foiv, id_doc_status, ach_control, yac_control, regnum_mc, regnum_incoming, document_name, regdate_mc, pages_number, incoming_date_mc, out_to_ceki_date, dkr_signed_date, agreement_creation_date, regnum_out, out_date, current_matching, dkr_incoming_date, dkr_director_signed_date, agreement_signed_departments, agreement_signed_former_minister, doc_type, id_fed_projects, id_foiv_supervisors)
                values  ('fbe516f6-3e39-11eb-b897-086266012347', '214', '32', 'fbe516f6-3e39-11eb-b897-0862660cc222', 'fbe516f6-3e39-11eb-1337-0862660ccbd5', null, null, '123123', '12312', 'qweqw', null, null, '2022-10-16', null, null, null, null, '2022-10-02',null, null, null, null, null, 'ТЗ', 'fbe516a3-3e39-1122-b897-0862660ccbd4', 'fbe516f1-3e39-11eb-b897-0862660ccbd4'),
                        ('fbe516f6-3e39-11eb-b897-086266012346', '12', '123', 'fbe516f6-3e39-11eb-b897-0862660cc555', 'fbe516f6-3e39-11eb-1337-0862660ccbd4', null, null, '123123', '1234123', 'qweqwe', null, null, '2022-10-09', null, null, null, null, '2022-10-11',null, null, null, null, null, 'ТЗ', 'fbe516a3-3e39-1122-b897-0862660ccbd4', 'fbe516f1-3e39-11eb-b897-0862660ccbd4');
            ''')

    conn.execute('''
                insert into public.doc_links (id_documents, linked_doc)
                values  ('fbe516f6-3e39-11eb-b897-086266012347', null),
                        ('fbe516f6-3e39-11eb-b897-086266012346', null);
            ''')


def downgrade():
    pass
