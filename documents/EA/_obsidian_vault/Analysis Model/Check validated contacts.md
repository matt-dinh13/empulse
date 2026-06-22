---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822832
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check validated contacts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

For contact type, that must be verified (Contact_type.Verification_required), following condition must be met:

	
- TempAppl_Contact_Verification.Result of the record with Contact Value=value of the contact saved on the application form is in (VERIFIED, NOT_VERIFIED).


This validation is performed only is the privilege UC01_090 is granted.

## 🔗 Connections (1)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Use Case: Fill in application
