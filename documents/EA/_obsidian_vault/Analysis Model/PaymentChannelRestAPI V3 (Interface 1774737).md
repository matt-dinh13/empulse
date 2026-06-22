---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774737
diagrams: 1
connections: 26
tags:
  - interface
  - analysis-model
---

# 🔶 PaymentChannelRestAPI V3

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 📝 Notes

{ADD CBL-11267 PAYM-3378}
{MOD CBL-11254 PAYM-3628}
{MOD }

V3 added draft methods

## 🔗 Connections (26)

- → Usage: [[05.335 Update Payment channel draft via REST API]]
- → Dependency: [[UpdatePaymentChannelRequest (Class 1774721)]]
- → Dependency: [[CreatePaymentChannelDraftRequest]]
- → Dependency: [[GetPaymentChannelResponse]]
- → Usage: [[05.337 Update Payment Channel or Draft via REST API]]
- → Dependency: [[GetPaymentChannelRequest]]
- → Usage: [[{ADD}05.339 Update and validate Repayment Channel via REST API (UseCase 1816025)]]
- → Dependency: [[ValidatePaymentChannelRequest]]
- → Dependency: [[CreatePaymentChannelDraftResponse]]
- → Usage: [[{ADD}05.330 Get Payment Channel via REST API (UseCase 1816022)]]
- → Usage: [[UpdateAndValidatePaymentChannelResponse]]
- → Dependency: [[GetValidRecipientBankAccountRequest]]
- → Usage: [[{ADD}05.331 Create And Validate Payment Channel via REST API (UseCase 1816021)]]
- → Dependency: [[CreateAndValidatePaymentChanelRequest]]
- → Dependency: [[UpdateAndValidatePaymentChannelRequest]]
- → Dependency: [[UpdateAndValidateRepaymentChannelRequest]]
- → Dependency: [[CreateAndValidatePaymentChannelResponse]]
- → Dependency: [[UpdatePaymentChannelOrDraftRequest]]
- → Usage: [[{ADD}05.333 Create Payment Channel Draft via REST API]]
- → Dependency: [[ValidatePaymentChannelResponse]]
- → Dependency: [[UpdatePaymentChannelResposne]]
- → Usage: [[{ADD}05.332 Update and Validate Payment Channel via REST API]]
- → Usage: [[05.338 Validate Payment Channel via REST API]]
- → Dependency: [[UpdateAndValidateRepaymentChannelResponse]]
- → Dependency: [[GetValidRecipientBankAccountResponse]]
- → Dependency: [[UpdatePaymentChannelOrDraftResponse]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI v3 - Update and validate repayment channel via REST API
