"""0000000013

Revision ID: 0000000013

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000013'
down_revision = '0000000012'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.exp_documents (
                    id_documents uuid NULL,
                    "date" date NULL,
                    id_exp_roles uuid NULL,
                    main_exp bool NULL,
                    CONSTRAINT exp_documents_fk FOREIGN KEY (id_documents) REFERENCES public.documents(id),
                    CONSTRAINT exp_documents_roles_fk FOREIGN KEY (id_exp_roles) REFERENCES public.exp_roles(id)
                )
                ''')


def downgrade():
    op.drop_table('exp_documents')
