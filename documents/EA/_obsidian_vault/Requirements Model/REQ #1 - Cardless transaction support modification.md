---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4685 (CLM-1954) Transaction Id support in Cardless transactions"
domain: "Requirements Model"
element_id: 1392650
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Cardless transaction support modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4685 (CLM-1954) Transaction Id support in Cardless transactions

## 📝 Notes

Goal of this task is to adapt a new attribute of "loanCode" into both the cardless transaction requests RCD and RPD functions.

It means:

	
- use the new version of REST /openapi/accounts/{accountNumber}/transactions/instalmentPlanOffers
	
- use the new version of AccountTransactionWS
	
- transfer the "loanCode" from the chosen instalmentPlanOffers into calling AuthorizeTransactionWithIPOffer, respectively ConfirmTransactionWithIPConversionRequest

## 📊 Appears In (1 diagrams)

- Custom: CBL-4685 (CLM-1954) Transaction Id support in Cardless transactions
