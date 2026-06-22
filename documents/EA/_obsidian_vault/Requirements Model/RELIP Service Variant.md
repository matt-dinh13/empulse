---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1275470
diagrams: 5
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 RELIP Service Variant

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Key values for definition parameters for calculation of installment plan for transaction.

## 🔗 Connections (6)

- → Dependency: [[{MOD}Transaction Type]]
- ← Aggregation: [[RELIP Service Variant Term]]
- ← Aggregation: [[RELIP Service Variant Merchant]]
- → Aggregation: [[RELIP Service]]
- → Dependency: [[RELIP Installment Plan Type]]
- ← Dependency «mapping»: [[ServiceRELIPVariantDto]]

## 📊 Appears In (5 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Entities to be removed
- Logical: Offer Service
- Logical: REL Installment Plan service - parameters
- Logical: Service RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Number | int |  |
| Name | text (255) |  |
| Description | text (255) |  |
| Transaction Type | {MOD}Transaction Type |  |
| Transaction Amount Min | Financial Amount |  |
| Transaction Amount Max | Financial Amount |  |
| Transaction Date From | date |  |
| Transaction Date To | date |  |
| Installment Plan Type | RELIP Installment Plan Type |  |
| Premium | boolean | False |
