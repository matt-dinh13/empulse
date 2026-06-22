---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CHECKTL"
domain: "Modules"
element_id: 1563167
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 ServiceParametersCHECKTL

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CHECKTL

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = CHECKTL

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CHECKTL Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| automaticFulfillment | boolean |  |
| checkedDocumentType | string |  |
| daysAfterServiceActivationToEvaluation | int |  |
| penaltyDueDateRelatedInstallment | int |  |
