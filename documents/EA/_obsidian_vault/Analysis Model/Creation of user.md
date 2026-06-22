---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Business rules"
domain: "Analysis Model"
element_id: 1772621
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Creation of user

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Business rules

## 📝 Notes

System:

	
- sends a query to UMC using the salesagentcode
	
- if the query is successful, creates a record for the User in BSL using UMC data; otherwise the user is not created

System creates relation from Entity to the User.

## 🔗 Connections (3)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
