---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3"
domain: "Analysis Model"
element_id: 1774806
diagrams: 9
connections: 26
tags:
  - interface
  - analysis-model
---

# 🔶 PaymentChannelRestAPI V3

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3

## 📝 Notes

{ADD CBL-11267 PAYM-3378}
{MOD CBL-11254 PAYM-3628}
{MOD }

V3 added draft methods

## 🔗 Connections (26)

- → Usage: [[{ADD}05.331 Create And Validate Payment Channel via REST API (UseCase 1816021)]]
- → Dependency: [[CreatePaymentChannelDraftRequest]]
- → Dependency: [[GetValidRecipientBankAccountRequest]]
- → Dependency: [[GetPaymentChannelResponse]]
- → Dependency: [[UpdateAndValidatePaymentChannelRequest]]
- → Usage: [[{ADD}05.333 Create Payment Channel Draft via REST API]]
- → Dependency: [[ValidatePaymentChannelResponse]]
- → Usage: [[{ADD}05.332 Update and Validate Payment Channel via REST API]]
- → Dependency: [[UpdatePaymentChannelResposne]]
- → Dependency: [[UpdatePaymentChannelOrDraftRequest]]
- → Dependency: [[CreateAndValidatePaymentChanelRequest]]
- → Usage: [[{ADD}05.339 Update and validate Repayment Channel via REST API (UseCase 1816025)]]
- → Dependency: [[UpdateAndValidateRepaymentChannelRequest]]
- → Dependency: [[ValidatePaymentChannelRequest]]
- → Dependency: [[GetPaymentChannelRequest]]
- → Usage: [[{ADD}05.330 Get Payment Channel via REST API (UseCase 1816022)]]
- → Dependency: [[UpdateAndValidateRepaymentChannelResponse]]
- → Dependency: [[CreateAndValidatePaymentChannelResponse]]
- → Dependency: [[UpdatePaymentChannelRequest (Class 1774721)]]
- → Dependency: [[GetValidRecipientBankAccountResponse]]
- → Dependency: [[CreatePaymentChannelDraftResponse]]
- → Usage: [[05.335 Update Payment channel draft via REST API]]
- → Usage: [[UpdateAndValidatePaymentChannelResponse]]
- → Dependency: [[UpdatePaymentChannelOrDraftResponse]]
- → Usage: [[05.337 Update Payment Channel or Draft via REST API]]
- → Usage: [[05.338 Validate Payment Channel via REST API]]

## 📊 Appears In (9 diagrams)

- Logical: PaymentChanenlRestAPI - Update Payment Channel or Draft
- Logical: PaymentChannelRestAPI
- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Logical: PaymentChannelRestAPI - Update Payment Channel
- Logical: PaymentChannelRestAPI - Validate Payment Channel
- Logical: PaymentChannelRestAPI v3 - Update and validate repayment channel via REST API
- Use Case: PaymentChannelRestAPI - Update And Validate Payment Channel
