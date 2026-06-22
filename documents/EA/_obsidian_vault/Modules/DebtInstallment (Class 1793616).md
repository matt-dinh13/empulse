---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage"
domain: "Modules"
element_id: 1793616
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 DebtInstallment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage

## 📝 Notes

Info about installment which is currently overdue or was paid after due date (was overdue in the history).

## 🔗 Connections (2)

- ← Dependency: [[DebtFullInfo]]
- → Dependency: [[InstallmentType (Enumeration 1793614)]]

## 📊 Appears In (1 diagrams)

- Logical: DebtFullInfo

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDate | dateTime |  |
| installmentNumber | int |  |
| installmentType | InstallmentType |  |
| paidDate | dateTime |  |
