---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1820498
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Contract Insurance Service activation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

Activation is called from:

	
- UC01.290 Activate contract (REL SIGN/ACTIVE = UC11.772)

only if FirstPeriodTrigger = CONTRACT_ACTIVATION_DATE_AND_OFFSET and FirstPeriodDuration != BILLING_PERIOD (old types of insurances)
Steps:
rule Create first insurance period upon activation (FP + tariff is used)
generates outgoing payment for insurance (UC05.091)
ConfirmTransactionRequest (for REL only, Account_Transaction of type 'IIS' in status = 'AUTHORIZED' )
activate insurance contract (UC11.040)

	
- UC01.739 Process Account Balance Change EOM notification

only REL, First Insurance Period Trigger = FIRST_EOM_BILLING_DATE
Steps:
determine first insurance period
check client's eligibility
calculates sum insured + premium (FP + tariff is used)
add insurance period (UC11.020)
create Account transaction
generate outgoing payment (UC05.091)
activate insurance contract (UC11.040)
confirm transaction
Create notifications for Insurance prolongation

	
- UC01.770 Process account transaction notification - from this UC consider calls UC11.770 only

First transaction notification from AM + IPD transaction notification (REL)
FirstPeriodTrigger = FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET
Steps:
for FirstPeriodDuration = BILLING_PERIOD calls UC11.770, else
Creates first insurance period upon first transaction
creates insurance transaction for insurance period (Initial transaction creation rule)
activate insurance contract (UC11.040)
generate outgoing payment (UC05.091)
confirm transaction

	
- UC11.770 Process first account transaction notification (REL) (also creates first insurance period + switch on)

called from UC01.770 if FirstPeriodDuration = BILLING_PERIOD
FirstPeriodTrigger = FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET
Steps:
Set BillingPeriodEnd by Expected date of Billing period rule (FP is used)
check client's eligibility
create the first insurance period (no UC used)
generate notification
activate insurance contract (UC11.040)

	
- UC11.772 Process contract event notification (also creates insurance period)

only REL, establishing insurance period based on Contract system events for REL contract type
event ContractSignSE if FirstPeriodTrigger = CONTRACT_SIGNING_ DATE_AND_OFFSET
event ContractActivationSE if FirstPeriodTrigger = CONTRACT_ACTIVATION_DATE_AND_OFFSET
Steps:
Set BillingPeriodEnd by Expected date of Billing period rule (FP is used)
check client's eligibility (UC11.126)
create the first insurance period (no UC used)
create Insurance Operation Status
generate notification
activate insurance contract (UC11.040)

	
- UC11.147 Activate insurance on contract (API)

Steps for AW - Transaction Supplement Insurance: (not needed for 1st phase)
determine first insurance period - from input
create insurance period (no UC used)
activate insurance contract (UC11.040)
Steps AW - REL account insurance:
get Insurance Service setting -> two sources (PCG APIs)
determine first insurance period -> Set BillingPeriodEnd by Expected date of Billing period rule (FP is used) -> get the billing date from AM/via input?
check client's eligibility (UC11.126)
create insurance period (no UC used)
Generate notification about insurance change
activate insurance contract (UC11.040)

	
- UC08.294 Process Account response on Contract Service notifications

AW - SERVICE_ADDED operation type - activate insurance contract (UC11.040) - aktivace pri pridani insurance service
AW - SWITCHED_ON operation type  - activate insurance contract (UC11.040)

## 📊 Appears In (1 diagrams)

- Custom: CBL-22680 Service Management Modules for REL (KZ)
