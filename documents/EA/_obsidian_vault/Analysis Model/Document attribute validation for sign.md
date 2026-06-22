---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1584734
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Document attribute validation for sign

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- for all existing documents of contract is obligation of attributes governed by Document_Type and by business rules - initial state of document attribute and update state of document attribute, which depends on the configuration of every country. 
If Contract.Created remotely=TRUE, then used business rule is always update state of document attribute.


	
- If any document attributes of required document type is not filled in, validation fails. The error message MSG_REQUIRED contains the list of all required document attributes

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Contract signing
