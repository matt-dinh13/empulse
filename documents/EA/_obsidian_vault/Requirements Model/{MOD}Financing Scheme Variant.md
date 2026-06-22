---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1668706
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Financing Scheme Variant

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Defines available combinations of 
- Term
- AIR or Annuity
for particular Financing Scheme.

## 🔗 Connections (4)

- → Aggregation: [[Financing Scheme (Class 1668708)]]
- → Dependency: [[Financing Scheme Variant Type]]
- ← Aggregation: [[Financing Scheme Variant Criterion]]
- ← Dependency: [[Offer Financial Parameter]]

## 📊 Appears In (2 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Financing Scheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Number | integer |  |
| Type | string |  |
| Term | integer |  |
| Total Monthly Payment | decimal |  |
| AIR | percentage |  |
| InitTerm | integer |  |
| InitAIR | percentage |  |
| PastDueInitAIR | percentage |  |
| PastDueAIR | percentage |  |
| Number of GP Terms | integer |  |
| {ADD}GiftPAIR | percentage |  |
