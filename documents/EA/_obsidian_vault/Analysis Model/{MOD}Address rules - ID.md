---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules"
domain: "Analysis Model"
element_id: 1775335
diagrams: 5
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Address rules - ID

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules

## 📝 Notes

- Regency/City, Sub-district and Village can contain value from a related code list. Code-list values can be whispered for the mentioned fields (for details see related GUI model). For a particular field (e.g. for sub-district), when the value of its master field (in this case master field for Sub-district is field Regency/City) will be from a code list, only related values from the hierarchy can be whispered. In other words, if Regency/City = "ABC" only Sub-districts "EFG" and "HIJ" will be whispered because "EFG" and "HIJ" relates to "ABC".
	
- ZIP Code is pre filled according to selected Regency/City, Sub-district and Village
	
- {ADD LOR-9666} For CEL contracts, there are only Street, block and number and  Regency/City fields available{/ADD}

## 🔗 Connections (1)

- → Generalization: [[Address rules]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: Edit Address - ID
- Custom: Edit Client Address - ID
- Custom: Edit Employer Address - ID
- Custom: LOR-9683 BSL UI: employer address and phone
