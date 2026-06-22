---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface"
domain: "Modules"
element_id: 1732653
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Offered Products

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/User Interface

## 📝 Notes

List of products assigned to Marketing Offer.

Visible only if the list contains at least one row.
Grid is initially sorted by product.Code and is not sortable by user.

LDM source:
System calls the PCG module for each relevant product with following input parameters:
- productCode = PartyOffers.Offer.productCodes
and gets the data from reponse

Localization code:
MO_Products

## 📊 Appears In (1 diagrams)

- Custom: Product Marketing Offer Details

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Product Type | string |  |
| Initial Transaction Type | string |  |
| Description | string |  |
