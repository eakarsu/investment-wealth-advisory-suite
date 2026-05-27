export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-advisors",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "advisors",
    "displayName": "Advisors",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "advisor_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "advisor_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                VARCHAR(150)"
      },
      {
        "name": "firm",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm                VARCHAR(150)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty           VARCHAR(120)"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-ai-results",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(80) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-art-collection",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "art_collection",
    "displayName": "Art Collection",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "art_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "art_id              VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "artist",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "artist              VARCHAR(150)"
      },
      {
        "name": "work",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "work                VARCHAR(200)"
      },
      {
        "name": "value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value_usd           BIGINT DEFAULT 0"
      },
      {
        "name": "provenance",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provenance          TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'verified'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'verified'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-002-schema-sql-attachments",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "attachments",
    "displayName": "Attachments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type   VARCHAR(60)"
      },
      {
        "name": "resource_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id     INTEGER"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename        VARCHAR(255)"
      },
      {
        "name": "original_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_name   VARCHAR(255)"
      },
      {
        "name": "mimetype",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimetype        VARCHAR(120)"
      },
      {
        "name": "size_bytes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_bytes      INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by     VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-audit-log",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id            VARCHAR(50) UNIQUE"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor               VARCHAR(150)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target              VARCHAR(200)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action              VARCHAR(100)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result              VARCHAR(60)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts                  TIMESTAMPTZ"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-beneficiaries",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "beneficiaries",
    "displayName": "Beneficiaries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "ben_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ben_id              VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                VARCHAR(150)"
      },
      {
        "name": "dob",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dob                 DATE"
      },
      {
        "name": "relationship",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relationship        VARCHAR(60)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-charitable-gifts",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "charitable_gifts",
    "displayName": "Charitable Gifts",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "gift_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "gift_id             VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "recipient",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient           VARCHAR(200)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd          BIGINT DEFAULT 0"
      },
      {
        "name": "vehicle",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle             VARCHAR(80)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts                  TIMESTAMPTZ"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'completed'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-distributions",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "distributions",
    "displayName": "Distributions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "dist_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "dist_id             VARCHAR(50) UNIQUE"
      },
      {
        "name": "trust_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trust_id            VARCHAR(50)"
      },
      {
        "name": "beneficiary_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiary_id      VARCHAR(50)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd          BIGINT DEFAULT 0"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period              VARCHAR(40)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-education-grants",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "education_grants",
    "displayName": "Education Grants",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "grant_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "grant_id            VARCHAR(50) UNIQUE"
      },
      {
        "name": "beneficiary_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiary_id      VARCHAR(50)"
      },
      {
        "name": "school",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "school              VARCHAR(200)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd          BIGINT DEFAULT 0"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year                INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'approved'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'approved'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-003-schema-sql-education-milestones",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "education_milestones",
    "displayName": "Education Milestones",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "emi_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "emi_id              VARCHAR(50) UNIQUE"
      },
      {
        "name": "beneficiary_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiary_id      VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title               VARCHAR(200)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category            VARCHAR(60)"
      },
      {
        "name": "target_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_date         DATE"
      },
      {
        "name": "achieved_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "achieved_date       DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'planned'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-families",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "families",
    "displayName": "Families",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                VARCHAR(200) NOT NULL"
      },
      {
        "name": "generation_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "generation_count    INTEGER DEFAULT 1"
      },
      {
        "name": "primary_residence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primary_residence   VARCHAR(200)"
      },
      {
        "name": "net_worth_band",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "net_worth_band      VARCHAR(60)"
      },
      {
        "name": "advisor_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "advisor_id          VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-003-schema-sql-family-missions",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "family_missions",
    "displayName": "Family Missions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "mission_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "mission_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title               VARCHAR(200)"
      },
      {
        "name": "statement",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statement           TEXT"
      },
      {
        "name": "pillar",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pillar              VARCHAR(60)"
      },
      {
        "name": "target_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_year         INTEGER"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner               VARCHAR(150)"
      },
      {
        "name": "progress_pct",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "progress_pct        INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-governance-docs",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "governance_docs",
    "displayName": "Governance Docs",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "doc_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "doc_id              VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                VARCHAR(80)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version             VARCHAR(30)"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date      DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-holdings",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "holdings",
    "displayName": "Holdings",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "holding_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "holding_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "security",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "security            VARCHAR(150)"
      },
      {
        "name": "qty",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "qty                 NUMERIC(20,4) DEFAULT 0"
      },
      {
        "name": "value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value_usd           BIGINT DEFAULT 0"
      },
      {
        "name": "account",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account             VARCHAR(120)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-illiquid-assets",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "illiquid_assets",
    "displayName": "Illiquid Assets",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "asset_id            VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                VARCHAR(60)"
      },
      {
        "name": "valuation_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "valuation_usd       BIGINT DEFAULT 0"
      },
      {
        "name": "valued_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valued_at           DATE"
      },
      {
        "name": "custodian",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "custodian           VARCHAR(150)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'held'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'held'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-003-schema-sql-learning-plans",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "learning_plans",
    "displayName": "Learning Plans",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "plan_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "plan_id             VARCHAR(50) UNIQUE"
      },
      {
        "name": "beneficiary_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiary_id      VARCHAR(50)"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year                INTEGER"
      },
      {
        "name": "focus",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "focus               VARCHAR(200)"
      },
      {
        "name": "mentor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mentor              VARCHAR(150)"
      },
      {
        "name": "budget_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "budget_usd          BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-lp-interests",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "lp_interests",
    "displayName": "Lp Interests",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "lp_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "lp_id               VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "fund",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund                VARCHAR(200)"
      },
      {
        "name": "vintage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vintage             INTEGER"
      },
      {
        "name": "commitment_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "commitment_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "nav_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "nav_usd             BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-003-schema-sql-mission-milestones",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "mission_milestones",
    "displayName": "Mission Milestones",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "milestone_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "milestone_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "mission_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mission_id          VARCHAR(50)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title               VARCHAR(200)"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date            DATE"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner               VARCHAR(150)"
      },
      {
        "name": "progress_pct",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "progress_pct        INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-002-schema-sql-notifications",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(200)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body            TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(80)"
      },
      {
        "name": "read_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "read_at         TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-private-investments",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "private_investments",
    "displayName": "Private Investments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "pi_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "pi_id               VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "fund",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund                VARCHAR(200)"
      },
      {
        "name": "commitment_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "commitment_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "called_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "called_usd          BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-real-estate",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "real_estate",
    "displayName": "Real Estate",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "re_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "re_id               VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address             VARCHAR(250)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                VARCHAR(60)"
      },
      {
        "name": "value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value_usd           BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'held'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'held'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-succession-plans",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "succession_plans",
    "displayName": "Succession Plans",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "plan_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "plan_id             VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version             VARCHAR(30)"
      },
      {
        "name": "signatories",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signatories         TEXT"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date      DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-tax-filings",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "tax_filings",
    "displayName": "Tax Filings",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "filing_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "filing_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year                INTEGER"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                VARCHAR(60)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "filed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filed_at            TIMESTAMPTZ"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-trusts",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "trusts",
    "displayName": "Trusts",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "trust_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "trust_id            VARCHAR(50) UNIQUE"
      },
      {
        "name": "family_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "family_id           VARCHAR(50)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                VARCHAR(60)"
      },
      {
        "name": "trustee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trustee             VARCHAR(150)"
      },
      {
        "name": "assets_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "assets_usd          BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-002-schema-sql-users",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           VARCHAR(150) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        VARCHAR(120) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role            VARCHAR(20) DEFAULT 'viewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-001-schema-sql-valuation-reports",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "valuation_reports",
    "displayName": "Valuation Reports",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "val_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "val_id              VARCHAR(50) UNIQUE"
      },
      {
        "name": "asset_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id            VARCHAR(50)"
      },
      {
        "name": "valuer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valuer              VARCHAR(150)"
      },
      {
        "name": "value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value_usd           BIGINT DEFAULT 0"
      },
      {
        "name": "valued_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valued_at           DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'final'",
        "sourceLine": "status              VARCHAR(30) DEFAULT 'final'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes               TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-002-schema-sql-webhook-deliveries",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id      INTEGER"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event           VARCHAR(120)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload         JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code     INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body   TEXT"
      },
      {
        "name": "attempted_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "attempted_at    TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-family-office-manager-backend-migrations-002-schema-sql-webhooks",
    "sourceProject": "AIFamilyOfficeManager",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             VARCHAR(500)"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret          VARCHAR(120)"
      },
      {
        "name": "events",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "events          TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active          BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-advisors",
    "sourceProject": "AIMandADealRoom",
    "name": "advisors",
    "displayName": "Advisors",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "advisor_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "advisor_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(150)"
      },
      {
        "name": "firm",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            VARCHAR(150)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role            VARCHAR(100)"
      },
      {
        "name": "contact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact         VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-ai-results",
    "sourceProject": "AIMandADealRoom",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(80) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-003-schema-sql-ai-results",
    "sourceProject": "AIMandADealRoom",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     VARCHAR(80) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input       JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output      JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at  TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-002-schema-sql-attachments",
    "sourceProject": "AIMandADealRoom",
    "name": "attachments",
    "displayName": "Attachments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type   VARCHAR(60)"
      },
      {
        "name": "resource_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id     INTEGER"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename        VARCHAR(255)"
      },
      {
        "name": "original_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_name   VARCHAR(255)"
      },
      {
        "name": "mimetype",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimetype        VARCHAR(120)"
      },
      {
        "name": "size_bytes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_bytes      INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by     VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-audit-log",
    "sourceProject": "AIMandADealRoom",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor           VARCHAR(150)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target          VARCHAR(200)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          VARCHAR(100)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result          VARCHAR(80)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-closing-checklist",
    "sourceProject": "AIMandADealRoom",
    "name": "closing_checklist",
    "displayName": "Closing Checklist",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "check_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "check_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "item",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item            VARCHAR(250)"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(150)"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date        DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-comps",
    "sourceProject": "AIMandADealRoom",
    "name": "comps",
    "displayName": "Comps",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "comp_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "comp_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target          VARCHAR(200)"
      },
      {
        "name": "multiple",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "multiple        NUMERIC(8,2) DEFAULT 0"
      },
      {
        "name": "metric",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metric          VARCHAR(40)"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-deals",
    "sourceProject": "AIMandADealRoom",
    "name": "deals",
    "displayName": "Deals",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "target_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_name     VARCHAR(200)"
      },
      {
        "name": "sector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sector          VARCHAR(80)"
      },
      {
        "name": "deal_value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "deal_value_usd  BIGINT DEFAULT 0"
      },
      {
        "name": "stage",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sourcing'",
        "sourceLine": "stage           VARCHAR(40) DEFAULT 'sourcing'"
      },
      {
        "name": "lead_advisor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead_advisor    VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-due-diligence-items",
    "sourceProject": "AIMandADealRoom",
    "name": "due_diligence_items",
    "displayName": "Due Diligence Items",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "dd_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "dd_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area            VARCHAR(80)"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(150)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings        TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-escrow-terms",
    "sourceProject": "AIMandADealRoom",
    "name": "escrow_terms",
    "displayName": "Escrow Terms",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "escrow_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "escrow_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "term_months",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "term_months     INTEGER DEFAULT 0"
      },
      {
        "name": "trigger",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trigger         VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'proposed'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'proposed'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-financial-models",
    "sourceProject": "AIMandADealRoom",
    "name": "financial_models",
    "displayName": "Financial Models",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "model_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "model_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(20)"
      },
      {
        "name": "base_case_irr",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "base_case_irr   NUMERIC(6,3) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-integration-plans",
    "sourceProject": "AIMandADealRoom",
    "name": "integration_plans",
    "displayName": "Integration Plans",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "plan_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "plan_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "workstream",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workstream      VARCHAR(120)"
      },
      {
        "name": "lead",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            VARCHAR(150)"
      },
      {
        "name": "deadline",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deadline        DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'planning'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-lois",
    "sourceProject": "AIMandADealRoom",
    "name": "lois",
    "displayName": "Lois",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "loi_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "loi_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "buyer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer           VARCHAR(200)"
      },
      {
        "name": "value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value_usd       BIGINT DEFAULT 0"
      },
      {
        "name": "exclusivity_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "exclusivity_days INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'submitted'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-002-schema-sql-notifications",
    "sourceProject": "AIMandADealRoom",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(200)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body            TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(80)"
      },
      {
        "name": "read_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "read_at         TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-post-close-reports",
    "sourceProject": "AIMandADealRoom",
    "name": "post_close_reports",
    "displayName": "Post Close Reports",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "report_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "report_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(40)"
      },
      {
        "name": "kpi",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kpi             VARCHAR(120)"
      },
      {
        "name": "value",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           VARCHAR(120)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'reported'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'reported'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-q-and-a",
    "sourceProject": "AIMandADealRoom",
    "name": "q_and_a",
    "displayName": "Q And A",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "qa_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "qa_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "question",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question        TEXT"
      },
      {
        "name": "asker",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asker           VARCHAR(150)"
      },
      {
        "name": "answer",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "answer          TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-regulatory-filings",
    "sourceProject": "AIMandADealRoom",
    "name": "regulatory_filings",
    "displayName": "Regulatory Filings",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "filing_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "filing_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "authority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "authority       VARCHAR(150)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(80)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'prepared'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'prepared'"
      },
      {
        "name": "filed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filed_at        TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-targets",
    "sourceProject": "AIMandADealRoom",
    "name": "targets",
    "displayName": "Targets",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "target_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "target_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "sector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sector          VARCHAR(80)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country         VARCHAR(80)"
      },
      {
        "name": "revenue_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "revenue_usd     BIGINT DEFAULT 0"
      },
      {
        "name": "ebitda_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "ebitda_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-term-sheets",
    "sourceProject": "AIMandADealRoom",
    "name": "term_sheets",
    "displayName": "Term Sheets",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "ts_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ts_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(20)"
      },
      {
        "name": "valuation_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "valuation_usd   BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "signed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signed_at       TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-002-schema-sql-users",
    "sourceProject": "AIMandADealRoom",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           VARCHAR(150) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        VARCHAR(120) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role            VARCHAR(20) DEFAULT 'viewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-003-schema-sql-vdr-doc-permissions",
    "sourceProject": "AIMandADealRoom",
    "name": "vdr_doc_permissions",
    "displayName": "Vdr Doc Permissions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                 SERIAL PRIMARY KEY"
      },
      {
        "name": "doc_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doc_id             VARCHAR(50) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role               VARCHAR(40) NOT NULL"
      },
      {
        "name": "can_view",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "can_view           BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "can_download",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "can_download       BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "watermark_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "watermark_required BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "page_range_start",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "page_range_start   INTEGER"
      },
      {
        "name": "page_range_end",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "page_range_end     INTEGER"
      },
      {
        "name": "granted_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "granted_by         VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at         TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at         TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-003-schema-sql-vdr-doc-views",
    "sourceProject": "AIMandADealRoom",
    "name": "vdr_doc_views",
    "displayName": "Vdr Doc Views",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "doc_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doc_id          VARCHAR(50) NOT NULL"
      },
      {
        "name": "viewer_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "viewer_email    VARCHAR(150)"
      },
      {
        "name": "viewer_role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "viewer_role     VARCHAR(40)"
      },
      {
        "name": "viewed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "viewed_at       TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "dwell_seconds",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "dwell_seconds   INTEGER DEFAULT 0"
      },
      {
        "name": "page_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "page_count      INTEGER DEFAULT 0"
      },
      {
        "name": "watermark_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "watermark_id    VARCHAR(80)"
      },
      {
        "name": "client_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_ip       VARCHAR(64)"
      },
      {
        "name": "user_agent",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent      VARCHAR(255)"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-vdr-documents",
    "sourceProject": "AIMandADealRoom",
    "name": "vdr_documents",
    "displayName": "Vdr Documents",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "doc_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "doc_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(250)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        VARCHAR(80)"
      },
      {
        "name": "uploaded_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_at     TIMESTAMPTZ"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(20)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-003-schema-sql-vdr-watermarks",
    "sourceProject": "AIMandADealRoom",
    "name": "vdr_watermarks",
    "displayName": "Vdr Watermarks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "watermark_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "watermark_id    VARCHAR(80) UNIQUE"
      },
      {
        "name": "doc_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "doc_id          VARCHAR(50) NOT NULL"
      },
      {
        "name": "viewer_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "viewer_email    VARCHAR(150)"
      },
      {
        "name": "viewer_role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "viewer_role     VARCHAR(40)"
      },
      {
        "name": "overlay_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overlay_text    TEXT"
      },
      {
        "name": "issued_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "issued_at       TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-002-schema-sql-webhook-deliveries",
    "sourceProject": "AIMandADealRoom",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id      INTEGER"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event           VARCHAR(120)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload         JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code     INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body   TEXT"
      },
      {
        "name": "attempted_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "attempted_at    TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-002-schema-sql-webhooks",
    "sourceProject": "AIMandADealRoom",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             VARCHAR(500)"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret          VARCHAR(120)"
      },
      {
        "name": "events",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "events          TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active          BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-working-capital-adjustments",
    "sourceProject": "AIMandADealRoom",
    "name": "working_capital_adjustments",
    "displayName": "Working Capital Adjustments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "wca_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "wca_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "item",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item            VARCHAR(200)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "direction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "direction       VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-mand-a-deal-room-backend-migrations-001-schema-sql-working-groups",
    "sourceProject": "AIMandADealRoom",
    "name": "working_groups",
    "displayName": "Working Groups",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "group_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "group_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "workstream",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workstream      VARCHAR(120)"
      },
      {
        "name": "lead",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead            VARCHAR(150)"
      },
      {
        "name": "members_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "members_count   INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-advisors",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "advisors",
    "displayName": "Advisors",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "advisor_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "advisor_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(150)"
      },
      {
        "name": "firm",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            VARCHAR(150)"
      },
      {
        "name": "expertise",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expertise       VARCHAR(200)"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-ai-results",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(80) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-003-schema-sql-ai-results",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(80)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-attachments",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "attachments",
    "displayName": "Attachments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type   VARCHAR(60)"
      },
      {
        "name": "resource_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id     INTEGER"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename        VARCHAR(255)"
      },
      {
        "name": "original_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_name   VARCHAR(255)"
      },
      {
        "name": "mimetype",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimetype        VARCHAR(120)"
      },
      {
        "name": "size_bytes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_bytes      INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by     VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-audit-log",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor           VARCHAR(150)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target          VARCHAR(200)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          VARCHAR(80)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result          VARCHAR(40)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-board-meetings",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "board_meetings",
    "displayName": "Board Meetings",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                 SERIAL PRIMARY KEY"
      },
      {
        "name": "meeting_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "meeting_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id         VARCHAR(50)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date               DATE"
      },
      {
        "name": "attendees_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "attendees_count    INTEGER DEFAULT 0"
      },
      {
        "name": "agenda",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agenda             TEXT"
      },
      {
        "name": "notes_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes_url          VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at         TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at         TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-003-schema-sql-cap-tables",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "cap_tables",
    "displayName": "Cap Tables",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                 SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id         VARCHAR(50)"
      },
      {
        "name": "stakeholder",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stakeholder        VARCHAR(200)"
      },
      {
        "name": "class",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "class              VARCHAR(60)"
      },
      {
        "name": "shares",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "shares             BIGINT DEFAULT 0"
      },
      {
        "name": "pct_ownership",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pct_ownership      NUMERIC(8,4) DEFAULT 0"
      },
      {
        "name": "invested_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "invested_usd       BIGINT DEFAULT 0"
      },
      {
        "name": "valuation_cap_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "valuation_cap_usd  BIGINT DEFAULT 0"
      },
      {
        "name": "discount_pct",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount_pct       NUMERIC(6,2) DEFAULT 0"
      },
      {
        "name": "issued_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issued_at          DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes              TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status             VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at         TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at         TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-capital-calls",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "capital_calls",
    "displayName": "Capital Calls",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "call_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "call_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(20)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'issued'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'issued'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date        DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-companies",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "companies",
    "displayName": "Companies",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "sector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sector          VARCHAR(80)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country         VARCHAR(80)"
      },
      {
        "name": "hq",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hq              VARCHAR(150)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'tracked'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'tracked'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-deals",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "deals",
    "displayName": "Deals",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "company_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_name    VARCHAR(200) NOT NULL"
      },
      {
        "name": "stage",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stage           VARCHAR(40)"
      },
      {
        "name": "sector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sector          VARCHAR(80)"
      },
      {
        "name": "round_size_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "round_size_usd  BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sourced'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'sourced'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-distributions",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "distributions",
    "displayName": "Distributions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "dist_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "dist_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(20)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(30)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'announced'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'announced'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-exits",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "exits",
    "displayName": "Exits",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "exit_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "exit_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(40)"
      },
      {
        "name": "value_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value_usd       BIGINT DEFAULT 0"
      },
      {
        "name": "multiple",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "multiple        NUMERIC(10,2) DEFAULT 0"
      },
      {
        "name": "closed_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closed_at       DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-follow-ons",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "follow_ons",
    "displayName": "Follow Ons",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "fo_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "fo_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "inv_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inv_id          VARCHAR(50)"
      },
      {
        "name": "round",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "round           VARCHAR(40)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "ownership_pct",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "ownership_pct   NUMERIC(8,4) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'considering'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'considering'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-founders",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "founders",
    "displayName": "Founders",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "founder_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "founder_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(150)"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role            VARCHAR(80)"
      },
      {
        "name": "linkedin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "linkedin        VARCHAR(300)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-funds",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "funds",
    "displayName": "Funds",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "vintage",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vintage         INTEGER"
      },
      {
        "name": "size_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "size_usd        BIGINT DEFAULT 0"
      },
      {
        "name": "gp_commit_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "gp_commit_usd   BIGINT DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'investing'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'investing'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-ic-memos",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "ic_memos",
    "displayName": "Ic Memos",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "memo_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "memo_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author          VARCHAR(150)"
      },
      {
        "name": "version",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "version         INTEGER DEFAULT 1"
      },
      {
        "name": "recommendation",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendation  VARCHAR(40)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-intros",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "intros",
    "displayName": "Intros",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "intro_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "intro_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(150)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target          VARCHAR(150)"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "made_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "made_at         TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-investments",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "investments",
    "displayName": "Investments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "inv_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "inv_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50)"
      },
      {
        "name": "amount_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amount_usd      BIGINT DEFAULT 0"
      },
      {
        "name": "valuation_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "valuation_usd   BIGINT DEFAULT 0"
      },
      {
        "name": "closed_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closed_at       DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-003-schema-sql-kpi-ingest-records",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "kpi_ingest_records",
    "displayName": "Kpi Ingest Records",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "record_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "record_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "source_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_id       VARCHAR(50)"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50)"
      },
      {
        "name": "kpi",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kpi             VARCHAR(80)"
      },
      {
        "name": "value",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value           NUMERIC(20,4) DEFAULT 0"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit            VARCHAR(20)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(20)"
      },
      {
        "name": "observed_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "observed_at     DATE"
      },
      {
        "name": "raw",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw             TEXT"
      },
      {
        "name": "alert_state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ok'",
        "sourceLine": "alert_state     VARCHAR(20) DEFAULT 'ok'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-003-schema-sql-kpi-ingest-sources",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "kpi_ingest_sources",
    "displayName": "Kpi Ingest Sources",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "source_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "source_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "kind",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kind            VARCHAR(30)"
      },
      {
        "name": "config",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "config          TEXT"
      },
      {
        "name": "schedule_cron",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule_cron   VARCHAR(60)"
      },
      {
        "name": "alert_threshold",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_threshold TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "last_run_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_run_at     TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-003-schema-sql-lp-comms-templates",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "lp_comms_templates",
    "displayName": "Lp Comms Templates",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "template_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "template_id     VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        VARCHAR(60)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject         VARCHAR(300)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body            TEXT"
      },
      {
        "name": "variables",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variables       TEXT"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-lp-reports",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "lp_reports",
    "displayName": "Lp Reports",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "report_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "report_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "fund_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fund_id         VARCHAR(50)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(20)"
      },
      {
        "name": "nav_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "nav_usd         BIGINT DEFAULT 0"
      },
      {
        "name": "dpi",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "dpi             NUMERIC(8,3) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-notifications",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(200)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body            TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(80)"
      },
      {
        "name": "read_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "read_at         TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-pipeline-notes",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "pipeline_notes",
    "displayName": "Pipeline Notes",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "note_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "note_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author          VARCHAR(150)"
      },
      {
        "name": "note",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "note            TEXT"
      },
      {
        "name": "sentiment",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'neutral'",
        "sourceLine": "sentiment       VARCHAR(20) DEFAULT 'neutral'"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-001-schema-sql-portfolio-metrics",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "portfolio_metrics",
    "displayName": "Portfolio Metrics",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "metric_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "metric_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "company_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id      VARCHAR(50)"
      },
      {
        "name": "kpi",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kpi             VARCHAR(80)"
      },
      {
        "name": "value",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "value           NUMERIC(20,4) DEFAULT 0"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period          VARCHAR(20)"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(80)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-term-sheets",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "term_sheets",
    "displayName": "Term Sheets",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "ts_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ts_id           VARCHAR(50) UNIQUE"
      },
      {
        "name": "deal_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_id         VARCHAR(50)"
      },
      {
        "name": "version",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "version         INTEGER DEFAULT 1"
      },
      {
        "name": "valuation_usd",
        "type": "BIGINT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "valuation_usd   BIGINT DEFAULT 0"
      },
      {
        "name": "terms",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms           TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-users",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           VARCHAR(150) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        VARCHAR(120) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role            VARCHAR(20) DEFAULT 'viewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-webhook-deliveries",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id      INTEGER"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event           VARCHAR(120)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload         JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code     INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body   TEXT"
      },
      {
        "name": "attempted_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "attempted_at    TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aivc-deal-flow-copilot-backend-migrations-002-schema-sql-webhooks",
    "sourceProject": "AIVCDealFlowCopilot",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             VARCHAR(500)"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret          VARCHAR(120)"
      },
      {
        "name": "events",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "events          TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active          BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-ai-js-ai-results",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(100) NOT NULL"
      },
      {
        "name": "request_params",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_params JSONB"
      },
      {
        "name": "result_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_data JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-alerts",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "alerts",
    "displayName": "Alerts",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity VARCHAR(50) DEFAULT 'info'"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(20)"
      },
      {
        "name": "threshold_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "threshold_value DECIMAL(15,4)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-asset-classes",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "asset_classes",
    "displayName": "Asset Classes",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "expected_return",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expected_return DECIMAL(5,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-integrations-js-beneficiaries",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "beneficiaries",
    "displayName": "Beneficiaries",
    "framework": "SQL",
    "sourceFile": "server/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER"
      },
      {
        "name": "full_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "relationship",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relationship VARCHAR(60)"
      },
      {
        "name": "allocation_pct",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allocation_pct NUMERIC(5,2)"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(255)"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(60)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-clients",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "clients",
    "displayName": "Clients",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "risk_tolerance",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'moderate'",
        "sourceLine": "risk_tolerance VARCHAR(50) DEFAULT 'moderate'"
      },
      {
        "name": "investment_horizon",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "investment_horizon VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "net_worth",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "net_worth DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "annual_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "annual_income DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-documents",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER REFERENCES clients(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "file_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url VARCHAR(500)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "uploaded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "uploaded_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-fees",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "fees",
    "displayName": "Fees",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER REFERENCES clients(id)"
      },
      {
        "name": "portfolio_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio_id INTEGER REFERENCES portfolios(id)"
      },
      {
        "name": "fee_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'management'",
        "sourceLine": "fee_type VARCHAR(100) DEFAULT 'management'"
      },
      {
        "name": "rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rate DECIMAL(5,4)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2)"
      },
      {
        "name": "aum_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aum_value DECIMAL(15,2)"
      },
      {
        "name": "billing_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-financial-goals",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "financial_goals",
    "displayName": "Financial Goals",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER REFERENCES clients(id)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "target_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_amount DECIMAL(15,2)"
      },
      {
        "name": "current_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_amount DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "target_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_date DATE"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'medium'"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in_progress'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'in_progress'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-batch09-gap-nonai-js-gap-features",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/batch09GapNonai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-integrations-js-linked-accounts",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "linked_accounts",
    "displayName": "Linked Accounts",
    "framework": "SQL",
    "sourceFile": "server/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(40)"
      },
      {
        "name": "item_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id VARCHAR(255)"
      },
      {
        "name": "account_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_name VARCHAR(255)"
      },
      {
        "name": "mask",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mask VARCHAR(8)"
      },
      {
        "name": "institution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institution VARCHAR(255)"
      },
      {
        "name": "linked_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "linked_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-performance-records",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "performance_records",
    "displayName": "Performance Records",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "portfolio_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio_id INTEGER REFERENCES portfolios(id)"
      },
      {
        "name": "record_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_date DATE"
      },
      {
        "name": "total_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_value DECIMAL(15,2)"
      },
      {
        "name": "daily_return",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "daily_return DECIMAL(8,4)"
      },
      {
        "name": "cumulative_return",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cumulative_return DECIMAL(8,4)"
      },
      {
        "name": "benchmark_return",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "benchmark_return DECIMAL(8,4)"
      },
      {
        "name": "sharpe_ratio",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sharpe_ratio DECIMAL(8,4)"
      },
      {
        "name": "volatility",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volatility DECIMAL(8,4)"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-portfolio-holdings",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "portfolio_holdings",
    "displayName": "Portfolio Holdings",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "portfolio_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio_id INTEGER REFERENCES portfolios(id)"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(20) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "shares",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "shares DECIMAL(15,4) DEFAULT 0"
      },
      {
        "name": "avg_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "avg_cost DECIMAL(15,4) DEFAULT 0"
      },
      {
        "name": "current_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_price DECIMAL(15,4) DEFAULT 0"
      },
      {
        "name": "market_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "market_value DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "gain_loss",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "gain_loss DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "allocation_pct",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "allocation_pct DECIMAL(5,2) DEFAULT 0"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-portfolios",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "portfolios",
    "displayName": "Portfolios",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER REFERENCES clients(id)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "strategy",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'balanced'",
        "sourceLine": "strategy VARCHAR(100) DEFAULT 'balanced'"
      },
      {
        "name": "total_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_value DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "cash_balance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cash_balance DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'moderate'",
        "sourceLine": "risk_level VARCHAR(50) DEFAULT 'moderate'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-integrations-js-regulatory-reports",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "regulatory_reports",
    "displayName": "Regulatory Reports",
    "framework": "SQL",
    "sourceFile": "server/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER"
      },
      {
        "name": "report_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_type VARCHAR(80)"
      },
      {
        "name": "period_start",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period_start DATE"
      },
      {
        "name": "period_end",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period_end DATE"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-integrations-js-tax-forms",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "tax_forms",
    "displayName": "Tax Forms",
    "framework": "SQL",
    "sourceFile": "server/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_id INTEGER"
      },
      {
        "name": "form_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "form_type VARCHAR(40)"
      },
      {
        "name": "tax_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year INTEGER"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "generated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "generated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-routes-integrations-js-tenant-branding",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "tenant_branding",
    "displayName": "Tenant Branding",
    "framework": "SQL",
    "sourceFile": "server/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tenant_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "tenant_slug VARCHAR(60) UNIQUE NOT NULL"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(255)"
      },
      {
        "name": "primary_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primary_color VARCHAR(20)"
      },
      {
        "name": "logo_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url VARCHAR(500)"
      },
      {
        "name": "support_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "support_email VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-transactions",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "transactions",
    "displayName": "Transactions",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "portfolio_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio_id INTEGER REFERENCES portfolios(id)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(20)"
      },
      {
        "name": "shares",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shares DECIMAL(15,4)"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price DECIMAL(15,4)"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "transaction_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "transaction_date TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-users",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'advisor'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'advisor'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-wealth-management-robo-advisor-server-seeds-seed-js-watchlist",
    "sourceProject": "AIWealthManagementRoboAdvisor",
    "name": "watchlist",
    "displayName": "Watchlist",
    "framework": "SQL",
    "sourceFile": "server/seeds/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(20) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "current_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_price DECIMAL(15,4)"
      },
      {
        "name": "target_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_price DECIMAL(15,4)"
      },
      {
        "name": "sector",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sector VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "added_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "added_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  }
];
