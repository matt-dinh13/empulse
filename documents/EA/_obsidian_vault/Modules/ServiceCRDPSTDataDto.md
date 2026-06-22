---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CRDPST Data"
domain: "Modules"
element_id: 1152452
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceCRDPSTDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CRDPST Data

## 📝 Notes

Specific for Service.Type = CRDPST

## 🔗 Connections (2)

- → Dependency «mapping»: [[Standard Payment Card Service]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CRDPST Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| postponedActivationMonths | number |  |
| postponedActivationOffset | number |  |
| instantCardAllowed | boolean |  |
| personalizedCardAllowed | boolean |  |
| instantCardType | text |  |
| personalizedCardType | text |  |
| posDeliveryAllowed | boolean |  |
| addressDeliveryAllowed | boolean |  |
