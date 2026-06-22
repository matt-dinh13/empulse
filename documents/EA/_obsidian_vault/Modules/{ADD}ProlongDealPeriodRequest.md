---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1"
domain: "Modules"
element_id: 1826436
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}ProlongDealPeriodRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v1

## 📝 Notes

{ADD CSI-2967 /}
A structure of the Deal Period prolongation request

## 🔗 Connections (2)

- → Usage: [[InsuranceAmount (Class 1795092)]]
- ← Usage: [[Deals (Interface 1827210)]]

## 📊 Appears In (1 diagrams)

- Logical: Prolong Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| startDate | date |  |
| endDate | date |  |
| firstOverdueDate | date |  |
| insuranceAmount | InsuranceAmount |  |
