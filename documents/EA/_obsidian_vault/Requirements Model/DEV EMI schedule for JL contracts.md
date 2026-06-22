---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts"
domain: "Requirements Model"
element_id: 1379086
diagrams: 1
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 DEV EMI schedule for JL contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts

## 📝 Notes

We will implement a new installment schedule algorithm EQUAL_ANNUITY that will:

	
- support all day count methods (30/360, ACT/360, ACT/365F, ACT/ACT)
	
- keep the amount of the last installment equal with other installments or include the whole remaining principal amount to it based on a new setting keepEqualLastInstallmentAmount (true/false)
	
- throw a custom exception in case that calculated interest amount for the first installment is higher then the annuity


We will implement a method that will take available parameters for the algorithm from an installment plan scheme if exists for a contract and/or calculates them from other data structures (contract, FP, product, global parameters...) otherwise.

PCG will create new annuity calculation variant for the new algorithm. The new algorithm will be enabled in GUI based on a value of a new global parameter.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1787 (CBL-4815) EMI schedule for JL contracts (Requirement 1379085)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1787 (CBL-4815) EMI schedule for JL contracts
