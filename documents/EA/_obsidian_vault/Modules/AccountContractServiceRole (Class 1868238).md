---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1868238
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 AccountContractServiceRole

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services

## 📝 Notes

{ADD CSI-3202 /}
This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (2)

- → Usage: [[ContractServiceRole]]
- ← Usage: [[ContractServices (Interface 1870215)]]

## 📊 Appears In (1 diagrams)

- Logical: Get Account Contract Service Roles (COS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | string |  |
| contractServices | ContractServiceRole |  |
