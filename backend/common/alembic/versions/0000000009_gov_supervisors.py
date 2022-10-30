"""0000000009

Revision ID: 0000000009

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000009'
down_revision = '0000000008'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.gov_supervisors (
                    id uuid NOT NULL,
                    id_persons uuid NULL,
                    CONSTRAINT gov_supervisors_pk PRIMARY KEY (id),
                    CONSTRAINT gov_supervisors_un UNIQUE (id),
                    CONSTRAINT gov_supervisors_fk FOREIGN KEY (id_persons) REFERENCES public.persons(id) ON DELETE RESTRICT
                )
                ''')


def downgrade():
    op.drop_table('gov_supervisors')
