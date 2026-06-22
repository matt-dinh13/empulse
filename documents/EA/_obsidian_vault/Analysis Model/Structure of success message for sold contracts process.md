---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules"
domain: "Analysis Model"
element_id: 1536033
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Structure of success message for sold contracts process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules

## 📝 Notes

If the file was processed without error system notices user message with following text:

Import sold contracts file
File: (SoldContractsFile.Name)
Imported: (FILE_DESCRIPTOR.CREATION_DATE as MM/DD/YYYY HH:MM.SS) 

System completed the file processing without errors at (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS).
Total records: (count of all records)
Correctly uploaded records: (count of processed records)
Unprocessed records: (count of unprocessed records)

Example of the message:
Import sold contracts file
File: B20130622_01.xml
Imported: 06/22/2011 12:30:00

System finished import without errors:
Total records: 100
Correctly uploaded records: 100
Unprocessed records: 0

## 🔗 Connections (1)

- ← Dependency: [[01.802 Process sold contracts file (UseCase 1839172)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-9299 (CLM-2895) Entrustment Lending support in CLM
- Use Case: Import sold contracts file
