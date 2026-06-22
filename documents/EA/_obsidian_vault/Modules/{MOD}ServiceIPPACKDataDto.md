---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service IPPACK Data"
domain: "Modules"
element_id: 1311212
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceIPPACKDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service IPPACK Data

## 📝 Notes

Specific for Service.Type = IPPACK

## 🔗 Connections (3)

- → Dependency «mapping»: [[Installment Plan Pack Service To Financing Package Purpose]]
- → Dependency «mapping»: [[Installment Plan Pack Service To Financing Package]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: {MOD}Service IPPACK Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| FinancingPackagePurpose | string |  |
| {ADD}FinancingPackage | string |  |
