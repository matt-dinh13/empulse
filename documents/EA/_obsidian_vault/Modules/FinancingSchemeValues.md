---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme"
domain: "Modules"
element_id: 1491199
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 FinancingSchemeValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme

## 🔗 Connections (4)

- ← Dependency: [[CreateFinancingScheme (Class 1198458)]]
- ← Dependency: [[ResultGetFinancingScheme]]
- ← Dependency: [[UpdateFinancingScheme (Class 1261027)]]
- → Dependency: [[{MOD}FinancingSchemeVariant]]

## 📊 Appears In (4 diagrams)

- Logical: CreateFinancingScheme
- Logical: FinancingSchemeValues
- Logical: GetFinancingScheme
- Logical: UpdateFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| description | string |  |
| descriptionSale | string |  |
| validFrom | datetime |  |
| validTo | datetime |  |
| minimalTransactionAmount | decimal |  |
| maximalTransactionAmount | decimal |  |
| currency | string |  |
| installmentPlanScheme | string |  |
| coolingOffPeriodScheme | string |  |
| tariff | string |  |
| variant | {MOD}FinancingSchemeVariant |  |
