---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/KZ"
domain: "Analysis Model"
element_id: 1565368
diagrams: 1
connections: 12
tags:
  - object
  - analysis-model
---

# 🔸 List of contracts

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/KZ

## 📝 Notes

A list of client’s contracts. Contract data are taken from entity CONTRACT.

Default order by: Created when desc

## 🔗 Connections (7)

- → Dependency: [[{MOD}Business type of loan]]
- → Dependency: [[03.020 Show installment schedule (UseCase 1879461)]]
- → Dependency: [[{MOD}01.210 Show contract detail]]
- → Dependency: [[{MOD} 03.021 Show REL installment schedule]]
- → Dependency: [[03.021 Show REL installment schedule (UseCase 1878580)]]
- → Dependency: [[{MOD}12.601 Show account detail]]
- → Dependency: [[{MOD}Business type of loan]]

## 📊 Appears In (1 diagrams)

- Custom: List of contracts - KZ

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Total debt | Financial Amount |  |
| Total overdue debt | Financial Amount |  |
| Amount | Financial Amount |  |
| Contract number | code |  |
| Contract detail | icon |  |
| Installment schedule | icon |  |
| POS Code | code |  |
| Product | enumeration |  |
| Sales agent name and code | code |  |
| Signed when | date |  |
| Account detail | icon |  |
| Status | enumeration |  |
| Debt calculator | icon |  |
