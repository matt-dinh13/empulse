---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/RELPAYHOL"
domain: "Modules"
element_id: 1563233
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 ServiceParametersRELPAYHOL

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/RELPAYHOL

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = RELPAYHOL

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: RELPAYHOL Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| balanceAccrueInterestDuringDeferredPeriods | boolean |  |
| blockAccountDuringDeferredPeriods | boolean |  |
| {ADD}instPlanAccrueInterestDuringDeferredPeriods | boolean |  |
| maxNumberOfDeferredPeriods | int |  |
| minMonthsBetweenDeferredPeriods | int |  |
| maxNumberOfDeferredPeriodsInTimePeriod | int |  |
| timePeriodInYears | int |  |
