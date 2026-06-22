---
type: DataType
stereotype: "type"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 1185066
diagrams: 2
connections: 1
tags:
  - datatype
  - modules
---

# 📐 REQUESTPAYMENT135 Payment type

> **Type**: DataType · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Data type with a list of payment types which can be requested for OBS via comm table REQUESTPAYMENT135.

## 🔗 Connections (1)

- ← Dependency «use»: [[REQUESTPAYMENT135]]

## 📊 Appears In (2 diagrams)

- Logical: Processing Incoming Payments - Communication Model
- Logical: Processing Incoming Payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| m - Deficits and Damages |  |  |
| GP - Gift payment |  |  |
| n - Small underpayment |  |  |
| CS - Contract sale |  |  |
| RFP - Receivable from partner |  |  |
| {ADD}CONS - Consolidation |  |  |
| {ADD}REW - Rewards |  |  |
