---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Cross validations"
domain: "Analysis Model"
element_id: 1775343
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 KTP/Birth date/Gender

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Cross validations

## 📝 Notes

KTP number, positions  #7 up to # 12 (from the left) has to match person birth date in format:

	
- DDMMYY (E.g. 040166 = 4.1.1966)
	
- for Gender=female 40 is added to DD (E.g. 440166 = 4.1.1966)


If this is not true, warning is raised.

## 🔗 Connections (1)

- ← Dependency: [[KTP_Birth day_Gender]]

## 📊 Appears In (1 diagrams)

- Custom: Cross validations
