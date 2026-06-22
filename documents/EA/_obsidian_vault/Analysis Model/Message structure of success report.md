---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Use Case"
domain: "Analysis Model"
element_id: 1239032
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Message structure of success report

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Use Case

## 📝 Notes

If file was processed without error system notices user internal message with following text:

Import communication file:
File: (FILE_COMMUNICATION.NAME)
Imported: (FILE_COMMUNICATION.IMPORT_DATE_TIME as MM/DD/YYYY HH:MM.SS) 
System finished import without errors at (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS).

Example:
Import communication file:
File: 20110315_Outgoing_calls.xml
Imported: 03/16/2011 10:30:00
System finished import without errors at 03/16/2011 10:30:16

## 🔗 Connections (1)

- ← Dependency: [[{MOD}07.060 Process communication list file]]

## 📊 Appears In (1 diagrams)

- Use Case: Import list of communication
