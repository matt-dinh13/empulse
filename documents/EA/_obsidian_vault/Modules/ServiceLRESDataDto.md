---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1530456
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceLRESDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = LRES

## 🔗 Connections (2)

- ← Dependency: [[{MOD}ServiceTypeDataDto]]
- → Dependency «mapping»: [[Loan Restructuring Service]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service LRES Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bonusServicesImpact | string |  |
| expirationPeriodDays | number |  |
| acceptSmallUnderpayment | boolean |  |
| minDaysBeforeInstallment | number |  |
| {ADD}keepInstallmentAmount | boolean |  |
