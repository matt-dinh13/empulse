---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/createContract"
domain: "Modules"
element_id: 1859027
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}createContractRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/createContract

## 📝 Notes

{ADD CLM-6660/}
This element defines structure of request for createContract.

## 🔗 Connections (4)

- → Dependency: [[{ADD}CreateContractDocument]]
- → Dependency: [[ContractCustomer (Class 1868405)]]
- → Dependency: [[ContractExtendedProperty (Class 1868403)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (1 diagrams)

- Logical: createContract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customer | ContractCustomer |  |
| documents | ContractDocument |  |
| extendedProperties | ContractExtendedProperty |  |
