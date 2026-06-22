---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Consolidation"
domain: "Analysis Model"
element_id: 1613028
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}External refinance

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Consolidation

## 📝 Notes

This grid displays information about external consolidated contracts.
Account numbers of external consolidated contracts are obtained using the PaymentChannelWS interface (the GetPaymentChannel with paymentChannelId ({ADD CLM-3521}(TempAppl){/ADD} Refinanced Contract.paymentChannelId).


Visible only if minimal one external consolidated contract exists.

Localization:
CON_External_Refinance

## 🔗 Connections (3)

- → Dependency: [[01.365 Add bank account for refinanced contract (UseCase 1817767)]]
- → Dependency: [[{MOD}01.366 Update bank account for refinanced contract]]
- → Dependency: [[{ADD}01.368 Update closure information for refinanced contract (UseCase 1817766)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab-Consolidation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract number | string |  |
| Amount | decimal |  |
| Account number | int |  |
| Bank branch | text |  |
| Bank name | text |  |
| {ADD}Contract closure | boolean |  |
| Update bank account | int |  |
| Add bank account | int |  |
| {ADD}Update closure information |  |  |
