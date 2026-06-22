---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826916
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1740 - Update method for TransactionSupplement creation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

Goal of this story is to change the current method for Transaction Supplement creation so that more sales quotes (e.g. also for related loan services) can be used for one business case (application in ADS) and SIR for orchestration can be used.

TODO items:

	
- check Supplement definition - gets active Transaction Supplement definition by provided type in SalesQuote.purpose (i.e. get Supplement having Type = TRANSACTION_SUPPLEMENT and Transaction Type = SalesQuote.purpose and Version Status = Active);  a message is written (TRANS_DEFINITION_MISSING, e.g. Transaction supplement definition is missing.) -- volani upravit pro ziskani vsech sales quotes. Z vracenych dat SQ pouzit purpose value k vyhledani Supplement definition. SQ, ktera ma purpose = Supplement definition je "master" SQ.
	
- relatioships between sales quotes (parent - child) ->  SALES_QUOTE_CODE of parent (or child) salesquote in SQS.specifications
	
- relation to interpreted service -> SERVICE_CODE in SQS.specifications

## 🔗 Connections (3)

- ← Dependency: [[CSI-1741 - A new method for Sales Quote adding to TransactionSupplement (Requirement 1826913)]]
- → Generalization: [[CBL-16736 General requirement]]
- ← Generalization: [[CSI-1795 Update methods returning TransactionSupplement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
