---
type: DataType
stereotype: "type"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/Communication tables"
domain: "Modules"
element_id: 1185065
diagrams: 1
connections: 1
tags:
  - datatype
  - modules
---

# 📐 REQUESTPAYMENT135 Payment Purpose

> **Type**: DataType · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model/Communication tables

## 📝 Notes

Data type with a list of payment purposes which can be requested for OBS via comm table REQUESTPAYMENT135 (e.g. in case of "Damages and deficits" payment type there must be distinguish of which payment purpose is going on - 'Write-off' or 'Contract sale').

## 🔗 Connections (1)

- ← Dependency «use»: [[REQUESTPAYMENT135]]

## 📊 Appears In (1 diagrams)

- Logical: Processing Incoming Payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CS - Contract sale |  |  |
| WO - Write-off |  |  |
| O - Other |  |  |
