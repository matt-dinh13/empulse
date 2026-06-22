---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info"
domain: "Analysis Model"
element_id: 1318531
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PaidInstallmentTypeOverviewDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info

## 📝 Notes

{ADD PBR-830 /}
Overview of paid installment grouped by type

## 🔗 Connections (1)

- ← Dependency: [[{ADD}DebtFullInfoMessage]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Debt full info

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentType | InstallmentTypeDto |  |
| paidCount | int |  |
