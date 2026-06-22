---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16042 (CSI-1090) Replace EOMBillingFinishedSE by processing of AccountBalanceChange"
domain: "Requirements Model"
element_id: 1665895
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Process AccountBalanceChange EOM notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16042 (CSI-1090) Replace EOMBillingFinishedSE by processing of AccountBalanceChange

## 📝 Notes

New use case replaces (driven by functional switch) original 01.775 Process account EOM billing finished event with following differences:
- it processes directly AccountBalanceChange notification of EOM type instead of EOMBillingFinishedSE 
- it uses values from AccountBalanceChange notification instead of DebtCatalogue for premium calculation 
- it uses BusinessDate from AccountBalanceChange as definition of closing date of billing period for which was done EOM procedure (EOM date = BusinessDate +1 instead of current date)
- it checks existing insurance period with StartDate=EOM date instead of current date in period interval

## 📊 Appears In (1 diagrams)

- Custom: CBL-16042 (CSI-1090) Replace EOMBillingFinishedSE by processing of AccountBalanceChange
