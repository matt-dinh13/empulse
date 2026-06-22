---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v2"
domain: "Modules"
element_id: 1827345
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}DealPeriodParameters

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v2

## 📝 Notes

{ADD CSI-3533 /}
Data of Deal (Insurance) period calculated (prepared) externally.

## 🔗 Connections (2)

- → Usage: [[MoneyType (Class 1827344)]]
- ← Usage: [[{ADD}ActivateDealRequest_v2]]

## 📊 Appears In (1 diagrams)

- Logical: Deals_v2.Activate Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| premium | MoneyType |  |
| sumInsured | MoneyType |  |
| periodStartDate | date |  |
| periodEndDate | date |  |
