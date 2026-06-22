---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822821
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Determine Check moment type flag

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

According to following rules, Check_Moment_Type based on Contract_Negotiation_Process_Type is determined (e.g. for Document.WhenCreated attribure):

	
- Contract_Negotiation_Process_Type=ONE_BLOCK, then Check_Moment_Type value 'AFF' is used
	
- Contract_Negotiation_Process_Type=TWO_BLOCKS and Contract doesn't exist, then Check_Moment_Type value 'AFF1' is used
	
- Contract_Negotiation_Process_Type=TWO_BLOCKS and Contract exist, then Check_Moment_Type value 'AFF2' is used

## 🔗 Connections (4)

- ← Dependency: [[Client consent - product AF (GUIElement 1330400)]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[Creation of document object]]
- ← Dependency: [[Application Processing]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Use Case: Contract origination
