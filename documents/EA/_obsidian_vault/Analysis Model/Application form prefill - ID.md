---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID"
domain: "Analysis Model"
element_id: 1727260
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Application form prefill - ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID

## 📝 Notes

This rule describes, how the application form fields for ID variant are prefilled from CIF.

If cell in configuration xls does not have value, it means no prefill for such combination (application form field, application form type). If cell has value, then data from response of call Customer Data.GetCustomerDataRequest  are used for prefill.

There is specific possibility how to prefill data from response according to value in particular cell:

KTP document

	
- system in customerPersonGet finds document with documentType=KTP
	
- when such document is not found then nothing is preffiled
	
- system from response prefills document attributes document.documentCode

## 🔗 Connections (2)

- → Generalization: [[Prefill application form]]
- ← Dependency: [[AF Configuration - ID]]

## 📊 Appears In (2 diagrams)

- Custom: AF definition - ID
- Custom: Overview
