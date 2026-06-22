---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773405
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Document cross validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

This rule describes validation for collection of following attributes in case both of attributes are on input

	
- documentTypeCode - if filled-in, the stored DocumentTypeCode for respective uuid must be equal to value from input
	
- uuid - if filled-in, the documenTypeCode must be equal to stored DocumentTypeCode for respective uuid from input


If the validation is not met then MSG_IncompatibleDocumentTypeCode appears.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Document validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
