---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CET Data"
domain: "Modules"
element_id: 1373412
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceCETDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CET Data

## 📝 Notes

Specific for Service.ServiceType = CET

## 🔗 Connections (2)

- → Dependency «mapping»: [[{MOD}Contract Early Termination Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CET Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| expirationDateMinLimit | number |  |
| expirationDateMaxLimit | number |  |
| acceptedExpirationDateShift | number |  |
| acceptSmallUnderpayment | boolean |  |
| earlyRepaymentAlgorithm | string |  |
| enableProcessingOnBalanceChange | boolean |  |
| finishContractAfterProcessing | boolean |  |
| setERDateAsProcessingDate | boolean |  |
| {ADD}transferPaymentToBank | boolean |  |
