---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CONS Data"
domain: "Modules"
element_id: 1275206
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ServiceCONSDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CONS Data

## 📝 Notes

Specific for Service.ServiceType = CONS

## 🔗 Connections (3)

- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «mapping»: [[Consolidation Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CONS Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| celPos | boolean |  |
| celCash | boolean |  |
| consolidationType | string |  |
| interestAndFeeCalculationMethod | string |  |
| maximalDisbursementAmount | MoneyType |  |
| minimalConsolidationAmount | MoneyType |  |
| maximalConsolidationAmount | MoneyType |  |
| expirationPeriodDays | number |  |
| ferService | string |  |
| minimalDisbursementAmount | MoneyType |  |
| internalRefinancing | boolean |  |
| externalRefinancing | boolean |  |
| externalLoansRepaymentPeriodDays | number |  |
