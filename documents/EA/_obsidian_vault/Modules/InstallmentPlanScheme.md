---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST"
domain: "Modules"
element_id: 1757476
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 installmentPlanScheme

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST

## 🔗 Connections (1)

- ← Dependency: [[generateRequest]]

## 📊 Appears In (1 diagrams)

- Logical: GenerateIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| dayCountMethod | string |  |
| annuityRoundingMethod | string |  |
| annuityRoundingScale | integer |  |
| interestRoundingMethod | string |  |
| interestRoundingScale | integer |  |
| includeDeferredInterest | string |  |
| keepEqualLastInstallmentAmount | boolean |  |
| recalculateInterestRate | boolean |  |
