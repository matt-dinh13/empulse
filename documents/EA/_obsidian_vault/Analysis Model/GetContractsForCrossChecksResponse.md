---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833037
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetContractsForCrossChecksResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

This entity defines structure for a response returned by the ContractWS interface and GetContractsForCrossChecks method.

## 🔗 Connections (2)

- → Dependency «use»: [[ContractInformation]]
- ← Dependency «use»: [[(MOD)ContractWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contracts | ContractInformation |  |
