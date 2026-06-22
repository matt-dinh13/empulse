---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG"
domain: "Requirements Model"
element_id: 1846364
diagrams: 4
connections: 6
tags:
  - enumeration
  - requirements-model
---

# 📝 Business Event Attribute Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG

## 📝 Notes

Type of the BusinessEventAttribute. 
It is used for translation purposes.  

For more details see the rule Translation of business event attribute.

## 🔗 Connections (4)

- → Dependency: [[Allowed combinations of business event types and attribute types]]
- → Dependency: [[REQ#1 Creating a new type of Contract Business Event and creating new attributes for the new type]]
- ← Dependency «use»: [[BusinessEventAttribute]]
- → Dependency «use»: [[BusinessEventAttributeDataType]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG
- Custom: CLM-6575 (CBL-26045) Additional Requirements for handling DPOS with Down payment
- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Logical: Business event - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | String |  |
| DataType | BusinessEventAttributeDataType |  |
| Enumeration | Enumeration |  |
| CARD_NUMBER |  |  |
| CARD_ACTIVATION_FAILED_REASON |  |  |
| CARD_CANCELLATION_REJECTED_REASON |  |  |
| CARD_REPLACEMENT_REJECTED_REASON |  |  |
| CARD_RENEWAL_REJECTED_REASON |  |  |
| CARD_PIN_GENERATION_FAILED_REASON |  |  |
| OVERPAYMENT_TARGET |  |  |
| BANK_ACCOUNT_NUMBER |  |  |
| UNBLOCKED_AUTHORIZED_AMOUNT |  |  |
| PENALTY_AMOUNT_CHARGED |  |  |
| PENALTY_AMOUNT_ORIGINAL |  |  |
| PENALTY_DATE |  |  |
| CREDIT_LIMIT_CHANGE_SOURCE |  |  |
| NEW_CREDIT_LIMIT |  |  |
| SPECIAL_PENALTY_EVENT_REASON |  |  |
| COLLECTION_ORDER_NUMBER |  |  |
| COLLECTION_ORDER_TYPE |  |  |
| CASH_LIMIT_MAX |  |  |
| DEMANDED_BANK_ACCOUNT |  |  |
| DEMANDED_SALESROOM |  |  |
| DEMANDED_PARTNER |  |  |
| DEMANDED_CARD_TRUNCATED_PAN |  |  |
| DCH_CHANGE_REQUEST_REJECTED_REASON |  |  |
| CONSOLIDATED_CONTRACTS |  |  |
| DISBURSEMENT_CONFIRMATION_STATUS |  |  |
| DISBURSEMENT_AMOUNT |  |  |
| JFS_LOAN_ACCOUNT_NUMBER |  |  |
| JFS_INITIAL_PAYMENT_MODE |  |  |
| JFS_UTR_NUMBER |  |  |
| IS_GENERATION_REASON |  |  |
| {ADD}SYSTEM |  |  |
| {ADD}CARD_INITIAL_PIN_STATUS |  |  |
| {ADD}CARD_PIN_SMS_DELIVER_STATUS |  |  |
| {ADD}PAYMENT_CHANNEL |  |  |
| {ADD}TRANSACTION_ID |  |  |
| {ADD}TRANSACTION_AMOUNT |  |  |
| {ADD} PAYMENT_CHANNEL_BRAND |  |  |
| {ADD} TRANSACTION_DATE |  |  |
| {ADD} FEE |  |  |
| {ADD}  FEE_IS_WAIVED |  |  |
