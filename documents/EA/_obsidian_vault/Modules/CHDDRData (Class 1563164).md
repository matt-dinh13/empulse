---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CHDDR"
domain: "Modules"
element_id: 1563164
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 CHDDRData

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CHDDR

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = CHDDR

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CHDDR Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| maxNumberOfNextInstallments | int |  |
| minDaysAfterLastDueDate | int |  |
| minDaysBeforeNextDueDate | int |  |
| recalculateAnnuity360 | boolean |  |
