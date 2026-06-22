---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1133022
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ServiceGIFTPDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = GIFTP

## 🔗 Connections (3)

- → Dependency: [[PaymentDisciplineParametersDto]]
- → Dependency «mapping»: [[Gift Payment Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service GIFTP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| numberOfGiftPayments | number |  |
| coveredByInterest | boolean |  |
| keepAllInstallments | boolean |  |
| paymentDisciplineParameters | PaymentDisciplineParametersDto |  |
