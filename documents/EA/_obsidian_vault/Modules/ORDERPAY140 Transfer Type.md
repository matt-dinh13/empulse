---
type: DataType
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1415444
diagrams: 2
connections: 1
tags:
  - datatype
  - modules
---

# 📐 ORDERPAY140 Transfer Type

> **Type**: DataType
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Type of outgoing payment transfer - directly or through a technical account:
'd' - direct
'b' - technical account (MT100) - single - currently not used
'm' - technical account (MT102) - currently not used
'k' - technical account (MT102) - Kazpost

## 🔗 Connections (1)

- ← Dependency «use»: [[ORDERPAY140]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| d - direct |  |  |
| b - technical account MT 100 - single |  |  |
| m - technical account MT 102 |  |  |
| k - technical account MT 102 - Kazpost |  |  |
