---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1275465
diagrams: 5
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 RELIP Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

This class defines specific parameters of service Installment Plan for REL Transaction.

## 🔗 Connections (9)

- → Dependency: [[{MOD}Installment Schedule Method Type]]
- → Dependency: [[REL Day In Month Method Type]]
- → Dependency: [[REL Day In Month Method Type]]
- → Dependency: [[Day Count Method Type]]
- → Dependency: [[Period Unit (Enumeration 1819824)]]
- ← Aggregation: [[RELIP Service Variant]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Dependency: [[RELIP First Prescription Date Type]]
- ← Dependency «mapping»: [[ServiceRELIPDataDto]]

## 📊 Appears In (5 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Entities to be removed
- Logical: Offer Service
- Logical: REL Installment Plan service - parameters
- Logical: Service RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| First Prescription Date | RELIP First Prescription Date Type |  |
| Due Day Method | REL Day In Month Method Type |  |
| Interest Period Method | REL Day In Month Method Type |  |
| Installment Plan Method | {MOD}Installment Schedule Method Type |  |
| Day Count Method | Day Count Method Type |  |
| Installment Rounding Method | Rounding |  |
| Cooling-off Period Length | int |  |
| Cooling-off Period Unit | Period Unit |  |
| Cooling-off Period AIR | percentage |  |
| Installment Rounding Scale | Rounding Scale Type |  |
