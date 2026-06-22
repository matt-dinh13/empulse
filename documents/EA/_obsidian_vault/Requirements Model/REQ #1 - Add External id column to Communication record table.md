---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3917 (CLM-1508) BSL Communication - support for notification about specific comm records"
domain: "Requirements Model"
element_id: 1645534
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Add External id column to Communication record table

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3917 (CLM-1508) BSL Communication - support for notification about specific comm records

## 📝 Notes

Goal of this requirement is to add External id column to Communication record table as record identifier which will be used towards external entities. External id is same as id, but it has prefix CR. Type of this new column is VARCHAR2(30 CHAR).

Instructions:
1. Add external id column to communication record table.
 - column name: EXTERNAL_ID
 - column type: VARCHAR2(30 CHAR)
 - target table: BSL_COMMUNICATION_RECORD
2. Generate external id for all existing entries (use existing id with prefix CR).
3. Make sure that external id is generated on communication record creation (same as id with prefix CR).

Note:
This column should be already implemented as part CLM237, but it is not.

## 📊 Appears In (1 diagrams)

- Custom: CBL-3917 (CLM-1508) BSL Communication - REQ #1
