---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes"
domain: "Modules"
element_id: 1831440
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 FinancingSchemeInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes

## 🔗 Connections (3)

- ← Dependency: [[financing-schemes]]
- → Dependency: [[Version Status (Enumeration 1873251)]]
- → Dependency: [[Input]]

## 📊 Appears In (2 diagrams)

- Logical: Financing Schemes
- Logical: FinancingSchemeDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| versionStatus | string |  |
| validFrom | date |  |
| validTo | date |  |
| plannedActivationDate | date |  |
| tariffCode | string |  |
| currency | string |  |
| description | string |  |
| descriptionSale | string |  |
| minimalTransactionAmount | integer |  |
| maximalTransactionAmount | integer |  |
| installmentPlanScheme | string |  |
| coolingOffPeriodScheme | string |  |
| variants | Input |  |
