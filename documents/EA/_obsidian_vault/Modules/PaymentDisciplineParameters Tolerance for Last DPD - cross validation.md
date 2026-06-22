---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules"
domain: "Modules"
element_id: 1877262
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 PaymentDisciplineParameters Tolerance for Last DPD - cross validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules

## 📝 Notes

If PaymentDisciplineParameters.DifferToleranceForLastDPD = true then

	
- PaymentDisciplineParameters.LastDPDAmountTolerance


	
- PaymentDisciplineParameters.LastDPDDelayTolerance

are mandatory [REQUIRED]

LastDPDAmountTolerance <= DPDAmountTolerance [INVALID_VALUE]

If PaymentDisciplineParameters.LastDPDAmountTolerance = PaymentDisciplineParameters.DPDAmountTolerance
and
PaymentDisciplineParameters.LastDPDDelayTolerance = PaymentDisciplineParameters.DPDDelayTolerance
then display error messages (INVALID_LAST_DPD_AMOUNT_TOLERANCE, INVALID_LAST_DPD_DELAY_TOLERANCE).

## 🔗 Connections (1)

- ← Dependency: [[PaymentDisciplineParametersDto - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
