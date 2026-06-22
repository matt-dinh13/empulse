---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetInstallmentPlanScheme"
domain: "Modules"
element_id: 1491207
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 InstallmentPlanSchemeValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetInstallmentPlanScheme

## 🔗 Connections (1)

- ← Dependency: [[GetInstallmentPlanSchemeResponse]]

## 📊 Appears In (2 diagrams)

- Logical: GetInstallmentPlanScheme
- Logical: InstallmentPlanSchemeValues

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| active | boolean |  |
| description | string |  |
| isDefault | boolean |  |
| dayCountMethod | string |  |
| isInitAIR | boolean |  |
| annuityRoundingMethod | string |  |
| annuityRoundingScale | decimal |  |
| interestRoundingMethod | string |  |
| interestRoundingScale | decimal |  |
| generationMethod | string |  |
| {ADD}includeDeferredInterest | string |  |
| {ADD}keepEqualLastInstallmentAmount | boolean |  |
| {ADD}recalculateInterestRate | boolean |  |
