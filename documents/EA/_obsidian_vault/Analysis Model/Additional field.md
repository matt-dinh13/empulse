---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH"
domain: "Analysis Model"
element_id: 1814007
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Additional field

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH

## 📝 Notes

If particular document is not present in AF, additional field will be visible to enter necessary data.
When document is added to AF, related field will become hidden (vice versa when document is removed, related field will be visible again).

Document type-field relation:

	
- document SSS and GSIS - field SSS/GSIS (Note: This field relates to both document types, i.e. can be visible only if both documents are missing.)


	
- document TIN - field TIN

## 🔗 Connections (2)

- ← Dependency: [[SSS_GSIS (GUIElement 1483822)]]
- ← Dependency: [[TIN (GUIElement 1483821)]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules - PH
