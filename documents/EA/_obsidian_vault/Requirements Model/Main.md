---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve"
domain: "Requirements Model"
element_id: 1814407
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Main

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve

## 📝 Notes

Goal of the task is extending the current Account transaction processing support implemented by SIR and BSL Transaction Supplements so that cash transaction without IP can be supported.

Expected impact on CSI/SIR side:

	
- a new Supplement definition for cash transaction types
	
- SIR - UC16.020 Process request for a loan; Determine the Loan Process type based on the provided Sales Quotes
	
- BSL - UC13.118 Authorize transactions in Transaction Supplement - based on process type, determine which AM API method will be called
	
- BSL - UC13.110 Process account transaction for Transaction Supplement - based on process type, determine which AM API method will be called
	
- BSL - 13.300 Process AM EventInfo notification - processing Disbursement confirmation from AM


Sales Quote attributes:

	
- purpose: "?"
	
- transactionType: "?"
	
- amount


Open questions:

	
- when the CASH trx should be authorized (before sign/after sign (acceptation))? - It should be after signature
	
- transaction confirmation - won't be done

## 🔗 Connections (1)

- ← Generalization: [[CSI-2861 SIR - Process support update for FLEXI]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve
