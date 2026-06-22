---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833307
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ContractFilter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

A structure of input parameters for contract filtering

## 🔗 Connections (4)

- ← Dependency: [[GetContractListRequest]]
- → Dependency: [[InitialTransactionType (Enumeration 1833312)]]
- → Dependency: [[CreditType (Enumeration 1833297)]]
- → Dependency: [[ContractStatusType (Enumeration 1833282)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetContractList method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractType | CreditType |  |
| initialTransactionType | InitialTransactionType |  |
| contractStatus | ContractStatusType |  |
| signatureDate | date |  |
