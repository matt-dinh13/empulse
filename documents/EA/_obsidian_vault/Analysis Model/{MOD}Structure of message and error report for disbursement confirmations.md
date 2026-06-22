---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Use Case Model"
domain: "Analysis Model"
element_id: 1242901
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Structure of message and error report for disbursement confirmations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Use Case Model

## 📝 Notes

There is need to tell user exactly which records of the file are invalid.

System notifies user about processing finished with following message:
Import disbursement confirmations
File: (Outgoing File.Name)
Imported: (FILE_DESCRIPTOR.CREATION_DATE as MM/DD/YYYY HH:MM.SS) 
System finished import with errors and {ADD CBL 2829}and warnings{/ADD} at (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS)
Error report: [link_to_error_report]  {ADD CBL 2829}...only if some error was logged{/ADD}
{ADD CBL 2829}
Warning report:  [link_to_warning_report] ...only if some warning was logged
{/ADD}

Accompanying error report has following structure:
Error report to disbursement confirmations
File: (Outgoing File.Name)
Imported: (FILE_DESCRIPTOR.CREATION_DATE as MM/DD/YYYY HH:MM.SS) 
Completed at: (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS)
Following records have not been processed due to an error:
Order; File row number; Contract identification number; Contract code; Transaction ID; Paid amount; Paid date; Error description

{ADD  
Warning report to disbursement confirmations
File: (Outgoing File.Name)
Imported: (FILE_DESCRIPTOR.CREATION_DATE as MM/DD/YYYY HH:MM.SS) 
Completed at: (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS)
Following records have not been processed due to a warning:
Order; File row number; Contract identification number; Contract code; Transaction ID; Paid amount; Paid date; Warning description
{/ADD}



Example of a message:
Import disbursement confirmations
File: B20130622_01.xml
Imported: 06/22/2011 12:30:00
System finished import with errors {ADD CBL 2829}and warnings{/ADD} at 06/22/2011 22:31:06
Error report: error report B20130622_01.xml
{ADD CBL 2829}
Warning report: warning  report B20130622_01.xml
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.310 Process disbursement confirmations]]

## 📊 Appears In (2 diagrams)

- Use Case: Disbursement confirmations
- Use Case: OVERVIEW - Installment Schedule
