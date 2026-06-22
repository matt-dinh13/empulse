---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CalculateSubvention"
domain: "Modules"
element_id: 1509453
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}CalculateSubventionTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/CalculateSubvention

## 🔗 Connections (2)

- → Dependency: [[Commodity Type (Class 1758904)]]
- ← Dependency: [[CalculateSubventionRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateSubvention

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionNumber | int |  |
| {DELL}baseAmount | decimal |  |
| commodityType | string |  |
| transactionAmount | decimal |  |
| goodsPrice | decimal |  |
| {ADD}purpose | string |  |
