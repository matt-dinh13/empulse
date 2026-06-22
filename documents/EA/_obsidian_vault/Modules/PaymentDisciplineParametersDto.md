---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CELREW Data"
domain: "Modules"
element_id: 1133058
diagrams: 4
connections: 6
tags:
  - class
  - modules
---

# 🔷 PaymentDisciplineParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CELREW Data

## 📝 Notes

Common for all service type data

## 🔗 Connections (6)

- ← Dependency: [[ServiceFBACKDataDto]]
- ← Dependency: [[ServiceGIFTPDataDto]]
- → Dependency «mapping»: [[Payment Discipline Parameters]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency: [[ServiceGRPERDataDto]]
- ← Dependency: [[{MOD}ServiceCELREWDataDto]]

## 📊 Appears In (4 diagrams)

- Logical: Service CELREW Data
- Logical: Service FBACK Data
- Logical: Service GIFTP Data
- Logical: Service GRPER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dpdDelayTolerance | number |  |
| dpdAmountTolerance | MoneyType |  |
| dpdScope | string |  |
| differToleranceForLastDpd | boolean |  |
| lastDpdDelayTolerance | number |  |
| lastDpdAmountTolerance | MoneyType |  |
