"""0000000006

Revision ID: 0000000006

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000006'
down_revision = '0000000005'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.agreementors (
                    id uuid NOT NULL,
                    id_exp_roles uuid NULL,
                    id_persons uuid NULL,
                    CONSTRAINT agreementors_pk PRIMARY KEY (id),
                    CONSTRAINT agreementors_un UNIQUE (id),
                    CONSTRAINT agreementors_fk FOREIGN KEY (id_exp_roles) REFERENCES public.exp_roles(id),
                    CONSTRAINT agreementors_fk_1 FOREIGN KEY (id_persons) REFERENCES public.persons(id)
                )
                ''')


def downgrade():
    op.drop_table('agreementors')
