---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1275468
diagrams: 5
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 RELIP Service Variant Term

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Financial parameters for calculation of installment plan for transaction.

## 🔗 Connections (4)

- ← Aggregation: [[RELIP Service Variant Term Rating Group]]
- → Aggregation: [[RELIP Service Variant]]
- ← Dependency «mapping»: [[ServiceRELIPVariantTermDto]]
- ← Association: [[Offer RELIP Service Variant]]

## 📊 Appears In (5 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Entities to be removed
- Logical: Offer Service
- Logical: REL Installment Plan service - parameters
- Logical: Service RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Term | int |  |
| AIR | percentage |  |
| InitTerm | int |  |
| InitAIR | percentage |  |
| PastDueAIR | percentage |  |
| PastDueInitAIR | percentage |  |
