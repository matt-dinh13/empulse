---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services"
domain: "Modules"
element_id: 1870213
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 AddServiceToLoanRequest_v1

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Interface Provided/Web Services/Contract Services

## 📝 Notes

Create Contract Service request body v3

## 🔗 Connections (5)

- → Usage: [[ServiceParameter (Class 1868244)]]
- → Usage: [[NewService (Class 1870214)]]
- → Usage: [[FinancialParameter (Class 1868239)]]
- ← Usage: [[ContractServices (Interface 1870215)]]
- → Usage: [[ServiceRole (Class 1870210)]]

## 📊 Appears In (1 diagrams)

- Logical: Adding Loan Service to Contract method (COS) v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service | NewService |  |
| activateService | boolean |  |
| serviceRoles | ServiceRole |  |
| reasonNotice | string |  |
| financialParameters | FinancialParameter |  |
| reasonCode | string |  |
| contractCode | string |  |
| serviceParameters | ServiceParameter |  |
| contractSupplementCode | string |  |
| {ADD}accountNumber | string |  |
