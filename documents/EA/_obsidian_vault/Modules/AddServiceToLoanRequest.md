---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1835818
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 AddServiceToLoanRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Web Services/Contract Services

## 📝 Notes

{ADD CSI-2970 /}

## 🔗 Connections (4)

- ← Usage: [[ContractServices (Interface 1835824)]]
- → Usage: [[{ADD}ServiceRole]]
- → Usage: [[NewService]]
- → Usage: [[RelatedSubject (Class 1810856)]]

## 📊 Appears In (1 diagrams)

- Logical: Adding Loan Service to Contract method (COS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service | NewService |  |
| activateService | boolean |  |
| {ADD}serviceRoles | {ADD}ServiceRole |  |
| reasonNotice | string |  |
| contractCode | string |  |
| reasonCode | string |  |
