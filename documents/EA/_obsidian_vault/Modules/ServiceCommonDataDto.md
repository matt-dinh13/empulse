---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1460380
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 ServiceCommonDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 🔗 Connections (5)

- → Dependency «mapping»: [[Service (Class 1880804)]]
- → Dependency: [[Quaification criteria]]
- → Dependency: [[ServiceTypeCategoryDto]]
- → Association: [[{MOD}ServiceTypeDataDto]]
- ← Dependency: [[GetServiceDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | Text |  |
| serviceTypeCode | Service Type |  |
| serviceTypeName | localizedString |  |
| serviceTypeCategory | ServiceTypeCategoryDto |  |
| name | Text |  |
| currency | Text |  |
| validFrom | Date |  |
| validTo | Date |  |
| tariff | Text |  |
| tariffVersion | Text |  |
| termsAndConditions | Text |  |
| manualTerminationAllowed | boolean |  |
| versionNumber | Number |  |
| versionStatus | Text |  |
| versionActivationDate | DateTime |  |
| plannedActivationDate | Date |  |
| versionTerminationDate | DateTime |  |
| minimalDaysOfServiceUsage | Number |  |
| exclusiveService | string |  |
| inclusiveService | string |  |
| mandatoryOnContract | boolean |  |
| {ADD}qualificationCriteria | Text |  |
| {ADD}manualCancellationAllowed | boolean |  |
| {ADD}description | string |  |
