---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Commodity"
domain: "Analysis Model"
element_id: 1689466
diagrams: 1
connections: 0
tags:
  - screen
  - analysis-model
---

# 📱 Tab-Commodity

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Commodity

## 📝 Notes

Tab containing the detailed information about the commodities, which are associated with respective contract (i.e. are subject of respective POS loan).

Visible only if the contract is based on a product with Purchase initial transaction type (i.e. Contract->Offer_Financial_Parameters[.Chosen=TRUE].Initial_Transaction_Type = 'POS') or a SAI product type (i.e. Contract.Contract_Type = 'SAI').

Localization code:
GEN_Commodity

## 📊 Appears In (1 diagrams)

- Custom: Tab-Commodity
