"""0000000003

Revision ID: 0000000003

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000003'
down_revision = '0000000002'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.exp_roles (
                    id uuid NOT NULL,
                    description text NULL,
                    CONSTRAINT exp_roles_pk PRIMARY KEY (id),
                    CONSTRAINT exp_roles_un UNIQUE (id)
                )
                ''')


def downgrade():
    op.drop_table('exp_roles')
