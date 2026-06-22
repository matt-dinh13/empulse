---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1868234
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ContractServiceRole

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services

## 📝 Notes

This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (3)

- ← Usage: [[AccountContractServiceRole (Class 1868238)]]
- → Usage: [[Service (Class 1868237)]]
- → Usage: [[Role (Class 1868230)]]

## 📊 Appears In (1 diagrams)

- Logical: Get Account Contract Service Roles (COS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| serviceType | string |  |
| service | Service |  |
| currentStatus | ContractServiceStatus |  |
| roles | Role |  |
