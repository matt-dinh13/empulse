---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2293 (CLM-1052) Statements cannot be opened"
domain: "Requirements Model"
element_id: 1259556
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Show balance detail - Print statement button availability update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2293 (CLM-1052) Statements cannot be opened

## 📝 Notes

AM BillingPeriodBalanceDto type was extended by new attribute statementAvailable (bool).
This parameter should be read by method AccountmanagementWS.GetAccountBillingPeriodBalancesRequest and has to be used in UC12.602 Show balance detail to set visibility of Print statement button.

## 🔗 Connections (1)

- → InformationFlow: [[12.602 Show balance detail (UseCase 1878567)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-2293 (CLM-1052) Statements cannot be opened
