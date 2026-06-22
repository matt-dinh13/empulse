---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement"
domain: "Requirements Model"
element_id: 1760431
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2518 Storing defined ADS data in Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement

## 📝 Notes

Expected additional data to be stored as Transaction Supplement.Custom Data

	
- salesAgentId - will be stored in the ADS as next party item and next stored as custom data after Transaction Supplement creation. The value is needed for the EMI transaction scoring so it must be obtained from ADS before this step.
	
- parentLoanCode, parentTransactionIdForRefund - the data will be stored by ext app in the ADS. The data is required to be sent into AM.


Expected document to be stored

	
- invoiceNumber + invoiceDate - could be stored as attributes of a Document created in DMS. I.e. a Document Type must be defined and the local app must create the Invoice Document in DMS and store Document uuid into the transaction application (in ADS). The Document uuid will be taken from ADS and it is available after the transaction authorization. In this moment should be stored in the Transaction Supplement.
Notice: INVOICE document type incl DOC_ID (Invoice number) and ISS_DATE (Invoice date) already exists in the DMS.The Document Type can be placed in the Supplement definition as Client Document.


The data will be sent to AM within the transaction confirmation.

## 🔗 Connections (1)

- → Generalization: [[Requirement1 (Requirement 1760434)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement
