---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetFinancingScheme"
domain: "Modules"
element_id: 1198466
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 GetFinancingSchemeRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetFinancingScheme

## 🔗 Connections (3)

- → Dependency: [[GetFinancingSchemeCriterion]]
- → Dependency: [[CreateFinancingScheme (Class 1198458)]]
- ← Dependency: [[FinancingSchemeWS]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingScheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| searchCriterion | GetFinancingSchemeCriterion |  |
| getVersionData | boolean | False |
| getVersionList | boolean | False |
