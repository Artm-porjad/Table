"""0000000011

Revision ID: 0000000011

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000011'
down_revision = '0000000010'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE TABLE public.documents (
                    id uuid NOT NULL,
                    fin_assessment money NULL,
                    exp_assessment money NULL,
                    id_foiv uuid NULL,
                    id_doc_status uuid NULL,
                    ach_control text NULL,
                    yac_control text NULL,
                    regnum_mc varchar NULL,
                    regnum_incoming varchar NULL,
                    document_name text NULL,
                    regdate_mc date NULL,
                    pages_number int4 NULL,
                    incoming_date_mc date NULL,
                    out_to_ceki_date date NULL,
                    dkr_signed_date date NULL,
                    agreement_creation_date date NULL,
                    regnum_out varchar NULL,
                    out_date date NULL,
                    current_matching varchar NULL,
                    dkr_incoming_date date NULL,
                    dkr_director_signed_date date NULL,
                    agreement_signed_departments date NULL,
                    agreement_signed_former_minister date NULL,
                    doc_type text NULL,
                    id_fed_projects uuid NULL,
                    id_foiv_supervisors uuid NULL,
                    CONSTRAINT documents_pk PRIMARY KEY (id),
                    CONSTRAINT documents_un UNIQUE (id),
                    CONSTRAINT documents_fed_projects_fk FOREIGN KEY (id_fed_projects) REFERENCES public.fed_projects(id) ON DELETE RESTRICT,
                    CONSTRAINT documents_foc_status_fk FOREIGN KEY (id_doc_status) REFERENCES public.doc_status(id) ON DELETE RESTRICT,
                    CONSTRAINT documents_foiv_fk FOREIGN KEY (id_foiv) REFERENCES public.foiv(id) ON DELETE RESTRICT,
                    CONSTRAINT documents_foiv_supervisors_fk FOREIGN KEY (id_foiv_supervisors) REFERENCES public.foiv_supervisors(id) ON DELETE RESTRICT
                )
                ''')


def downgrade():
    op.drop_table('documents')
