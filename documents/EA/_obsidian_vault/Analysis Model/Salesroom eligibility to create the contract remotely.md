---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules"
domain: "Analysis Model"
element_id: 1716864
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Salesroom eligibility to create the contract remotely

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules

## 📝 Notes

Input:

	
- Salesroom


List of categories that define salesroom, that creates a contract remotely, is separated from the global parameter RemoteChannel.
If the Salesroom from input has Category from the list, output eligibility is set to TRUE, otherwise FALSE.

Output:

	
- Eligibility

## 🔗 Connections (2)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
