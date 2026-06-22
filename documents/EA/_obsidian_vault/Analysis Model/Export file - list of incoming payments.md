---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854277
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Export file - list of incoming payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

{ADD PAYM-561 CBL-598}
Definition of export file with list of incoming payments.

File name:
"Inc_pay_<login>_<YYYYMMDD>_<HH24MISS>" where 

	
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
Export all columns from Standard search

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
