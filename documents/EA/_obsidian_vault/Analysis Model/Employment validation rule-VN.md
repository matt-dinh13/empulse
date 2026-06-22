---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN"
domain: "Analysis Model"
element_id: 1773128
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Employment validation rule-VN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN

## 📝 Notes

- employerName - Text, Length 60
	
- employerAddress – validated according to Address validation rule-VN
	
- employerContact – validated according to Contact validation rule-VN
	
- employedFrom - Date in past
	
- profession.code- must be value of Profession

## 🔗 Connections (4)

- → Dependency: [[Date in past]]
- → Dependency: [[Length60]]
- → Dependency: [[Text]]
- ← Dependency: [[Application validation rule-VN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules-VN
