---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v2"
domain: "Analysis Model"
element_id: 1878374
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 FinancialParametersItems

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v2

## 📝 Notes

Currently send only for item type = TARIFF

{ADD LOR-11243} {country PH}
and for item type = DISCOUNT
{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[getDetailResponse]]
- ← Dependency: [[getDetailResponse (Class 1878382)]]

## 📊 Appears In (1 diagrams)

- Logical: Financial Parameters v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| itemAmount | decimal |  |
| itemCode | string |  |
| itemType | string |  |
