---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833292
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ProductCategoryDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Product Profile related to Product of the Contract
Source: {ADD CLM-2105}Product Profile -> Product where Product.Code = Contract -> Financial Parameters.Product Code{/ADD}

## 🔗 Connections (1)

- ← Association: [[ContractInfoDto]]

## 📊 Appears In (3 diagrams)

- Logical: ContractWS - GetContracts by CUID
- Logical: ContractWS - GetContracts by CUID 2
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| type | string |  |
