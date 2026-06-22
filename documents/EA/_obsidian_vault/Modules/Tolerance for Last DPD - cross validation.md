---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Validation rules"
domain: "Modules"
element_id: 1152266
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Tolerance for Last DPD - cross validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Validation rules

## 📝 Notes

If PaymentDisciplineParameters.DifferToleranceForLastDPD = true then

	
- PaymentDisciplineParameters.LastDPDAmountTolerance


	
- PaymentDisciplineParameters.LastDPDDelayTolerance

are mandatory (MSG_REQUIRED).

-- setting for Last is not different 
If PaymentDisciplineParameters.LastDPDAmountTolerance = PaymentDisciplineParameters.DPDAmountTolerance
and
PaymentDisciplineParameters.LastDPDDelayTolerance = PaymentDisciplineParameters.DPDDelayTolerance
then display error message (MSG_PayDisciplineParamLastNotDiffer).

## 🔗 Connections (3)

- ← Dependency: [[Last DPD Delay Tolerance (GUIElement 1562078)]]
- ← Dependency: [[Last DPD Amount Tolerance (GUIElement 1562072)]]
- ← Dependency: [[Differ Tolerance for Last DPD]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
