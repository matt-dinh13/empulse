---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-902) Rollback loan service request update"
domain: "Requirements Model"
element_id: 1846361
diagrams: 6
connections: 2
tags:
  - enumeration
  - requirements-model
---

# 📝 {MOD}Business Event Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-902) Rollback loan service request update

## 📝 Notes

List of possible significant business events.

## 🔗 Connections (2)

- → Dependency: [[REQ#1 Creating a new type of Contract Business Event and creating new attributes for the new type]]
- ← Dependency: [[Business Event]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-10733 (CSI-902) Rollback loan service request update
- Custom: CBL-10922 (CSI-286) Rollback of executed Payhol request
- Custom: CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG
- Custom: CLM-6575 (CBL-26045) Additional Requirements for handling DPOS with Down payment
- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Logical: Business event - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CREATE_APPLICATION |  |  |
| ARRANGE_APPLICATION |  |  |
| CREATE_CONTRACT |  |  |
| SUBMIT_PRE |  |  |
| CONTRACT_REGISTRATION |  |  |
| CONTRACT_RECEIVING |  |  |
| CONDITIONS_ACCEPTED |  |  |
| CONDITIONS_REJECTED |  |  |
| PAY_OFF |  |  |
| DUE_DATE_CHANGE |  |  |
| PARTIAL_EARLY_REPAYMENT |  |  |
| GRACE_PERIOD_GRANTED |  |  |
| GIFT_PAYMENT_GRANTED |  |  |
| FULL_EARLY_REPAYMENT |  |  |
| COOLING_OFF_PERIOD_PROCESSED |  |  |
| FEES_BACK_PROCESSED |  |  |
| SUBMIT_OFFER |  |  |
| CONTRACT_EARLY_TERMINATION |  |  |
| CARD_ACTIVATION_SUCCESSFUL |  |  |
| CARD_ACTIVATION_FAILED |  |  |
| CARD_CANCELLATION_SUCCESSFUL |  |  |
| CARD_CANCELLATION_REJECTED |  |  |
| CARD_REPLACEMENT_SUCCESSFUL |  |  |
| CARD_REPLACEMENT_REJECTED |  |  |
| CARD_RENEWAL_SUCCESSFUL |  |  |
| CARD_RENEWAL_REJECETED |  |  |
| CARD_BLOCKED |  |  |
| CARD_LOST |  |  |
| CARD_STOLEN |  |  |
| CARD_DETAINED |  |  |
| CARD_UNBLOCKED_BY_COLLECTION |  |  |
| CARD_BLOCKED_WRONG_PIN |  |  |
| CARD_PIN_GENERATION_SUCCESSFUL |  |  |
| CARD_PIN_GENERATION_FAILED |  |  |
| INSURANCE_PROLONGED |  |  |
| INSURANCE_PROLONGATION_STOPPED |  |  |
| INSURANCE_FINISHED |  |  |
| OVERPAYMENT_SENT |  |  |
| UNBLOCK_AUTHORIZATION |  |  |
| AUTHORIZATION_LIMIT_CHANGED |  |  |
| PENALTY_CAP_LIMIT_EXCEEDED |  |  |
| CREDIT_LIMIT_CHANGE |  |  |
| CASH_LOAN_DISBURSED |  |  |
| PAYMENT_HOLIDAY_GRANTED |  |  |
| SPECIAL_PENALTY_CHARGING |  |  |
| SPECIAL_PENALTY_WAIVING |  |  |
| COLLECTION_ORDER_CREATION |  |  |
| CONTRACT_WRITE_OFF_REVERTED |  |  |
| CONTRACT_WRITE_OFF |  |  |
| DOWN_PAYMENT_RECEIVED |  |  |
| CONTRACT_PAY_OFF_REVERTED |  |  |
| CONTRACT_CANCELLATION_REVERTED |  |  |
| CHOOSE_OFFER |  |  |
| SAVE_2BOD |  |  |
| REFUSE_OFFER |  |  |
| GENERATE_DOCUMENTATION |  |  |
| COLLECTION_ORDER_CANCELATION |  |  |
| REL_ACCOUNT_CASH_LIMIT |  |  |
| REQUEST_FOR_DCH_CHANGE_CREATED |  |  |
| REQUEST_FOR_DCH_CHANGE_APPROVED |  |  |
| REQUEST_FOR_DCH_CHANGE_REVOKED |  |  |
| REQUEST_FOR_DCH_CHANGE_REJECTED |  |  |
| CONSOLIDATION_APPLIED |  |  |
| CARD_ECOMM_BLOCKED_OTP_LIMIT_REACHED |  |  |
| CARD_ECOMM_UNBLOCKED |  |  |
| DISBURSEMENT_CONFIRMATION_IMPORTED |  |  |
| INSURANCE_CANCELLED |  |  |
| CONSUMER_LOAN_DISBURSED |  |  |
| ACCOUNT_IS_SEIZED |  |  |
| AF_FILLING_STARTED_2BOD |  |  |
| JFS_ACCOUNT_CREATED |  |  |
| IS_GENERATED |  |  |
| SIGN |  |  |
| POST_WO_SETTLEMENT |  |  |
| CONTRACT_AUTO_REGISTRATION |  |  |
| INSURANCE_PROLONGATION_RENEWED |  |  |
| INSURANCE_PROLONGATION_FAILED_ON_DPD |  |  |
| OUTGOING_PAYMENT_DELIVERED |  |  |
| CARD_INITIAL_PIN_GENERATION |  |  |
| CARD_PIN_SMS_DELIVER |  |  |
| PAYMENT_HOLIDAY_ROLLBACK |  |  |
| FER_ROLLBACK |  |  |
| PER_ROLLBACK |  |  |
| CET_ROLLBACK |  |  |
| COP_ROLLBACK |  |  |
| LRES_ROLLBACK |  |  |
| GIFTP_ROLLBACK |  |  |
| GRPER_ROLLBACK |  |  |
| INSURANCE_REACTIVATED |  |  |
| ACCOUNT_EXPIRED |  |  |
| ACCOUNT_RENEWED |  |  |
| DOWN_PAYMENT_RECIEVED |  |  |
| Name | string |  |
| Code | string |  |
| Visible | boolean | TRUE |
| {ADD}Security Level | int |  |
