"""0000000001

Revision ID: 0000000001

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000001'
down_revision = '0000000000'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.directions (
                    id uuid NOT NULL,
                    "name" varchar(256) NULL,
                    CONSTRAINT directions_pk PRIMARY KEY (id),
                    CONSTRAINT directions_un UNIQUE (id, name)
                )
                ''')


def downgrade():
    op.drop_table('directions')
