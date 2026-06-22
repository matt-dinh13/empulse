---
type: Change
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment"
domain: "Requirements Model"
element_id: 1391722
diagrams: 1
connections: 4
tags:
  - change
  - requirements-model
---

# 📄 ER request

> **Type**: Change · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📝 Notes

- GiftPaymentAmountExpected


	
- TotalInstallmentAmount - exclude Prepayment from active installments with DD < ERDD
	
- TotalToPaid = current calculation - TotalPrepaymentsValue

## 🔗 Connections (4)

- → Dependency: [[08.271 Create CET repayment request (UseCase 1862246)]]
- → Dependency: [[{MOD}08.257 Create Cooling-off period request]]
- → Dependency: [[03.050 Create Full Early repayment request manually]]
- → Dependency: [[Early Repayment Result]]

## 📊 Appears In (1 diagrams)

- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
