---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1869957
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 Contract Service

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Logical Data Model

## 📝 Notes

This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (6)

- → Usage: [[Contract Service Status (Class 1869962)]]
- ← Aggregation: [[Contract Service Role]]
- → Usage: [[Contract Service Status Reason (Class 1869960)]]
- ← Aggregation: [[Loan Service Request (Class 1869956)]]
- ← Generalization: [[Contract Insurance Service (Class 1869955)]]
- ← Generalization: [[Contract Card Service (Class 1869953)]]

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
| {ADD}Account Number | string |  |
