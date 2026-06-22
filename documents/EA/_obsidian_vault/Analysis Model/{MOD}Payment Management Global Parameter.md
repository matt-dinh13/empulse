---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Global system parameters"
domain: "Analysis Model"
element_id: 1772133
diagrams: 2
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 {MOD}Payment Management Global Parameter

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Global system parameters

## 📝 Notes

Definition of Global Parameters for functionality of Payment Management

## 🔗 Connections (1)

- ← Dependency: [[Global Parameter]]

## 📊 Appears In (2 diagrams)

- Logical: Global parameters - OVERVIEW
- Logical: Payment Management Global Parameter

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| AutomaticPairingIncPayAfterImport | boolean | false |
| OutPayVersion | int |  |
| MATERIALIZE_HINT_USE_1 | int |  |
| MATERIALIZE_HINT_USE_2 | int |  |
| OutgoingPaymentsDispatchNotes | boolean | TRUE |
| OutgoingPaymentsGenerateFile | boolean | TRUE |
| OutgoingPaymentsGridLimit |  | 1000 |
| OutgoingPaymentsJobLimit | int | 10000 |
| PrintOrdersFileForSigning |  |  |
| ParamDDSCalculationAlgorithm |  |  |
| ParamDDSDueDateWorkingOnly |  |  |
| ParamDDSHcDeliveryDelay |  |  |
| AutomaticOutPayOrderEnabled | boolean | FALSE |
| CancelPaidRcdEnabled | boolean | false |
| LoanCodeEnabled | boolean | false |
| MW_SERVICE_EVALUATION | boolean | false |
| {ADD}PartnersWithDelayedPayments |  | FALSE |
| {ADD}skipPaymentChannelCombinationValidation | boolean | TRUE |
| {ADD}checkActiveDDMsDuringDDMConf | boolean |  |
| {ADD}OutPayValidateJMSPayload | boolean |  |
| {ADD}OutPayJMSOneMessageBatching | boolean |  |
| {ADD}BindPTRToSubv | boolean | FALSE |
| DDM_EXT_PROPERTIES | boolean |  |
| {ADD}OutgoingPaymentsIsDispatchNotes | boolean | FALSE |
| useNewDDMCodeSequence | boolean | FALSE |
| USE_ECS_FROM_PREV_DDM | boolean | FALSE |
| MandatoryRegularPaymentCode | boolean | TRUE |
| {ADD}PAYM_OUTPAY_THIRD_PARTY | string |  |
| UseRefundFee | boolean | FALSE |
