---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID"
domain: "Analysis Model"
element_id: 1773422
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 KTP validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID

## 📝 Notes

This validation is performed only for document with documentTypeCode='KTP':
Value of documentTypeAttribute=EXP_DATE must pass these validations - Date, Must be in future
Value of documentTypeAttribute=DOC_ID must pass these validations - KTP number length, KTP number

## 🔗 Connections (5)

- ← Dependency: [[{MOD}Application validation rule-ID]]
- → Dependency: [[KTP number length]]
- → Dependency: [[Date (Requirement 1789783)]]
- → Dependency: [[KTP number]]
- → Dependency: [[Must be in future]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules - ID
