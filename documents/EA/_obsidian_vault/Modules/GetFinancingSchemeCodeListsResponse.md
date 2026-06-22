---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetFinancingSchemeCodeLists"
domain: "Modules"
element_id: 1266028
diagrams: 1
connections: 8
tags:
  - class
  - modules
---

# 🔷 GetFinancingSchemeCodeListsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetFinancingSchemeCodeLists

## 🔗 Connections (8)

- → Dependency: [[FinancingSchemeVariantCriterionType]]
- → Dependency: [[CoolingOffPeriodScheme]]
- → Dependency: [[Currency (Class 1275266)]]
- → Dependency: [[Tariff (Class 1266029)]]
- → Dependency: [[FinancingSchemeVariantType]]
- → Dependency: [[RatingGroup]]
- → Dependency: [[InstallmentPlanScheme]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingSchemeCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currency | Currency |  |
| installmentPlanScheme | InstallmentPlanScheme |  |
| coolingOffPeriodScheme | InstallmentPlanScheme |  |
| tariff | Tariff |  |
| financingSchemeVariantType | FinancingSchemeVariantType |  |
| financingSchemeVariantCriterionType | FinancingSchemeVariantType |  |
