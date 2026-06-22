---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface"
domain: "Analysis Model"
element_id: 1878037
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Show loyalty account detail

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface

## 📝 Notes

It displays a loyalty account detail in the LRP system. 
It invokes use case 12.612 Show loyalty account detail, passed is Contract.Account Number.

Localization code:
ACC_ShowLoyaltyAccountDetail

Visible:
Only if exists Contract->Contract Service[where Status <> new]->Loyalty Service

## 🔗 Connections (1)

- → Dependency: [[12.612 Show loyalty account detail]]

## 📊 Appears In (1 diagrams)

- Custom: Show account detail
