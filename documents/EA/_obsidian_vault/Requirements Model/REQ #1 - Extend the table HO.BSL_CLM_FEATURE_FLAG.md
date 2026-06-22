---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8016 (CLM-2483) Replication of ID documents to PIF"
domain: "Requirements Model"
element_id: 1494679
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Extend the table HO.BSL_CLM_FEATURE_FLAG

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8016 (CLM-2483) Replication of ID documents to PIF

## 📝 Notes

Goal of this task is to extend the table HO.BSL_CLM_FEATURE_FLAG with following columns:

Column Name	Type		Type Mod	Not Null	Default	Comment
CREATION_DATE	DATE		[NULL]	FALSE	[NULL]		Date when record was created in the database
CREATED_BY	NUMBER(18,0)	[NULL]	FALSE	0		User who created record
UPDATE_DATE	DATE		[NULL]	FALSE	[NULL]		The last date when record was updated
UPDATED_BY	NUMBER(18,0)	[NULL]	FALSE	0		The last User who updated record
deleted. Record cannot be standardly selected or worked with in any use case. It can be found only in database.

Notification: these are standard sets of columns, which should be used in all tables.

## 📊 Appears In (1 diagrams)

- Custom: CBL-8016 (CLM-2483) Replication of ID documents to PIF
