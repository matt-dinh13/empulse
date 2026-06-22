---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776510
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Amount > 0 and Amount <= TransactionAmountLimit

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Validation rule:  0 < Amount <= TransactionAmountLimit
Message on failure: MSG_TransactionAmountValidation (e.g. Transaction amount has to be greater than 0 and equal or less than ${TransactionAmountLimit}.")

## 🔗 Connections (2)

- ← Dependency: [[Transaction amount validation rule]]
- ← Dependency: [[Transaction amount]]

## 📊 Appears In (3 diagrams)

- Custom: Cardless cash transaction request - User Interface
- Custom: CBL-2004 (CLM-1007) Loan on Phone Limit Calculation
- Custom: LOP - Validation rules
