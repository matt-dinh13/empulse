---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776520
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Amount > 0 and Amount <= Available Balance

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Validation rule:  0 > Amount <= form.Available Balance
Message on failure: MSG_TransactionAmountValidation (e.g. Transaction amount has to be greater than 0 and equal or less than ${availableBalance}.")

## 🔗 Connections (2)

- ← Dependency: [[Validation rules for Cardless POS transaction]]
- ← Dependency: [[Price (GUIElement 1776519)]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
