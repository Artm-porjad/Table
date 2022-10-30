"""0000000012

Revision ID: 0000000012

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000012'
down_revision = '0000000011'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.executors (
                    main_executor bool NULL,
                    id_experts uuid NULL,
                    id_documents uuid NULL,
                    CONSTRAINT executors_fk FOREIGN KEY (id_documents) REFERENCES public.documents(id),
                    CONSTRAINT executors_fk_1 FOREIGN KEY (id_experts) REFERENCES public.experts(id)
                )
                ''')


def downgrade():
    op.drop_table('executors')
