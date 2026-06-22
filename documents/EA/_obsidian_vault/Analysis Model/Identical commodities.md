---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773427
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Identical commodities

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

This rule describes, how system compares that the commodity from input is equal to commodity which was used for calculation of offer

Input:
- commodityId = identificator of commodity from input
- CustomerOfferCode = code of an offer selected by the customer

Each commodityId from the input must correspond to the commodity code stored to CustomerOfferCode
MSG_InvalidCommodity

## 🔗 Connections (1)

- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
