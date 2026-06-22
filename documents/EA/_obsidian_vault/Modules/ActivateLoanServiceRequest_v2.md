---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services/v2"
domain: "Modules"
element_id: 1827350
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ActivateLoanServiceRequest_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services/v2

## 📝 Notes

{ADD CSI-2971 /}
A structure of the service activation request

## 🔗 Connections (2)

- → Usage: [[{ADD}DealPeriodParameters (Class 1827348)]]
- ← Usage: [[ContractServices (Interface 1835824)]]

## 📊 Appears In (1 diagrams)

- Logical: Activate Loan Service method (COS) v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractServiceId | string |  |
| {ADD}dealPeriodData | {ADD}DealPeriodParameters |  |
| {ADD}activationDate | dateTime |  |
| reasonNotice | string |  |
| reasonCode | string |  |
