---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878213
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ServiceParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Instance of a service parameter.

Entity is created for parameter of 'CELREW_METHOD' type only (i.e. Offer_Service->Offer_Service_Parameter.Type='CELREW_METHOD').

## 🔗 Connections (1)

- ← Dependency «use»: [[ServiceParameters (Class 1878245)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| value | string |  |
