---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Use Case Model"
domain: "Analysis Model"
element_id: 1242902
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Structure of success message for disbursement confirmation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Use Case Model

## 📝 Notes

If the file was processed without error system notices user message with following text:

Import disbursement confirmations
File: (Outgoing File.Name)
Imported: (FILE_DESCRIPTOR.CREATION_DATE as MM/DD/YYYY HH:MM.SS) 
System completed the file processing without errors at (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS).

Example of the message:
Import disbursement confirmations
File: B20130622_01.xml
Imported: 06/22/2011 12:30:00
System finished import without errors at 06/22/2011 22:31:06

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.310 Process disbursement confirmations]]

## 📊 Appears In (2 diagrams)

- Use Case: Disbursement confirmations
- Use Case: OVERVIEW - Installment Schedule
