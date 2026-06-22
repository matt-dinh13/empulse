---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage"
domain: "Modules"
element_id: 1793615
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 PaidInstallmentTypeOverview

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage

## 📝 Notes

Overview of paid installment grouped by type

## 🔗 Connections (2)

- ← Dependency: [[DebtFullInfo]]
- → Dependency: [[InstallmentType (Enumeration 1793614)]]

## 📊 Appears In (1 diagrams)

- Logical: DebtFullInfo

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentType | InstallmentType |  |
| paidCount | int |  |
