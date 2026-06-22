---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873918
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ General bank account - change disb. channel

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

Panel  General bank account (Client's bank account) is displayed only if corresponding disbursement method is selected. Country specific structure for entering of bank account.

LDM Source:
1. If a reference to Client Bank Account exists on the Contract (or Temporary_Application) Payment Channel (i.e. the bank uses technical accounts) then get this referenced  bank account data (i.e. Payment Channel.Target Bank Account ID -> Bank Account.*; where "*" means corresponding bank account attribute for a particular field)
2. If no such reference exists, data from Recipient Bank Account referenced is taken (i.e. Payment Channel.Bank Account ID -> Bank Account.*; where "*" means corresponding bank account attribute for a particular field)

Localization code: DisbursementPaymentChannel_legend

## 📊 Appears In (1 diagrams)

- Custom: General bank account - change disb. channel
