---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/Use Case model"
domain: "Analysis Model"
element_id: 1310792
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Export file - list of outgoing payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/Use Case model

## 📝 Notes

Definition of export file with list of outgoing payments.

File name:
"Out_pay_<login>_<YYYYMMDD>_<HH24MISS>" where 

	
- <login> - login name of current user
	
- <YYYYMMDD> - date of file creation 
	
- <HH24MISS> - time of file creation in 24H format, fraction = seconds 


Folder on external storage:
SEARCH_EXPORT_RESULT

File format:

	
- CSV file with header
	
- separator ";" 

The format has to be importable into Excel 2007 and later versions.

File structure:
See grid Found payments with outgoing payments search result (export all columns except for Checkbox for selection).

## 🔗 Connections (2)

- → Dependency: [[Found payments]]
- ← Dependency: [[05.101 Export outgoing payments (UseCase 1459045)]]

## 📊 Appears In (1 diagrams)

- Use Case: Browse Outgoing Payments
