---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1868564
diagrams: 7
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract Insurance Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

This entity holds insurance specific information for insurance services adjusted on the contract, especially a link to the insurance contract.

## 🔗 Connections (3)

- → Dependency: [[Insurance Contract (Class 1852795)]]
- → Generalization: [[Contract Service (Class 1868570)]]
- → Dependency: [[Insurance Program]]

## 📊 Appears In (7 diagrams)

- Logical: Contract - Services
- Logical: Contract Service
- Logical: COS - LDM changes
- Logical: COS - LDM changes
- Logical: CSI-1881 Update of the Contract Service domain
- Logical: Insurance Commodity domain
- Logical: Insurance Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Insurance Contract Code | text |  |
| {MOD}Insurance Program Code | Text |  |
| {MOD}Insurance Program Version | Number |  |
| Estimated First Period Start | Date |  |
| Estimated First Period End | Date |  |
