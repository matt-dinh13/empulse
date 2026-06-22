---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1133016
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ServiceFBACKDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = FBACK

## 🔗 Connections (3)

- → Dependency «mapping»: [[Fees-back Service]]
- → Dependency: [[PaymentDisciplineParametersDto]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service FBACK Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| automaticRefundGeneration | boolean |  |
| paymentDisciplineParameters | PaymentDisciplineParametersDto |  |
