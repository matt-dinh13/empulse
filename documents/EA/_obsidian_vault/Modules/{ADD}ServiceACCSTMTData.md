---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/{ADD}Service ACCSTMT Data"
domain: "Modules"
element_id: 1403218
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}ServiceACCSTMTData 

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/{ADD}Service ACCSTMT Data

## 📝 Notes

{ADD PCG-1458/}
Specific for Service.ServiceType = ACCSTMT

## 🔗 Connections (2)

- → Dependency «mapping»: [[Account statement]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service ACCSTMT Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| StatementPrintoutTemplate | string |  |
