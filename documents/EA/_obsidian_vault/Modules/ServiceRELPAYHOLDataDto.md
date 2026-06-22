---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1526152
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceRELPAYHOLDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 🔗 Connections (2)

- ← Dependency: [[{MOD}ServiceTypeDataDto]]
- → Dependency: [[REL Payment Holidays Service]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service RELPAYHOL Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| MaxNumberOfDeferredPeriods | int |  |
| MinMonthsBetweenDeferredPeriods | int |  |
| MaxNumberOfDeferredPeriodsInTimePeriod | int |  |
| TimePeriodInYears | int |  |
| AccrueInterestDuringDeferredPeriods | boolean |  |
| BlockAccountDuringDeferredPeriods | boolean |  |
| {ADD}InstallmentPlanAccrueInterestDuringDeferredPeriods | boolean |  |
