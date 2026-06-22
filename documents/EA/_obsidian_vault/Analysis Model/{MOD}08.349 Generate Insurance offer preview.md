---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights"
domain: "Analysis Model"
element_id: 1879846
diagrams: 4
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.349 Generate Insurance offer preview

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights

## 📝 Notes

The use case presents a web service method for generating parameters of chosen Insurance offer

The method URL example:
GET .../v3/contractservice/insurance/preview

## 🔗 Connections (8)

- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- → Dependency: [[Allowed contract statuses for insurance activation]]
- → Realisation: [[{ADD}08.349 Get Insurance offer preview]]
- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- → Realisation: [[{ADD}08.349 Get Insurance offer preview - overrule]]
- → Dependency: [[{MOD}Check for an active insurance existence]]
- → UseCase «include»: [[08.348 Calculate Insurance offer parameters]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Logical: Contract Insurance Services - GET: Contract Insurance Service offer preview create v3
- Use Case: Insurance Service Offers API - Use Case Model
