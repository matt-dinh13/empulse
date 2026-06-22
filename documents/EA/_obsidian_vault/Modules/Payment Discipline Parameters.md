---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline"
domain: "Modules"
element_id: 1152114
diagrams: 11
connections: 9
tags:
  - class
  - modules
---

# 🔷 Payment Discipline Parameters

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline

## 📝 Notes

This class defines parameters for evaluation of payment discipline.

## 🔗 Connections (9)

- ← Dependency «mapping»: [[PaymentDisciplineParametersDto]]
- → Aggregation: [[Fees-back Service]]
- ← Association: [[Gift Payment Service]]
- → Aggregation: [[Grace Period Service]]
- → Dependency: [[DPD Scope Type]]
- ← Dependency: [[Checking of payment discipline]]
- ← Dependency: [[Checking of correct installment payments]]
- → Aggregation: [[{MOD}CEL Rewards Service]]
- → Aggregation: [[{ADD}Interest Back Service]]

## 📊 Appears In (11 diagrams)

- Custom: Payment discipline
- Logical: CEL Rewards - Setting
- Logical: Fees-back
- Logical: Gift Payment
- Logical: Grace Period - Setting
- Logical: IBACK
- Logical: Payment Discipline
- Logical: Service CELREW Data
- Logical: Service FBACK Data
- Logical: Service GIFTP Data
- Logical: Service GRPER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DPD delay tolerance | Integer |  |
| DPD amount tolerance | Financial amount |  |
| DPD scope | Char | I |
| Differ Tolerance for Last DPD | boolean | false |
| Last DPD delay tolerance | Integer |  |
| Last DPD amount tolerance | Financial amount |  |
