---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821419
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 AdditionalPersonTypeList

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object representing a list of some particular additional persons (wrapping elements).

## 🔗 Connections (3)

- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency «use»: [[{MOD}AdditionalPersonType]]
- ← Usage: [[{ADD}externalCustomerDataList]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| additionalPersonType | {MOD}AdditionalPersonType |  |
