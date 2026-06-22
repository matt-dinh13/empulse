---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1543621
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceFERDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = FER

## 🔗 Connections (3)

- ← Dependency: [[{MOD}ServiceTypeDataDto]]
- → Dependency «mapping»: [[{MOD}Full Early Repayment Service]]
- → Dependency «use»: [[ServiceFERVariantDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service FER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acceptSmallUnderpayment | boolean |  |
| acceptedDueDateShift | number |  |
| dpdMaxLimit | number |  |
| earlyRepaymentAlgorithm | string |  |
| moratorium | number |  |
| allowRequestInMoratorium | boolean |  |
| minimumDaysBeforeEr | number |  |
| maximalDaysBeforeEr | number |  |
| allowErDateChoice | boolean |  |
| {DEL}immediateErAvailable | boolean |  |
| enableProcessingOnBalanceChange | boolean |  |
| {DEL}notifyCollectionSystem | boolean |  |
| finishContractAfterProcessing | boolean |  |
| performRequestInMoratorium | boolean |  |
| includeGiftPayments | boolean |  |
| serviceVariant | ServiceFERVariantDto |  |
| setERDateAsProcessingDate | boolean |  |
| automaticProcessing | boolean |  |
| {ADD}includePrincipalOnly | boolean |  |
