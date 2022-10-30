"""0000000007

Revision ID: 0000000007

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000007'
down_revision = '0000000006'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.experts (
                    id uuid NOT NULL,
                    id_persons uuid NULL,
                    CONSTRAINT experts_pk PRIMARY KEY (id),
                    CONSTRAINT experts_un UNIQUE (id),
                    CONSTRAINT experts_fk FOREIGN KEY (id_persons) REFERENCES public.persons(id)
                )
                ''')


def downgrade():
    op.drop_table('experts')
