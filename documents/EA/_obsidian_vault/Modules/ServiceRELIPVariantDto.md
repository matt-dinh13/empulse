---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service RELIP Data"
domain: "Modules"
element_id: 1275564
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 ServiceRELIPVariantDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service RELIP Data

## 🔗 Connections (6)

- → Dependency: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[ServiceRELIPVariantTermDto]]
- → Dependency: [[TransactionTypeDto]]
- → Dependency: [[MoneyType (Class 1878205)]]
- → Dependency «mapping»: [[RELIP Service Variant]]
- ← Dependency «use»: [[ServiceRELIPDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Service RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | number |  |
| name | string |  |
| description | string |  |
| transactionAmountMax | MoneyType |  |
| transactionAmountMin | MoneyType |  |
| installmentPlanType | string |  |
| transactionDateFrom | date |  |
| transactionDateTo | date |  |
| transactionType | TransactionTypeDto |  |
| merchants | string |  |
| premium | boolean |  |
| termParameters | ServiceRELIPVariantTermDto |  |
