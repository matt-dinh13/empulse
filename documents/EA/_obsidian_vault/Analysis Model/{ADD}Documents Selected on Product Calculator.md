---
type: Class
stereotype: "Customization"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1716002
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Documents Selected on Product Calculator

> **Type**: Class · **Stereotype**: «Customization»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

Parametrization for each document type whether it should be ticked by default according to chosen product option on product calculator GUI.

If any active record is present (saved in DB), specified document is ticked by default in grid Client's documents on product calculator GUI according to rule Selection of Document Type on Product Calculator.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}TickedClientDocumentType (Class 1816570)]]

## 📊 Appears In (2 diagrams)

- Logical: CustomerOfferWS - GetCodeList
- Logical: Product Calculator Parametrization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ProductOption | Product type for product calculator |  |
| DocumentType | Client's documents |  |
