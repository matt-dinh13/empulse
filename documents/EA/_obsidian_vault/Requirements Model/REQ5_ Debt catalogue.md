---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications"
domain: "Requirements Model"
element_id: 1391744
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ5: Debt catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications

## 📝 Notes

"total remaining debt with prepayment" = total outstanding debt on contract - current pre-transfer balance

LDM: DebtCatalogue.TotalDebt - DebtCatalogue.SumOfPrepayment
Localization code: CON_PrepayTotalDebtWithPrepay

"current prepayment" value to Debt catalogue information panel on Contract Detail>Payment Channel tab

LDM: DebtCatalogue.SumOfPrepayment
Localization code: CON_PrepayAmount

## 📊 Appears In (1 diagrams)

- Custom: PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications
