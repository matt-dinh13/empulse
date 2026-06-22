---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service"
domain: "Modules"
element_id: 1081460
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Payable Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service

## 📝 Notes

It is structure of one Installment Part Type for the Termination Installment which is calculated from the Installment Parts of the original Installments of Installment Type = STANDARD and having Due Date >= ER Due Date.

## 🔗 Connections (1)

- → Aggregation: [[Payable Items]]

## 📊 Appears In (1 diagrams)

- Logical: Process service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Part Type | Installment Part Type |  |
| Tariff Item | Tariff Item Type |  |
| Installment | int |  |
| Due date | DateTime |  |
