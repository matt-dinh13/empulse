---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/KZ"
domain: "Analysis Model"
element_id: 1424437
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping CIF data to application form-KZ

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/KZ

## 📝 Notes

Employment information:
Employer/ University and Employer address data should not be prefilled 
- if partyRole->audit.modifiedData will older then GL ClientDataValidityLength  or 
- Economical status = Retired pensioner, Handicapped 1st group, Handicapped 2nd group, Handicapped 3rd group

## 🔗 Connections (1)

- → Generalization: [[Mapping CIF data to application form]]

## 📊 Appears In (2 diagrams)

- Custom: AF definition - KZ
- Custom: Business rules - KZ
