---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1152459
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 ServiceGRRELDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.Type = GRREL

## 🔗 Connections (4)

- → Dependency «mapping»: [[Grace Period REL To Tariff Item Type]]
- → Dependency «mapping»: [[{MOD}Grace Period REL Service]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service GRREL Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| length | Number |  |
| debtTolerance | MoneyType |  |
| tariffItemType | Text |  |
| alignmentWithDueDate | boolean |  |
