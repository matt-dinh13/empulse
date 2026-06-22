---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1878189
diagrams: 5
connections: 13
tags:
  - class
  - requirements-model
---

# 🔷 Offer Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

This entity represents services adjusted in the offers. Each offer can have different set of services adjusted. Some of offer's tariff items may be related to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (13)

- ← Association: [[Contract Service Document]]
- → Association: [[{MOD}Tariff]]
- → Association: [[Service (Class 1880804)]]
- ← Aggregation: [[Offer service custom data]]
- → Realisation: [[LOR-909 Division of Commodity module]]
- → Association: [[Product Offer Request Commodity]]
- → Aggregation: [[Offer Financial Parameter]]
- ← Association: [[Offer Service Subvention Item]]
- ← Aggregation: [[Offer Service Parameter]]
- ← Generalization: [[Offer Insurance Service]]
- ← Generalization: [[Offer RELIP Service]]
- ← Generalization: [[Offer Card Service]]
- ← Association: [[Offer Service Tariff Item]]

## 📊 Appears In (5 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Contract
- Logical: Offer Financial Parameters
- Logical: Offer Service
- Logical: Temporary Application - Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity ID | string |  |
| Tariff code | string |  |
| Tariff version | int |  |
| Service code | string |  |
| Service version | int |  |
