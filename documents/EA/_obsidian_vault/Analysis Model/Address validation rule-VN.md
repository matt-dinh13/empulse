---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN"
domain: "Analysis Model"
element_id: 1773135
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Address validation rule-VN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN

## 📝 Notes

- region.code -  must be value of VNRegion
	
- district.code-must be value of VNDistrict; if filled-in, the value in attribute regionCode must be valid according to aggregation between enumerations District and Region
	
- houseNumber - Length 20, Text
	
- street- Length 40, Text


	
- town.code -  must be value of Town - VN; if filled-in, the value in attribute districtCode must be valid according to aggregation between enumerations Town and District

## 🔗 Connections (4)

- → Dependency: [[Text]]
- → Dependency: [[Length 20]]
- → Dependency: [[Length 40]]
- ← Dependency: [[Application validation rule-VN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules-VN
