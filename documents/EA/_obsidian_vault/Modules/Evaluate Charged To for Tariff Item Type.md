---
type: Requirement
stereotype: "Display"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules"
domain: "Modules"
element_id: 1879061
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Evaluate Charged To for Tariff Item Type

> **Type**: Requirement · **Stereotype**: «Display»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules

## 📝 Notes

Input: 
- inputTariffItemType

ToPrincipal is evaluated by the rule Is Flag on Tariff Item Type (inputTariffItemType, "TO_PRINCIPAL").

Returns target of the fee charging:

	
- LOAN_AMOUNT - for inputTariffItemType.ChargingPeriodicity = ONE_TIME and ToPrincipal = true (TAR_ChargedTo_LoanAmount)
	
- CASH_PAYMENT - for inputTariffItemType.ChargingPeriodicity = ONE_TIME and ToPrincipal = false (TAR_ChargedTo_CashPayment)
	
- INSTALLMENT - for inputTariffItemType.ChargingPeriodicity = IN_INSTALLMENT and ToPrincipal = true (TAR_ChargedTo_Installment)
	
- IN_FIRST_INSTALLMENT - for inputTariffItemType.ChargingPeriodicity = IN_FIRST_INSTALLMENT (ChargingPeriodicityType.IN_FIRST_INSTALLMENT)


For displaying the target is transformed according to localization code in brackets.

## 🔗 Connections (4)

- ← Dependency: [[Insurance premium]]
- ← Dependency: [[Fees and services]]
- ← Dependency: [[Fees and services (Class 1857110)]]
- ← Dependency: [[Fees and services (Class 1879149)]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
