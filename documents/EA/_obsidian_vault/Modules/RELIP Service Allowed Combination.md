---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/RELIP"
domain: "Modules"
element_id: 1275472
diagrams: 1
connections: 8
tags:
  - class
  - modules
---

# 🔷 RELIP Service Allowed Combination

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/RELIP

## 📝 Notes

Allowed combinations of values of RELIP Service parameters.
Intended for validation of service setting.

## 🔗 Connections (8)

- → Dependency: [[Rounding Scale Type]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Dependency: [[{MOD}Installment Schedule Method Type]]
- → Dependency: [[REL Day In Month Method Type]]
- ← Dependency: [[Installment Plan Method]]
- ← Dependency: [[Due Day Method]]
- ← Dependency: [[Installment Rounding Scale]]
- ← Dependency: [[Installment Rounding Method]]

## 📊 Appears In (1 diagrams)

- Logical: REL Installment Plan service - parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Due Day Method | REL Day In Month Method Type |  |
| Installment Plan Method | {MOD}Installment Schedule Method Type |  |
| Installment Rounding Method | Rounding |  |
| Installment Rounding Scale | Rounding Scale Type |  |
