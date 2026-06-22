---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854365
diagrams: 1
connections: 2
tags:
  - activity
  - analysis-model
---

# ⚡ {MOD}Recalculate CEL debt info

> **Type**: Activity
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 📝 Notes

{ADD CLM-2841}If global parameter AsyncDCCalculation = true then system inserts a record in BSL_DEBT_CATALOGUE_REQ (contract id, latest debt catalog id, initializing UC number  and source system 'BSL' has to be filled) otherwise{/ADD} system calls 01.474 Calculate CEL debt info

## 🔗 Connections (2)

- ← ControlFlow: [[All incoming payments are paired with the contract installments (Synchronization 1854369)]]
- → ControlFlow: [[Generate IncomingPaymentPairingChangedCELSE system event (Activity 1854354)]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.180 Perform coupling payments with instalments
