---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement approval/Use Case Model"
domain: "Analysis Model"
element_id: 1865658
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 LAP vector filter for output data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement approval/Use Case Model

## 📝 Notes

This rule presents a filter, i.e. list of attributes returned by LAP in output vector

CLIP
fullpathFilter[

	
- result
	
- initialWfCode
	
- limit.cashAvailableLimitRate
	
- rejectReason
	
- sourceData.reasonOfCancellation.reasonCode
	
- instalmentPlan.mmil
	
- {ADD CSI-873}prelim2Result.instalmentPlan.mmil
	
- outputData.isRequiredRbpScoring{/ADD}

]

## 🔗 Connections (1)

- ← Dependency: [[13.150 Send supplement to approval]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract supplement approval
