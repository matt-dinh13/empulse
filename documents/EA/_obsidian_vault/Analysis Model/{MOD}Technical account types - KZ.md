---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Business rules"
domain: "Analysis Model"
element_id: 1234525
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Technical account types - KZ

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Business rules

## 📝 Notes

Country specific for KZ.

Take Contract.Contract_Bank_Account.Account_Number where is set Contract_Bank_Account.Purpose = "DIS" (for disbursements) or "RFN" (for refund disbursements) (IBAN format):
{ADD PAYM CBL-537 /}
If “RR” on 12-th and 13-th positions (e.g. KZ145630492RR0078160), the system finds Bank_technical_Account of client's bank where Bank_technical_Account.Key = SPT "Special technical account".

Else {/ADD}if "PO" or "PN" is on 11-th and 12-th positions finds Bank_technical_Account of client's bank where Bank_technical_Account.Key = CAT "Card technical account"

Else finds Bank_technical_Account of client's bank where Bank_technical_Account.Key = CUT "Current technical account"

## 🔗 Connections (1)

- → Generalization: [[Technical account types]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Change disbursement channel
