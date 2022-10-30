"""0000000010

Revision ID: 0000000010

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000010'
down_revision = '0000000009'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.foiv (
                    id uuid NOT NULL,
                    short_name varchar(256) NULL,
                    full_name text NULL,
                    id_gov_supervisors uuid NULL,
                    id_directions uuid NULL,
                    priority int2 NULL,
                    CONSTRAINT foiv_pk PRIMARY KEY (id),
                    CONSTRAINT foiv_un UNIQUE (id),
                    CONSTRAINT foiv_directions_fk FOREIGN KEY (id_directions) REFERENCES public.directions(id) ON DELETE RESTRICT,
                    CONSTRAINT foiv_gov_supervisors_fk FOREIGN KEY (id_gov_supervisors) REFERENCES public.gov_supervisors(id) ON DELETE RESTRICT
                )
                ''')


def downgrade():
    op.drop_table('foiv')
