---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v2"
domain: "Modules"
element_id: 1827343
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}ActivateDealRequest_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/VAS Deal Services/Deals_v2

## 📝 Notes

{ADD CSI-3533 /}
The deal activation request structure

## 🔗 Connections (2)

- ← Usage: [[Deals (Interface 1827210)]]
- → Usage: [[{ADD}DealPeriodParameters]]

## 📊 Appears In (1 diagrams)

- Logical: Deals_v2.Activate Deal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| billingDay | int |  |
| uuid | string |  |
| reasonNotice | string |  |
| activationDate | date |  |
| reasonCode | string |  |
| {ADD}dealPeriodData | {ADD}DealPeriodParameters |  |
