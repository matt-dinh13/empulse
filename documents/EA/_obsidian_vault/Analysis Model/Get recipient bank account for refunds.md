---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules"
domain: "Analysis Model"
element_id: 1877705
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get recipient bank account for refunds

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules

## 📝 Notes

This rule describes way of obtaining recipient bank account to disburse money via refunds. A bank account can be obtained automatically either from DDM (if any), or the account which was used for the loan disbursement and is mentioned on the AF.

The rules are country specific so the respective business usage is defined as follow:

	
- Get recipient bank account for refunds - IN


If a country does not have a rule defined, the function returns FALSE for next processing.

## 🔗 Connections (1)

- ← Generalization: [[Get recipient bank account for refunds - IN]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: {DEL}Creating Refunds automatically
