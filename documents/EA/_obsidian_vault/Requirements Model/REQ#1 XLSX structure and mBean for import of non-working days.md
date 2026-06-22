---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date"
domain: "Requirements Model"
element_id: 1366144
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 XLSX structure and mBean for import of non-working days

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date

## 📝 Notes

1. Prepare XLSX structure for countries - there should be possibility to automatically/easily generate INSERT script from the data in the structure, including data type validation checks. The INSERT script should return list of ids of created non-working days - it will be further used as described in point 2. Check structure of DB table BSL_NON_WORKING_DAY for structure and data types of its attributes. Date and Code have to be unique values. Address level code of non-working day will be filled and inserted into the DB but it will not be further used for now.

2. Prepare script/mBean to be executed after the data from XLSX are successfully inserted to DB table BSL_NON_WORKING_DAY. It will take a list of non-working day ids on the input. For each new non-working day we need to update contracts with last due date = new non-working day date and create a new version of their last installment with due date moved to a closest future working day (that is not present in the non-working day table).

## 🔗 Connections (1)

- → Generalization: [[PAYM-1728 (CBL-4595) Change of the last duedate]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1728 (CBL-4595) Change of the last due date
