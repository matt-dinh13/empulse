---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CHDD Data"
domain: "Modules"
element_id: 1132997
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceCHDDDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CHDD Data

## 📝 Notes

Specific for Service.ServiceType = CHDD

## 🔗 Connections (2)

- → Dependency «mapping»: [[Change of Due Date Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CHDD Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| minDaysAfterLastDueDate | number |  |
| maxDaysAfterLastDueDate | number |  |
