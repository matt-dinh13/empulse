---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CELREW Data"
domain: "Modules"
element_id: 1275978
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceCELREWDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CELREW Data

## 📝 Notes

Specific for Service.ServiceType = CELREW

## 🔗 Connections (3)

- → Dependency «mapping»: [[{MOD}CEL Rewards Service]]
- → Dependency: [[PaymentDisciplineParametersDto]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CELREW Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| lengthOfEvaluationPeriod | number |  |
| paymentDisciplineParameters | PaymentDisciplineParametersDto |  |
| {ADD}debitCard | boolean |  |
| {ADD}currentAccount | boolean |  |
| {ADD}extraRepaymentOfLoan | boolean |  |
