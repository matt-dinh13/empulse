---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID"
domain: "Analysis Model"
element_id: 1604557
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 KTP number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID

## 📝 Notes

NIK (Nomor Induk Kependudukan - Master Citizen Number) must meet the following pattern rules:

	
- Digits on positions #7 up to #12 (from the left) has to following format:
- DDMMYY where DD is in [01..31] or [41..71] ,MM is in [01..12]
Note: it is not necessary to check YY, as whole attribute is number and year can be in [00..99].
	
- Last four digits in the number (indicating the number of citizens with respective birth date living on the same address) cannot match '0000'.


If this is not true, warning is raised (MSG_KTP_PATTERN).

Class: Document.number

## 🔗 Connections (2)

- ← Dependency: [[KTP number (Action 1604564)]]
- ← Dependency: [[KTP validation rule]]

## 📊 Appears In (2 diagrams)

- Custom: Document validation - ID
- Custom: Validation Rules - ID
