---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Cross validations"
domain: "Analysis Model"
element_id: 1775339
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Unique phones 

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Cross validations

## 📝 Notes

All phone numbers have to be different each other (global parameter BL_VALIDATE_UNIQUE_PHONES_AF). {ADD LOR-9666} Only exception is employer phone and Primary phone number for CEL contracts. There it can be duplicate for economical status= Self employed{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[Unique phones]]

## 📊 Appears In (2 diagrams)

- Custom: Cross validations
- Custom: LOR-9683 BSL UI: employer address and phone
