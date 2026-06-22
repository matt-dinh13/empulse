---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1872433
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Payment Channel Draft

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model

## 📝 Notes

{ADD PAYM-3978}

Separate entity for incomplete or non validated payment channel which will be switch to main payment channel entity after payment channel validation

## 🔗 Connections (3)

- → Dependency: [[Payment Channel Source Type]]
- → Dependency: [[Payment Purpose Type]]
- → InformationFlow: [[{MOD}Payment Channel]]

## 📊 Appears In (1 diagrams)

- Logical: Payment Channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ReferenceCode | string |  |
| ReferenceType | string |  |
| BankCode | string |  |
| BankAccountNumber | string |  |
| DataExchangeID | string |  |
| ExternalCardID | long |  |
| ExternalVerificationResult | string |  |
| LastChangeRequestStatus | string |  |
| Purpose | Payment Purpose Type |  |
| RecipientName | string |  |
| SalesroomCode | string |  |
| SourceType | Payment Channel Source Type |  |
| TargetContract | string |  |
| AccountType | string |  |
| Type | string |  |
| ValidFrom | dateTime |  |
| BankName | string |  |
| ValidTo | dateTime |  |
| BankBranchCode | string |  |
| BankBranchSyncCode | string |  |
| contractCode | long |  |
| TargetType | string |  |
