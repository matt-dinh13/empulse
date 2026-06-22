---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/RELIP"
domain: "Modules"
element_id: 1563229
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceParametersRELIPVariants

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/RELIP

## 📝 Notes

{ADD PCG-2098/}

## 🔗 Connections (2)

- → Realisation: [[ServiceRELIPVariantTermData (Class 1563230)]]
- ← Realisation: [[ServiceParametersRELIP]]

## 📊 Appears In (1 diagrams)

- Logical: RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | int |  |
| name | string |  |
| description | string |  |
| transactionAmountMax | int |  |
| transactionAmountMin | int |  |
| intsallmentPlanType | string |  |
| transactionDateFrom | string |  |
| transactionDateTo | string |  |
| transactionType | string |  |
| merchants | string |  |
| premium | boolean |  |
| terms | ServiceRELIPVariantTermData |  |
