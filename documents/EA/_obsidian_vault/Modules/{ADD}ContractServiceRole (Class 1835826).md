---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1835826
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractServiceRole

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services

## 📝 Notes

{ADD CSI-3202 /}
This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (3)

- → Usage: [[Service (Class 1810854)]]
- → Usage: [[{ADD}Role (Class 1810855)]]
- ← Usage: [[AccountContractServiceRole]]

## 📊 Appears In (1 diagrams)

- Logical: {ADD}Get Account Contract Service Roles (COS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| serviceType | string |  |
| service | Service |  |
| currentStatus | ContractServiceStatus |  |
| {ADD}roles | Role |  |
