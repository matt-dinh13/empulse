---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825239
diagrams: 2
connections: 21
tags:
  - requirement
  - analysis-model
---

# 📋 Service eligibility rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Service eligibility criteria rules used for collection tool eligibility evaluation.

This is general rule specified by: 

- Maximal current DPD on contract
- Client eligibility for service type
- Number of remaining installments to apply service
- Moratorium for service usage
- Contract is in defined status
- Maximal number of service usage per defined period
- Active collection tool service request exists
- Active request of the same service type exists
- {ADD}Grace period assigned
- Maximal number of service usage on contract

## 🔗 Connections (21)

- ← Dependency: [[Check contracts for collection tool services eligibility]]
- ← Dependency: [[Check chosen service for eligibility]]
- ← Generalization: [[Contract is in defined status]]
- ← Generalization: [[{ADD}Minimal length of period since last request]]
- ← Generalization: [[{ADD}Minimal number of paid installments to apply service]]
- ← Generalization: [[Number of remaining installments to apply service]]
- ← Generalization: [[Maximal historical DPD on contract]]
- ← Generalization: [[Minimal number of days before service usage]]
- ← Generalization: [[Installment schedule exists]]
- ← Generalization: [[Grace period assigned]]
- ← Generalization: [[Maximal number of service usage by number of terms]]
- ← Generalization: [[Maximal number of service type usage per defined period]]
- ← Generalization: [[Moratorium for service usage]]
- ← Generalization: [[{ADD}Maximal number of days from the nearest nonzero installment]]
- ← Generalization: [[{ADD}Active request of other Service type exists]]
- ← Generalization: [[Maximal number of service instance usage per defined period]]
- ← Generalization: [[Active request of the same service type exists]]
- ← Generalization: [[Active collection tool service request exists]]
- ← Generalization: [[Maximal number of service usage on contract]]
- ← Generalization: [[Maximal current DPD on contract]]
- ← Generalization: [[{DEL}Client eligibility for service type]]

## 📊 Appears In (2 diagrams)

- Custom: Eligibility Criteria Repository
- Use Case: Collection tools request
