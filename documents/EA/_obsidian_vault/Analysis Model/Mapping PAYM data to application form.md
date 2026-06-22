---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Prefill application/Business Rules"
domain: "Analysis Model"
element_id: 1738962
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping PAYM data to application form

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Prefill application/Business Rules

## 📝 Notes

This rule describes how client data from PAYM (Payment modul) are mapped to fields in application form. 
Mapping of PAYM attributes to AF fields is defined under following link: https://git.homecredit.net/product/bsl/blob/develop/hs-parent/hs-doc/country-customization/other/Mapping%20of%20PAYM%20data.xlsx

Common rules:

	
- When a key (to a code list) from PAYM cannot be found, the related field is not prefilled

## 🔗 Connections (1)

- ← Dependency: [[Prefill application form]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Product business rules
