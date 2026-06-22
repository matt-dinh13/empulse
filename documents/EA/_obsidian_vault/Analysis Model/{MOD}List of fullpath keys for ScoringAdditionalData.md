---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages"
domain: "Analysis Model"
element_id: 1804070
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}List of fullpath keys for ScoringAdditionalData

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages

## 📝 Notes

A list of keys returned in CreditLimitChangeRequestResult notification:

	
- outputData.isRequiredRbpScoring
	
- {DEL CSI-1835}prelim2Result.instalmentPlan.mmil{/DEL}
	
- {ADD CSI-1835}outputData.instalmentPlan.mmil{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[ScoringAdditionalData]]

## 📊 Appears In (1 diagrams)

- Logical: Credit Limit Change Request - processing response message
