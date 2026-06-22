---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773408
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Verification validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- contactValue


	
- externallyVerifiedCode - must be empty, if externalUUID is not empty
	
- lastVerificationAttempt - cannot be in the future


	
- verificationResult - must be value of Verification result
	
- externalUUID - must be empty, if externallyVerifiedCode is not empty

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Document validation rule]]
- ← Dependency: [[Contact validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
