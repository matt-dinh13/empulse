---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1870202
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ActivateLoanServiceRequest_v1

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services

## 📝 Notes

A structure of the service activation request

## 🔗 Connections (2)

- → Usage: [[DealPeriodParameters]]
- ← Usage: [[ContractServices (Interface 1870215)]]

## 📊 Appears In (1 diagrams)

- Logical: Activate Loan Service method (COS) v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractServiceId | string |  |
| dealPeriodData | DealPeriodParameters |  |
| activationDate | dateTime |  |
| reasonNotice | string |  |
| reasonCode | string |  |
