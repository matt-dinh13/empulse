---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1850241
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Contract Service

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Logical Data Model

## 📝 Notes

This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (3)

- ← Aggregation: [[COS.Contract Service Role]]
- ← Aggregation: [[Loan Service Request (Class 1850239)]]
- → Usage: [[Contract Service Status]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Evaluation Paused | boolean |  |
| When Created | {MOD}Check Moment Type |  |
| End Date | Date |  |
| Start Date | Date |  |
| Status | Contract Service Status |  |
| Status Reason | Contract Service Status Reason |  |
| External ID | string |  |
| Commodity External ID | string |  |
| Status Reason Description | string |  |
| Service code | string |  |
| Service version | int |  |
| Tariff code | string |  |
| Tariff version | int |  |
| Service External Id | string |  |
| Contract Code | string |  |
| Transaction Supplement Id | string |  |
