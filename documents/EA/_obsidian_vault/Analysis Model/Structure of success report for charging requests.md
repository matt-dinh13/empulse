---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878879
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Structure of success report for charging requests

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

If file was processed without error system notices user message with following text:

Import charging requests
File: (FILE_FEES.NAME)
Imported: (FILE_FEES.IMPORT_DATE_TIME as MM/DD/YYYY HH:MM.SS) 
System finished import without errors at (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS).

Example:
Import charging requests
File: 20110622_Fees.xml
Imported: 06/22/2011 22:30:00
System finished import without errors at 06/22/2011 22:31:06

## 🔗 Connections (1)

- ← Dependency: [[04.110 Process charging requests]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Charging request
