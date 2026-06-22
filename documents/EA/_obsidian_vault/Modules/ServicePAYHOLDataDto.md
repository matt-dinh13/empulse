---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1437417
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServicePAYHOLDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = PAYHOL

## 🔗 Connections (2)

- → Dependency «mapping»: [[{MOD}Payment Holiday Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service PAYHOL Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bonusServicesImpact | string |  |
| minDaysBeforeInstallment | number |  |
| acceptSmallUnderpayment | boolean |  |
| expirationPeriodDays | number |  |
| maxNumberOfDeferredPeriods | number |  |
| insuranceCalculation | boolean |  |
| {ADD}InterestAccrualCalculation | boolean |  |
