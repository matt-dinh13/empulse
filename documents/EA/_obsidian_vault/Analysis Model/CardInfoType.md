---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878227
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CardInfoType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

This entity holds information about card related to service.

System calls CardInfoWS.getCard with pcid = Contract.OfferService.OfferCardService.CardNumber

## 🔗 Connections (1)

- ← Dependency «use»: [[ServiceDateType]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| association | string |  |
| status | string |  |
| truncatedPan | string |  |
| type | string |  |
