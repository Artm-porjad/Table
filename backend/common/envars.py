import os
DATABASE_URL = os.environ.get('DATABASE_URL', 'postgresql+asyncpg://dataadmin:_DataAAAdmin!@172.16.105.30:5432/expertise_reestr')