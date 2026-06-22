---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Interface model"
domain: "Analysis Model"
element_id: 1327987
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizedContractDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Interface model

## 📝 Notes

A structure of securitized contract

## 🔗 Connections (1)

- ← Dependency: [[SecuritizedContractListDto]]

## 📊 Appears In (1 diagrams)

- Logical: Contract securitization - file structure 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| validationError | string |  |
| salePrice | MoneyDto |  |
| saleFee | MoneyDto |  |
| {ADD}ownershipPercentage | percent |  |
| {ADD}previousOwnerCode | string |  |
