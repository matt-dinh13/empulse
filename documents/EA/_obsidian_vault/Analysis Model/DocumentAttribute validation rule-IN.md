---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN"
domain: "Analysis Model"
element_id: 1819515
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 DocumentAttribute validation rule-IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN

## 📝 Notes

Document with documentTypeCode=STUDENT_ID:

	
- for documentTypeAttribute=DOC_ID, value ID Number


Document with documentTypeCode=PAN_CARD:

	
- for documentTypeAttribute=DOC_ID, value Number PAN
	
- for documentTypeAttribute=ISS_DATE, value Issue date


Document with documentTypeCode=PASSPORT:

	
- for documentTypeAttribute=DOC_ID, value Number Passport


Document with documentTypeCode=VOTERS_ID:

	
- for documentTypeAttribute=DOC_ID, value Number Voters

## 🔗 Connections (6)

- → Dependency: [[Number (Requirement 1443563)]]
- → Dependency: [[Issue date (Requirement 1443561)]]
- → Dependency: [[Number (Requirement 1443566)]]
- → Dependency: [[Number (Requirement 1443564)]]
- → Dependency: [[ID Number (Requirement 1443562)]]
- ← Dependency: [[Document validation rule-IN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - IN
