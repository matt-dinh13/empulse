---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/VN"
domain: "Analysis Model"
element_id: 1565327
diagrams: 1
connections: 5
tags:
  - object
  - analysis-model
---

# 🔸 List of contracts

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/VN

## 📝 Notes

A list of client’s contracts. Contract data are taken from entity CONTRACT.

Default order by: Created when desc

## 🔗 Connections (3)

- → Dependency: [[{MOD} 03.021 Show REL installment schedule]]
- → Dependency: [[03.020 Show installment schedule (UseCase 1879461)]]
- → Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (1 diagrams)

- Custom: List of contracts - VN

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created when | date |  |
| Contract number | code |  |
| Status | enumeration |  |
| Product | enumeration |  |
| Amount | Financial Amount |  |
| Total debt | Financial Amount |  |
| Total outstanding debt | Financial Amount |  |
| Credit limit | Financial Amount |  |
| Payment channel | enumeration |  |
| POS Code | code |  |
| Contract detail | icon |  |
| SA Code | code |  |
| Installment schedule | icon |  |
