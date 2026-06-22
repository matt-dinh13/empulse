---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1872432
diagrams: 3
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Payment Channel

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Specifies how
- the client repays the credit
- how the credit is disbursed (to client or sales partner)

For payment channel = GBA (General bank account) relation to Recipient Bank Account is mandatory. In case of a disbursement on a technical account (i.e. Recipient Bank Account is reference to a technical account) , Client Bank Account is mandatory as well
For payment channel = PBA (Payment provider)  relation to Salesroom of Partner of Partner Bank type (partner bank) is mandatory
For payment channel = SBA (Dealer) relation to Salesroom of Partner of Seller type, or Salesroom of Partner of Insurance Company type is mandatory
{ADD CBL-1093}
For payment channel = CA (Card account) Truncated PAN and External Card ID are mandatory.
{/ADD}

## 🔗 Connections (12)

- ← Association: [[Outgoing Payment]]
- → Dependency: [[Payment Channel Source Type]]
- ← Aggregation: [[{ADD}External Card]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[Payment Channel Type]]
- → Association: [[Bank Account (Class 1627830)]]
- → Dependency: [[Payment Purpose Type]]
- ← InformationFlow: [[{ADD}Payment Channel Draft]]
- → Dependency: [[Disbursement Channel Change Request Status Type]]
- → Dependency: [[{ADD}Payment Channel BA External Verification Result Type]]
- → Association: [[Bank Account (Class 1627830)]]
- ← Aggregation: [[Disbursement Channel Change Request]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Management
- Logical: Outgoing Payments
- Logical: Payment Channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ReferenceCode | string |  |
| ReferenceType | string |  |
| Validated | boolean |  |
| BankAccountNumber | string |  |
| BankCode | string |  |
| BankAccountID | long |  |
| dataExchangeID | string |  |
| External Verification Result | string |  |
| Last Change Request Status | Disbursement Channel Change Request Status Type |  |
| Purpose | Payment Purpose Type |  |
| Recipient Name | string |  |
| SalesroomCode | string |  |
| Source Type | Payment Channel Source Type |  |
| targetContract | long |  |
| Type | Payment Channel Type |  |
| Valid from | date |  |
| Valid to | date |  |
| TargetBankAccountID | string |  |
| External card ID | long |  |
| TargetType | string |  |
