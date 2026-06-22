---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model/Debt calculator"
domain: "Modules"
element_id: 1877456
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculation of future debt for REL contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model/Debt calculator

## 📝 Notes

Input:
BillingPeriodBalanceDto

Algorithm:
System evaluates following values from attributes of the structure BillingPeriodBalanceDto:

	
- TotalDebt = outstandingDebt
	
- PrincipalDebt = debtPrincipal
	
- InterestDebt =debtInterest
	
- InterestEarned = perCreditInterest (for debit card: future interest which customer receive, when he will have the same funds on account as at moment of calculation)
	
- FeeDebt = debtFee
	
- InsuranceDebt = debtInsurance
	
- PenaltyDebt =debtPenalty
	
- SpecDebt (e.g. GORUA fee) =debtOther
	
- NotClearedTransactionsAmount = holdAmount
	
- OwnFunds =ownFunds

Values are related to the specified date (periodEnd).

## 🔗 Connections (2)

- ← Dependency: [[01.171 Create REL contract termination request (UseCase 1852809)]]
- ← Dependency: [[01.479 Show supposed debt for REL contract (UseCase 1876083)]]

## 📊 Appears In (3 diagrams)

- Custom: Debt calculator
- Use Case: Debt calculator
- Use Case: REL contract termination request
