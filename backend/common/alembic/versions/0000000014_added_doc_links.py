"""0000000014

Revision ID: 0000000014

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000014'
down_revision = '0000000013'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.doc_links (
                    id_documents uuid NOT NULL,
                    linked_doc uuid NULL,
                    CONSTRAINT doc_links_pk PRIMARY KEY (id_documents),
                    CONSTRAINT doc_links_un UNIQUE (id_documents),
                    CONSTRAINT doc_links_fk FOREIGN KEY (id_documents) REFERENCES public.documents(id)
                )
                ''')


def downgrade():
    op.drop_table('doc_links')
