---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1133062
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ServiceGRPERDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = GRPER

## 🔗 Connections (3)

- → Dependency: [[PaymentDisciplineParametersDto]]
- → Dependency «mapping»: [[Grace Period Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service GRPER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| length | number |  |
| moratorium | number |  |
| premiumInterestRate | percentage |  |
| earlyRepaymentAlgorithm | string |  |
| paymentDisciplineParameters | PaymentDisciplineParametersDto |  |
