---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1813879
diagrams: 1
connections: 4
tags:
  - object
  - analysis-model
---

# 🔸 List of contracts

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

A list of client’s contracts. Contract data are taken from entity CONTRACT.
{ADD CLM-2222}User with access right UC06_030_Hidden is able to see all hidden contacts, in other case hidden contracts is not shown.{/ADD}

Default order by: Created when desc

## 🔗 Connections (2)

- → Dependency: [[03.020 Show installment schedule (UseCase 1879461)]]
- ← Realisation: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (1 diagrams)

- Custom: List of contracts - Default

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created when | date |  |
| Contract number | code |  |
| Status | enumeration |  |
| Product | enumeration |  |
| Amount | Financial Amount |  |
| Total debt | Financial Amount |  |
| Total overdue Debt | Financial Amount |  |
| Payment channel | enumeration |  |
| Credit limit | Financial Amount |  |
| Contract detail | icon |  |
| Installment schedule | icon |  |
