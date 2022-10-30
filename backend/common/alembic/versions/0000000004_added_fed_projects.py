"""0000000004

Revision ID: 0000000004

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000004'
down_revision = '0000000003'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.fed_projects (
                    id uuid NOT NULL,
                    "name" varchar NULL,
                    CONSTRAINT fed_projects_pk PRIMARY KEY (id),
                    CONSTRAINT fed_projects_un UNIQUE (id)
                )
                ''')


def downgrade():
    op.drop_table('fed_projects')
