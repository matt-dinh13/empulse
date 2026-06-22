---
type: DataType
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1415443
diagrams: 2
connections: 1
tags:
  - datatype
  - modules
---

# 📐 STATEMENT240 Delivery Status

> **Type**: DataType
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Status of payment delivery to the target current account.
Three possible values:
"a" – accepted by the clearing house
"c" – refused by the clearing house or banking system
"f" – delivery failure - payment was refused by the target bank (money were returned to the banking system)

## 🔗 Connections (1)

- ← Dependency «use»: [[STATEMENT240]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| a - accepted |  |  |
| c - refused |  |  |
| f - failure |  |  |
