---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1773140
diagrams: 10
connections: 23
tags:
  - interface
  - analysis-model
---

# 🔶 PaymentChannelRestAPI

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11267 PAYM-3378}
{MOD CBL-11254 PAYM-3628}

note: v2 change is only technical, no need to create separate package

## 🔗 Connections (23)

- → Usage: [[05.336 Verify Payment Channel via REST API]]
- → Usage: [[CreateAndValidatePaymentChannelResponse (Class 1779748)]]
- → Usage: [[05.335 Update Payment channel draft via REST API]]
- → Dependency: [[VerifyPaymentChannelRequest (Class 1779753)]]
- → Dependency: [[{ADD}05.331 Create And Validate Payment Channel via REST API (UseCase 1816021)]]
- → Usage: [[CreateAndValidatePaymentChanelRequest (Class 1779739)]]
- → Dependency: [[PaymentChannelVerificationResponse (Class 1779751)]]
- → Dependency: [[CreatePaymentChannelDraftResponse (Class 1779746)]]
- → Dependency: [[PaymentChannelVerificationResponse]]
- → Dependency: [[{ADD}05.334 Payment Channel Verification via REST API]]
- → Dependency: [[{ADD}05.330 Get Payment Channel via REST API (UseCase 1816022)]]
- → Dependency: [[{ADD}05.332 Update and Validate Payment Channel via REST API]]
- → Usage: [[GetPaymentChannelResponse (Class 1779736)]]
- → Usage: [[UpdateAndValidatePaymentChannelResponse (Class 1779749)]]
- → Dependency: [[ValidatePaymentChannelResponse (Class 1779741)]]
- → Usage: [[GetPaymentChannelRequest (Class 1779737)]]
- → Dependency: [[UpdatePaymentChannelResposne (Class 1779754)]]
- → Dependency: [[UpdatePaymentChannelRequest (Class 1779742)]]
- → Dependency: [[ValidatePaymentChannelRequest (Class 1779743)]]
- → Dependency: [[VerifyPaymentChannelRequest]]
- → Dependency: [[CreatePaymentChannelDraftRequest (Class 1779740)]]
- → Dependency: [[{ADD}05.333 Create Payment Channel Draft via REST API]]
- ← Usage: [[UpdateAndValidatePaymentChannelRequest (Class 1779750)]]

## 📊 Appears In (10 diagrams)

- Logical: PaymentChannelRestAPI
- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Logical: PaymentChannelRestAPI - PaymentChannelVerification
- Logical: PaymentChannelRestAPI - Update Payment Channel
- Logical: PaymentChannelRestAPI - Verify Payment Channel
- Logical: PaymentChannelRestAPI - Verify Payment Channel
- Logical: PaymentChannelRestAPI - Verify Payment Channel
- Use Case: PaymentChannelRestAPI - Update And Validate Payment Channel
