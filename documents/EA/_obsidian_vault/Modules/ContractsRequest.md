---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v11/searchContracts"
domain: "Modules"
element_id: 1802514
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 ContractsRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v11/searchContracts

## 🔗 Connections (1)

- ← Dependency: [[{MOD}contracts]]

## 📊 Appears In (1 diagrams)

- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| projection | array[string] | DEFAULT |
| contractCode | array[string] |  |
| contractStatus | array[string] |  |
| customerId | array[int] |  |
| pageNumber | int | 0 |
| pageSize | int | 20 |
