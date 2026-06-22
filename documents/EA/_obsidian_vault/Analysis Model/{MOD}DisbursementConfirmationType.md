---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Logical Data Model/DisbursementConfirmationFile"
domain: "Analysis Model"
element_id: 1494937
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}DisbursementConfirmationType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Logical Data Model/DisbursementConfirmationFile

## 📝 Notes

{MOD CBL-4769 PAYM-1804}
Structure of one record of disbursement confirmation

## 🔗 Connections (3)

- ← Dependency: [[DisbursementConfirmationFile (Class 1494940)]]
- → Dependency: [[{ADD}ExtendedProperty]]
- → Realisation: [[REQ #1 - Confirmation of cash card transactions after disbursement is successful]]

## 📊 Appears In (1 diagrams)

- Logical: DisbursementConfirmationFile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| paidAmount | MoneyType |  |
| paidDate | Date |  |
| refundPaymentCode | string |  |
| comment | string |  |
| {ADD}extendedProperty | {ADD}ExtendedProperty |  |
| transactionID | string |  |
