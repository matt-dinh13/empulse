---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538528
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Salesroom code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

Salesroom (POS) code. Searching for payments per a contracts by POS where a contracts are originated
Such salesroom is get according to the rule Get salesroom by operation, passed is Contract and operation = APPLICATION_CREATED - 
i.e. Logical data type: Outgoing Payment->Contract->Salesroom

Only compliance with specified value is searched (no wildcard can be used)

Localization code: SAL_Code

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - STANDARD
