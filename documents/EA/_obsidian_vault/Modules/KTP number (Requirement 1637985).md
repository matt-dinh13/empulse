---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/ID"
domain: "Modules"
element_id: 1637985
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 KTP number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/ID

## 📝 Notes

NIK (Nomor Induk Kependudukan - Master Citizen Number) must meet the following pattern rules:

	
- Digits on positions #7 up to #12 (from the left) has to match following format:
- DDMMYY where DD is in [01..31] or [41..71] ,MM is in [01..12]
Note: it is not necessary to check YY, as whole attribute is number and year can be in [00..99].
	
- Last four digits in the number (indicating the number of citizens with respective birth date living on the same address) cannot match '0000'.


If this is not true, warning is raised (MSG_KTP_PATTERN).

Class: Document.number

## 🔗 Connections (1)

- ← Dependency: [[KTP number (Action 1637990)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - ID
