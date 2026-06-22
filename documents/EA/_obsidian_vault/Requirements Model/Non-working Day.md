---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date"
domain: "Requirements Model"
element_id: 1819823
diagrams: 4
connections: 2
tags:
  - enumeration
  - requirements-model
---

# 📝 Non-working Day

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date

## 📝 Notes

This enumeration holds information about all non-working days in given country. This entity may be used by any BSL functionality which needs to know which days are working days and which are not. 

Every day is considered to be a working (business) day, if it isn't contained in this table.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Process newly imported non-working days]]
- ← Dependency: [[{MOD}Generate installment schedule algorithm]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-1728 (CBL-4595) Change of the last due date
- Logical: Direct Debit Statements
- Use Case: Generate installment schedule
- Use Case: ISGEN Generate installment schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Date | Date |  |
| Address level code | Text |  |
| Active Flag | boolean |  |
