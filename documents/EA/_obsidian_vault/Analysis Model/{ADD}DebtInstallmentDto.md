---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info"
domain: "Analysis Model"
element_id: 1318532
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}DebtInstallmentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info

## 📝 Notes

{ADD PBR-830 /}
Info about installment which is currently overdue or was paid after due date (was overdue in the history).

## 🔗 Connections (1)

- ← Dependency: [[{ADD}DebtFullInfoMessage]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Debt full info

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentNumber | int |  |
| installmentType | InstallmentTypeDto |  |
| dueDate | dateTime |  |
| paidDate | dateTime |  |
