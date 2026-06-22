---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1835812
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 AccountContractServiceRole

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services

## 📝 Notes

{ADD CSI-3202 /}
This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (2)

- → Usage: [[{ADD}ContractServiceRole (Class 1835826)]]
- ← Usage: [[ContractServices (Interface 1835824)]]

## 📊 Appears In (1 diagrams)

- Logical: {ADD}Get Account Contract Service Roles (COS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | string |  |
| contractServices | ContractServiceRole |  |
