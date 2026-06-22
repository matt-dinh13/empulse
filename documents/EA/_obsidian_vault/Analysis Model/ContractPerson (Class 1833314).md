---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833314
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractPerson

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 🔗 Connections (3)

- ← Dependency: [[GetCUIDByContractPhoneResponse]]
- ← Dependency: [[GetPersonCUIDByContractResponse]]
- → Dependency: [[PersonRoleType (Enumeration 1833295)]]

## 📊 Appears In (2 diagrams)

- Logical: ContractWS - GetCUIDByContractPhone
- Logical: ContractWS - GetPersonCUIDByContract method

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| personRole | PersonRoleType |  |
