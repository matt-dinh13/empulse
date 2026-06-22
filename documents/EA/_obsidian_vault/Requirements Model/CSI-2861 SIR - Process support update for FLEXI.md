---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve"
domain: "Requirements Model"
element_id: 1814409
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2861 SIR - Process support update for FLEXI

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve

## 📝 Notes

Goal of the task is extending the current Account transaction processing support implemented by SIR and BSL Transaction Supplements so that cash transaction without IP can be supported.

Expected impact on CSI/SIR side:

	
- a new Supplement definition for cash transaction types
	
- SIR - UC16.020 Process request for a loan; Determine the Loan Process type based on the provided Sales Quotes
	
- BSL - UC13.116 Add Sales Quote to Transaction Supplement - storing offer transaction purpose into Account Transaction entity
	
- BSL - UC13.118 Authorize transactions in Transaction Supplement - based on the offer purpose type, determine which AM API method will be called
	
- BSL - UC13.300 Process AM EventInfo notification - processing Disbursement confirmation from AM


AM REST authorization method: https://am.in00a1.cz.infra/cabus-am/rest/swagger-ui/index.html?urls.primaryName=api-next#/AccountTransactions/postAccountAuthorization

## 🔗 Connections (2)

- → Generalization: [[Main]]
- ← Generalization: [[Supplement definition fo CASH transaction without IP]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-21862 (CSI-2731) Transaction routing through Blaze to get final Approve
