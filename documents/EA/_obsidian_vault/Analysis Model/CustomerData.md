---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8"
domain: "Analysis Model"
element_id: 1833076
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CustomerData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8

## 📝 Notes

The structure presents data of client from application 
Source: Contract -> Client Snapshot

## 🔗 Connections (2)

- → Dependency: [[IdentificationDocument (Class 1833075)]]
- ← Dependency: [[ContractForDisbursement (Class 1833072)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS_v8

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| identDocuments | IdentificationDocument |  |
| firstName | string |  |
| lastName | string |  |
| middleName | string |  |
