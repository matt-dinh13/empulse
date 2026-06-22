---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CHDDR Data"
domain: "Modules"
element_id: 1238873
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceCHDDRDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CHDDR Data

## 📝 Notes

Specific for Service.ServiceType = CHDDR

## 🔗 Connections (2)

- → Dependency «mapping»: [[Change of Due Date with Request Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CHDDR Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| recalculateAnnuity360 | boolean |  |
| maxNumberOfNextInstallments | number |  |
| minDaysBeforeNextDueDate | number |  |
| minDaysAfterLastDueDate | number |  |
