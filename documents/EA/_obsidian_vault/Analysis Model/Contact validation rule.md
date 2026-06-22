---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773394
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Contact validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- contactTypeCode - must be value of Contact_Type.Code
	
- priority
	
- value - Unique phone, Mandatory
	
- note
	
- extension - Unique phone
	
- ownership - must be value of Contact Ownership Type.Value
	
- verification - each record is validated according to Verification validation rule


	
- contactID - must exist in appropriate Contact.External ID


Count of contact of each type must be less or equal then Contact Type.Maximum count
If Statement channel=EMAIL then record contactTypeCode='PRIMARY_EMAIL' and contactTypeRole=CL is mandatory.

## 🔗 Connections (5)

- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- ← Dependency: [[Person validation rule]]
- ← Dependency: [[Employment validation rule]]
- → Dependency: [[Unique phone]]
- → Dependency: [[Verification validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
