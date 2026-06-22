---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Access Rights"
domain: "Analysis Model"
element_id: 1880147
diagrams: 4
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD PAYM-6304} 01.676 Verify bank account data for contract disb. channel

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Access Rights

## 📝 Notes

{MOD PAYM-6304 CBL-31820 /}
This use case enables the user to get the account holder name for particular attributes of client's bank account entered on the General bank account panel and use the returned value for pre-filling the respective field within the same form.

## 🔗 Connections (4)

- ← Realisation: [[Verify account (GUIElement 1873902)]]
- → UseCase: [[Bank account Management]]
- → Realisation: [[{ADD}01.676 Verify bank account data for contract disb. channel]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: General bank account - change disb. channel
- Custom: PAYM-1214 (CBL-1767) Bank Account Verification in BSL using DOKU API (3rd Party)
- Use Case: Change disbursement channel
