---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833316
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CustomerData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

The structure presents data of client from application 
Source: Contract -> Client Snapshot

## 🔗 Connections (2)

- ← Dependency: [[ContractForDisbursement]]
- → Dependency: [[IdentificationDocument]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetContractForDisbursement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| identDocuments | IdentificationDocument |  |
| firstName | string |  |
| lastName | string |  |
| middleName | string |  |
