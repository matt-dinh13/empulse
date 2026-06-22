---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH"
domain: "Analysis Model"
element_id: 1738024
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Person validation rule-PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH

## 📝 Notes

- Name1- Name character set, Max length 30
	
- Name2- Name character set, Max length 30
	
- Name3-Name character set, Max length 30
	
- contact – each record is validated according to Contact validation rule-PH
	
- remittance - each record is validated according to Remittance Data validation rule - PH

## 🔗 Connections (4)

- → Dependency: [[Length _= 30]]
- → Dependency: [[Name character set]]
- → Dependency: [[Remittance Data validation rule]]
- ← Dependency: [[{MOD}Application validation rule-PH]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - PH
