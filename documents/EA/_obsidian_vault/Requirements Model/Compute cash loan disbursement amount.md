---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans"
domain: "Requirements Model"
element_id: 1878550
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Compute cash loan disbursement amount

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans

## 📝 Notes

Input:
ProcessedContract 

Payment amount =  NetCreditAmount - CashPayment - ConsolidatedAmount
Where if financial parameters exist:

	
- NetCreditAmount = Contract.Financial Parameters.NetCreditAmount of ProcessedContract
	
- CashPayment = Contract.Financial Parameters.CashPayment of ProcessedContract
	
- ConsolidatedAmount = Sum(Refinanced Contract.Amount) having Active = 1 and Contract = ProcessedContract


Else:

	
- NetCreditAmount = Contract.Offer Fin Parameters.NetCreditAmount of ProcessedContract where Offer Fin Parameters.ChosenFlag = 1
	
- CashPayment = Contract.Offer Fin Parameters.CashPayment of ProcessedContract where Offer Fin Parameters.ChosenFlag = 1
	
- {DEL PAYM-5417} ConsolidatedAmount = Sum(Refinanced Contract.Amount) having Active = 1 and Contract = ProcessedContract {DEL}
{ADD PAYM-5417} ConsolidatedAmount = Sum(TA Refinanced Contract.Amount) having Active = 1 and Contract Number = ProcessedContract {/ADD}

## 🔗 Connections (2)

- ← Usage: [[{ADD}05.705 Get Outgoing Payment Amount via REST API]]
- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (3 diagrams)

- Custom: CLM-93 (CBL-29) Consolidation (Top-up) for cash loans
- Logical: OutgoingPaymentRestAPI
- Use Case: Generate and Cancel outgoing payments
