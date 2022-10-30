"""0000000015

Revision ID: 0000000015

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0000000015'
down_revision = '0000000014'
branch_labels = None
depends_on = None


def upgrade():
    conn = op.get_bind()
    conn.execute('''
                CREATE OR REPLACE FUNCTION public.armor(bytea)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_armor$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.armor(bytea, text[], text[])
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_armor$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.crypt(text, text)
                 RETURNS text
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_crypt$function$
                ;
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.dearmor(text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_dearmor$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.decrypt(bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_decrypt$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.decrypt_iv(bytea, bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_decrypt_iv$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.digest(bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_digest$function$
                ;
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.digest(text, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_digest$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.encrypt(bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_encrypt$function$
                ''')

    conn.execute('''
                CREATE OR REPLACE FUNCTION public.encrypt_iv(bytea, bytea, bytea, text)
                 RETURNS bytea
                 LANGUAGE c
                 IMMUTABLE PARALLEL SAFE STRICT
                AS '$libdir/pgcrypto', $function$pg_encrypt_iv$function$
                ''')


def downgrade():
    conn = op.get_bind()
    conn.execute('''
                        DROP FUNCTION public.encrypt_iv(bytea, bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.encrypt(bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.digest(text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.digest(bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.decrypt_iv(bytea, bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.decrypt(bytea, bytea, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.dearmor(text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.crypt(text, text)
                    ''')

    conn.execute('''
                        DROP FUNCTION public.armor(bytea, text[], text[])
                    ''')

    conn.execute('''
                        DROP FUNCTION public.armor(bytea)
                    ''')

