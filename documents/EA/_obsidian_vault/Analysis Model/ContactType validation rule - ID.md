---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID"
domain: "Analysis Model"
element_id: 1538367
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 ContactType validation rule - ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID

## 📝 Notes

- for contactTypeCode=PRIMARY_MOBILE and contactTypeRole=CL, the value must pass validation Mobile phone number


	
- for contactTypeCode=HOME_PHONE and contactTypeRole=CL, the value must pass validation Land line phone number,


	
- for contactTypeCode=PRIMARY_EMAIL and contactTypeRole=CL, the value must pass validation Contact value,


	
- for contactTypeCode=PHONE and contactTypeRole=EM, the value must pass validation  General phone number,

## 🔗 Connections (6)

- → Dependency: [[Contact value]]
- → Dependency: [[Mobile phone number]]
- → Dependency: [[Land line phone number]]
- → Dependency: [[{DEL}Land phone number]]
- → Dependency: [[General phone number]]
- ← Dependency: [[{MOD}Application validation rule-ID]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules - ID
