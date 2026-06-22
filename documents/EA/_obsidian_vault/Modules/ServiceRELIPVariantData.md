---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/RELIP"
domain: "Modules"
element_id: 1500819
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceRELIPVariantData

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/RELIP

## 📝 Notes

{ADD PCG-2098/}

## 🔗 Connections (2)

- → Realisation: [[ServiceRELIPVariantTermData]]
- ← Realisation: [[RELIPData]]

## 📊 Appears In (1 diagrams)

- Logical: RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | int |  |
| name | string |  |
| description | string |  |
| transactionAmountMax | Money |  |
| transactionAmountMin | Money |  |
| intsallmentPlanType | string |  |
| transactionDateFrom | date |  |
| transactionDateTo | date |  |
| transactionType | int |  |
| merchants | string |  |
| premium | boolean |  |
| termParameters | ServiceRELIPVariantTermData |  |
