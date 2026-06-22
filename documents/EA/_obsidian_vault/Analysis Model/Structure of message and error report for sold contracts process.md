---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules"
domain: "Analysis Model"
element_id: 1536032
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Structure of message and error report for sold contracts process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract sale/Business Rules

## 📝 Notes

There is need to tell user exactly which records of the file are invalid.

System notifies user about processing finished with following message:
Import sold contracts file
File: (SoldContractsFile.Name)
Imported: (FILE_DESCRIPTOR.CREATION_DATE as MM/DD/YYYY HH:MM.SS) 

System finished import with errors:
Total records: (count of all records)
Correctly uploaded records: (count of processed records)
Unprocessed records: (count of unprocessed records)

File of unprocessed records: [link_to_error_XML_file]

Accompanying error file has following structure:
SoldContractsFile with comment = (error message)

Example of a message:
Import sold contracts file
File: B20130622_01.xml
Imported: 06/22/2011 12:30:00

System finished import with errors:
Total records: 100
Correctly uploaded records: 80
Unprocessed records: 20

File of unprocessed records: B20130622_01_excluded_items_01.xml

## 🔗 Connections (1)

- ← Dependency: [[01.802 Process sold contracts file (UseCase 1839172)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Import sold contracts file
