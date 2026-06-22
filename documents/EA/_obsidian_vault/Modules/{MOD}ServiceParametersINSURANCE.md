---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/INSURANCE"
domain: "Modules"
element_id: 1810649
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceParametersINSURANCE

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/INSURANCE

## 📝 Notes

Specific for Service.ServiceType = INSURANCE

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: INSURANCE Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| automaticProlongation | boolean |  |
| currency | string |  |
| cutOffDaysCount | int |  |
| earlyTerminationTerm | string |  |
| firstPeriodDuration | string |  |
| firstPeriodDurationOffset | int |  |
| firstPeriodTrigger | string |  |
| firstPeriodTriggerOffset | int |  |
| insuranceCancellationOffset | int |  |
| insuranceProgramCode | string |  |
| insuranceTerminationOffset | int |  |
| limitCancellationToCOP | boolean |  |
| maximalLoanAmount | int |  |
| nextPeriodDuration | string |  |
| nextPeriodDurationOffset | int |  |
| numberOfBillingPeriods | int |  |
| refundOnManualTermination | string |  |
| termCountLimit | int |  |
| terminateOnFullLoanRepayment | boolean |  |
| remainingFeeCalculation | string |  |
| ratio | int |  |
| {ADD}coverageTrigger | string |  |
| {ADD}coverageTriggerOffset | int |  |
| {ADD}coverageDuration | string |  |
| {ADD}coverageDurationOffset | int |  |
