---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1868225
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Insurance Service setting mapping (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule defines mapping of insurance service setting from PRC APIs Services and Service catalog to common setting.

Services param			Service catalog param
manualTerminationAllowed	not used, needed only for CEL, false as default
manualCancellationAllowed	not used, needed only for CEL, false as default
mandatoryOnContract		not used in CSI
insuranceProgramCode		INSURANCE_PROGRAM_CODE
maximalLoanAmount		not used in CSI
currency			not used in CSI
termCountLimit			not used, needed only for CEL, null as default
cutOffDaysCount			CUT_OFF_DAYS_COUNT
insuranceCancellationOffset	CANCELLATION_OFFSET
insuranceTerminationOffset	TERMINATION_OFFSET
numberOfBillingPeriods		NUMBER_OF_BILLING_PERIODS
refundOnManualTermination	not used, needed only for CEL, NO_REFUND as default
earlyTerminationTerm		EARLY_TERMINATION_TERM
firstPeriodTrigger		FIRST_PERIOD_TRIGGER
firstPeriodTriggerOffset		FIRST_PERIOD_TRIGGER_OFFSET
firstPeriodDuration		FIRST_PERIOD_DURATION
firstPeriodDurationOffset		FIRST_PERIOD_DURATION_OFFSET
nextPeriodDuration		NEXT_PERIOD_DURATION
nextPeriodDurationOffset		NEXT_PERIOD_DURATION_OFFSET
automaticProlongation		AUTOMATIC_PROLONGATION
terminateOnFullLoanRepayment	TERMINATE_ON_FULL_LOAN_REPAYMENT
limitCancellationToCOP		LIMIT_CANCELLATION_TO_COOLING_OFF_PERIOD
remainingFeeCalculation		not used, needed only for CEL, IN_PROPORTION_TO_TERM as default


API response examples:
Services:
PRC GET .../openapi/v1/services/{'serviceCode':'serviceVersion'}?deps=PARAMETERS

   "manualTerminationAllowed": false,
   "manualCancellationAllowed": true,
   "mandatoryOnContract": false,
   "parameters":    {
      "parametersType": "Insurance",
      "insuranceProgramCode": "LOR_INS_GO",
      "maximalLoanAmount": null,
      "currency": "PHP",
      "termCountLimit": null,
      "cutOffDaysCount": 31,
      "insuranceCancellationOffset": null,
      "insuranceTerminationOffset": null,
      "numberOfBillingPeriods": null,
      "refundOnManualTermination": "NO_REFUND",
      "earlyTerminationTerm": "CUT_OFF_INSTALLMENT",
      "firstPeriodTrigger": "FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET",
      "firstPeriodTriggerOffset": 1,
      "firstPeriodDuration": "NUMBER_OF_DAYS",
      "firstPeriodDurationOffset": 1,
      "nextPeriodDuration": null,
      "nextPeriodDurationOffset": null,
      "automaticProlongation": false,
      "terminateOnFullLoanRepayment": false,
      "limitCancellationToCOP": true,
      "remainingFeeCalculation": "IN_PROPORTION_TO_TERM"

Service catalogue:
PRC GET .../openapi/v1/sc-services/{serviceCode}?deps=PARAMETERS

   "parameters":    [
            {
         "code": "AUTOMATIC_PROLONGATION",
         "type": "AUTOMATIC_PROLONGATION",
         "subtype": null,
         "value": "true"
      },
            {
         "code": "FIRST_PERIOD_DURATION",
         "type": "FIRST_PERIOD_DURATION",
         "subtype": null,
         "value": "CALENDAR_YEAR"
      },
            {
         "code": "FIRST_PERIOD_DURATION_OFFSET",
         "type": "FIRST_PERIOD_DURATION_OFFSET",
         "subtype": null,
         "value": "1"
      },
            {
         "code": "FIRST_PERIOD_TRIGGER",
         "type": "FIRST_PERIOD_TRIGGER",
         "subtype": null,
         "value": "TRANSACTION_DATE"
      },
            {
         "code": "FIRST_PERIOD_TRIGGER_OFFSET",
         "type": "FIRST_PERIOD_TRIGGER_OFFSET",
         "subtype": null,
         "value": "1"
      },
            {
         "code": "NEXT_PERIOD_DURATION",
         "type": "NEXT_PERIOD_DURATION",
         "subtype": null,
         "value": "CALENDAR_MONTH"
      },
            {
         "code": "NEXT_PERIOD_DURATION_OFFSET",
         "type": "NEXT_PERIOD_DURATION_OFFSET",
         "subtype": null,
         "value": "5"
      },
            {
         "code": "INSURANCE_PROGRAM_CODE",
         "type": "INSURANCE_PROGRAM_CODE",
         "subtype": null,
         "value": "IS_INS"
      },
            {
         "code": "EARLY_TERMINATION_TERM",
         "type": "EARLY_TERMINATION_TERM",
         "subtype": null,
         "value": "COP_CUT_OFF_INSTALLMENTS"
      },
            {
         "code": "CUT_OFF_DAYS_COUNT",
         "type": "CUT_OFF_DAYS_COUNT",
         "subtype": null,
         "value": "15"
      },
            {
         "code": "CANCELLATION_OFFSET",
         "type": "CANCELLATION_OFFSET",
         "subtype": null,
         "value": "30"
      },
            {
         "code": "TERMINATION_OFFSET",
         "type": "TERMINATION_OFFSET",
         "subtype": null,
         "value": "30"
      },
            {
         "code": "NUMBER_OF_BILLING_PERIODS",
         "type": "NUMBER_OF_BILLING_PERIODS",
         "subtype": null,
         "value": "60"
      },
            {
         "code": "LIMIT_CANCELLATION_TO_COOLING_OFF_PERIOD",
         "type": "LIMIT_CANCELLATION_TO_COOLING_OFF_PERIOD",
         "subtype": null,
         "value": "true"
      },
            {
         "code": "INSURANCE_TYPE",
         "type": "INSURANCE_TYPE",
         "subtype": null,
         "value": "MI"
      },
            {
         "code": "TERMINATE_ON_FULL_LOAN_REPAYMENT",
         "type": "TERMINATE_ON_FULL_LOAN_REPAYMENT",
         "subtype": null,
         "value": "true"
      }
   ]

## 🔗 Connections (1)

- ← Dependency: [[08.010 Add Service to Loan (COS) (UseCase 1876285)]]

## 📊 Appears In (1 diagrams)

- Use Case: Adding Service to Contract - Use Case Model
