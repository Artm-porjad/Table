"""0000000008

Revision ID: 0000000008

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000008'
down_revision = '0000000007'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.foiv_supervisors (
                    id uuid NOT NULL,
                    id_persons uuid NULL,
                    CONSTRAINT foiv_supervisors_pk PRIMARY KEY (id),
                    CONSTRAINT foiv_supervisors_un UNIQUE (id),
                    CONSTRAINT foiv_supervisors_fk FOREIGN KEY (id_persons) REFERENCES public.persons(id) ON DELETE RESTRICT
                )
                ''')


def downgrade():
    op.drop_table('foiv_supervisors')
