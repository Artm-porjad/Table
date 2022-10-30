"""0000000016

Revision ID: 0000000016

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '0000000016'
down_revision = '0000000015'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE OR REPLACE FUNCTION public.gen_random_bytes(integer)
                 RETURNS bytea
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_random_bytes$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.gen_random_uuid()
                 RETURNS uuid
                 LANGUAGE c
                 PARALLEL SAFE
                AS '$libdir/pgcrypto', $function$pg_random_uuid$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.gen_salt(text, integer)
                 RETURNS text
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_gen_salt_rounds$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.gen_salt(text)
                 RETURNS text
                 LANGUAGE c
                 PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_gen_salt$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.hmac(text, text, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_hmac$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.hmac(bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_hmac$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_armor_headers(text, OUT key text, OUT value text)
                 RETURNS SETOF record
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_armor_headers$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_key_id(bytea)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_key_id_w$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt(bytea, bytea, text)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt(bytea, bytea)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$
                ''')



def downgrade():
    conn = op.get_bind()
    conn.execute('''
                        DROP FUNCTION public.pgp_pub_decrypt(bytea, bytea)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_pub_decrypt(bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_key_id(bytea)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.pgp_armor_headers(text, OUT key text, OUT value text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.hmac(bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.hmac(text, text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.gen_salt(text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.gen_salt(text, integer)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.gen_random_uuid()
                    ''')

    conn.execute('''
                        DROP FUNCTION public.gen_random_bytes(integer)
                    ''')
