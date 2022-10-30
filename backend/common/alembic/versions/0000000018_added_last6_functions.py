"""0000000018

Revision ID: 0000000018

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '0000000018'
down_revision = '0000000017'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt_bytea(bytea, text, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt_bytea(bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt(text, text, text)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt(text, text)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt_bytea(bytea, text, text)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt_bytea(bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_bytea$function$
                ''')


def downgrade():
    conn = op.get_bind()

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_encrypt_bytea(bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_encrypt_bytea(bytea, text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_encrypt(text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_encrypt(text, text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_decrypt_bytea(bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_decrypt_bytea(bytea, text, text)
                    ''')
