---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CRDPST"
domain: "Modules"
element_id: 1563176
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 ServiceParametersCRDPST

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CRDPST

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = CRDPST

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CRDPST Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| addressDeliveryAllowed | boolean |  |
| instantCardAllowed | boolean |  |
| instantCardType | string |  |
| personalizedCardAllowed | boolean |  |
| personalizedCardType | string |  |
| posDeliveryAllowed | boolean |  |
| postponedActivationMonths | int |  |
| postponedActivationOffset | int |  |
