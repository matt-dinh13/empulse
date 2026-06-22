---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service COP Data"
domain: "Modules"
element_id: 1330243
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceCOPDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service COP Data

## 📝 Notes

Specific for Service.ServiceType = COP

## 🔗 Connections (2)

- → Dependency «mapping»: [[{MOD}Cooling-off Period Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service COP Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acceptSmallUnderpayment | boolean |  |
| acceptedDueDateShift | number |  |
| copLength | number |  |
| earlyRepaymentAlgorithm | string |  |
| finishContractAfterProcessing | boolean |  |
| {ADD}setERDateAsProcessingDate | boolean |  |
| {ADD}RequestRequiredForProcessing | boolean |  |
