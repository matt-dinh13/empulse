---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1133028
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ServicePERDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.ServiceType = PER

## 🔗 Connections (3)

- → Dependency «mapping»: [[{MOD}Partial Early Repayment Service]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service PER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acceptedDueDateShift | number |  |
| minimumDaysBeforeEr | number |  |
| dpdMaxLimit | number |  |
| minimalPerAmountRate | decimal |  |
| moratorium | number |  |
| allowRequestInMoratorium | boolean |  |
| minimalLastInstallmentAmount | MoneyType |  |
| perType | string |  |
| allowPerAmountInterval | boolean |  |
