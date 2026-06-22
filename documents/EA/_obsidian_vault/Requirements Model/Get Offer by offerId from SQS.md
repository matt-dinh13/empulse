---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data"
domain: "Requirements Model"
element_id: 1878825
diagrams: 7
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Get Offer by offerId from SQS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data

## 📝 Notes

This rule describes how to get offer data from the SQS based on provided chosenOfferId
 

	
- System calls GET .../api/salesQuotes/{chosenOfferId}
	
- System returns the SalesQuote result. If SQS component is unavailable (timeout), system returns error message of MSG_SQS_NOT_AVAILABLE; e.g. Sales Quote System is not available.

## 🔗 Connections (6)

- ← Dependency: [[{ADD}Validate Card Balance Transfer request request]]
- ← Dependency: [[{MOD}Validate Transaction Supplement request]]
- ← Dependency: [[LoanParameters]]
- ← Dependency: [[HO_ALOP_DATA filling rules]]
- ← Dependency: [[13.116 Add Sales Quote to Transaction Supplement (UseCase 1881439)]]
- ← Dependency: [[Validate Contract Service Replacement request]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Custom: HO_ALOP_DATA - getting external data
- Logical: HO_ALOP_DATA
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: Contract service replacement request processing
- Use Case: Transaction Supplement request creation - Use case model
- Use Case: Transaction Supplement Sales Quote adding
