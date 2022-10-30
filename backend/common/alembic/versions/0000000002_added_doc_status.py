"""0000000002

Revision ID: 0000000002

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000002'
down_revision = '0000000001'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.doc_status (
                    id uuid NOT NULL,
                    description varchar(256) NULL,
                    CONSTRAINT doc_status_pk PRIMARY KEY (id),
                    CONSTRAINT doc_status_un UNIQUE (id)
                )
                ''')


def downgrade():
    op.drop_table('doc_status')
