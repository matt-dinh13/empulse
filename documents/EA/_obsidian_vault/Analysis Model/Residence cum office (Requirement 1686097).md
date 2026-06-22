---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN"
domain: "Analysis Model"
element_id: 1686097
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Residence cum office

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN

## 📝 Notes

If value is set to:

	
- "Yes", fields for Employer address will be hidden and information box with text MSG_RESIDENCE_CUM_OFFICE will appear instead


	
- "No", fields for Employer address will be visible


When Residence cum office = Yes, then whole client's contact address (not permanent) must be saved also as employer address, e.g. town in Contact address is saved to TemporaryApplication.TempAppl_Client_Address[Role=CONTACT].TempAppl_Address.Town and also to TemporaryApplication.TempAppl_Employment.TempAppl_Address.Town

## 🔗 Connections (1)

- ← Dependency: [[Residence cum office (GUIElement 1163825)]]

## 📊 Appears In (1 diagrams)

- Custom: IN - Business rules
