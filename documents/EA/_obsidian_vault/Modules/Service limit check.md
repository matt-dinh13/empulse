---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1877719
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Service limit check

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

// Checks if the service comply with the service limits

Input:
- service
- limits

Output:
- information if the service is eligible (true/false)

Algorithm:
If service limit is not set on service return true
If followings are true
- Service.LimitMinimalInstallments => limits.Terms
- Service.LimitMaximalInstallments <= limits.Terms
- Service.LimitMinimalCreditAmount => limits.GoodsPrice - limits.CashPayment
- Service.LimitMaximalCreditAmount <= limits.GoodsPrice - limits.CashPayment
return true
else return false

## 🔗 Connections (2)

- ← Dependency: [[POST product recalculation data - service]]
- ← Dependency: [[Evaluation of product sub-variant]]

## 📊 Appears In (2 diagrams)

- Custom: Evaluation of product sub-variant
- Use Case: Use Case
