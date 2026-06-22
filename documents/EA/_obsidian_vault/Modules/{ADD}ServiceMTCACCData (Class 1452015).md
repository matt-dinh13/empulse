---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/{ADD}Service MTCACC Data"
domain: "Modules"
element_id: 1452015
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}ServiceMTCACCData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/{ADD}Service MTCACC Data

## 📝 Notes

{ADD PCG-1797/}
Specific for Service.ServiceType = MTCACC

## 🔗 Connections (1)

- → Dependency «mapping»: [[{MOD}Maintenance of financial account]]

## 📊 Appears In (1 diagrams)

- Logical: Service MTCACC data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}accountType | {DEL}Account type |  |
| {ADD}forInternalClient | boolean |  |
| {ADD}creditAmountMin | string |  |
| {ADD}creditAmountMax | string |  |
| minInstallmentBase | {MOD}Base Type |  |
| minInstallmentRate | intiger |  |
| minInstallmentFixedAmount | intiger |  |
| minInstallmentRounding | RoundingType |  |
| minInstallmentRoundingScale | intiger |  |
| installmentPrescriptionMinLimit | intiger |  |
