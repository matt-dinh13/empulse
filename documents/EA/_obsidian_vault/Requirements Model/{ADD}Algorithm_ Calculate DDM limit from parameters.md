---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods"
domain: "Requirements Model"
element_id: 1817920
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Algorithm: Calculate DDM limit from parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods

## 📝 Notes

{ADD PAYM-1844 CBL-1541 /}

Input parameters:

	
- Max Monthly Payment   ...optional
	
- Net Credit Amount           ...optional
	
- Provided Credit Limit      ...optional


Output:

	
- Limit OR error


Algorithm:

=================
  REL calculation
=================
If Provided Credit Limit is passed, then
Limit = Provided Credit Limit x global parameter DDMLimitMultipleREL


=================
  CEL calculation
=================
Otherwise the calculation depends on value of global parameter DDMLimitBase.

MULTIPLE_OF_MONTHS_INSTALLMENT:

Limit = (Max Monthly Payment x DDMLimitMultiple) rounded up by DDMLimitRound
If Max Monthly Payment is not passed, the algorithm ends with an error.

CREDIT_AMOUNT:

Limit = Net Credit Amount
If Max Monthly Payment is not passed, the algorithm ends with an error.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}14.421 Create DDM via WS]]
- ← Dependency: [[{ADD}14.425 Calculate DDM limit via WS (UseCase 1862012)]]
- ← Dependency: [[{MOD}14.422 Update DDM via WS]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Use Case: DDM via WS
