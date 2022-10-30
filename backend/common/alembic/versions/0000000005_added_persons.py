"""0000000005

Revision ID: 0000000005

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000005'
down_revision = '0000000004'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.persons (
                    id uuid NOT NULL,
                    "name" varchar(256) NULL,
                    surname varchar(256) NULL,
                    lastname varchar(256) NULL,
                    phone varchar(32) NULL,
                    email varchar(256) NULL,
                    CONSTRAINT persons_pk PRIMARY KEY (id),
                    CONSTRAINT persons_un UNIQUE (id)
                )
                ''')


def downgrade():
    op.drop_table('persons')
