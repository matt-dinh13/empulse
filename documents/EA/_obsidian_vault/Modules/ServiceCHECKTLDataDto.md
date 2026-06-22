---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CHECKTL Data"
domain: "Modules"
element_id: 1373352
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceCHECKTLDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CHECKTL Data

## 📝 Notes

Specific for Service.ServiceType = CHECKTL

## 🔗 Connections (2)

- → Dependency «mapping»: [[{MOD}Checking Terms of Loan]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CHECKTL Data
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| checkedDocumentType | string |  |
| numberOfDaysAfterServiceActivationToEvaluation | number |  |
| penaltyDueDateRelatedInstallment | number |  |
| {ADD}automaticFulfillment | boolean |  |
