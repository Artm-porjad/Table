"""0000000017

Revision ID: 0000000017

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '0000000017'
down_revision = '0000000016'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt(bytea, bytea, text, text)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt(text, bytea)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt(text, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_bytea$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt(bytea, text)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt(bytea, text, text)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$
                ''')


def downgrade():
    conn = op.get_bind()
    conn.execute('''
                        DROP FUNCTION public.pgp_sym_decrypt(bytea, text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_sym_decrypt(bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_encrypt(text, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_encrypt(text, bytea)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_decrypt(bytea, bytea, text, text)
                    ''')
