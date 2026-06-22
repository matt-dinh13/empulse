---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1323763
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceRELFERDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

{ADD PCG-1035/}
Specific for Service.ServiceType = RELFER

## 🔗 Connections (2)

- → Dependency «mapping»: [[{MOD}RELFER Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service RELFER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| minimumDaysBeforeDueDate | number |  |
| numberOfDaysForRepayment | number |  |
