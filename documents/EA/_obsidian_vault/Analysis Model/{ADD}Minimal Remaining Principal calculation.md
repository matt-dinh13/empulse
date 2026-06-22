---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869778
diagrams: 2
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Minimal Remaining Principal calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

{ADD CSI-4215 /}
Inputs:

	
- Contract
	
- PER service setting


Steps:
Rule returns value according to PER Service.Minimal Remaining Principal setting:
- no setting => Minimal Remaining Principal = 0
- fixed amount => Minimal Remaining Principal = fixed amount
- percentage of Total Principal => Minimal Remaining Principal = percentage of Total Principal * Contract.Financial Parameters.Provided Credit Amount
- percentage of Outstanding Principal => Minimal Remaining Principal = percentage of Outstanding Principal * Contract.Debt Catalogue.Outstanding Principal

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: CBL-28112 (CSI-4215) PER setting and calculation update
