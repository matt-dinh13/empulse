---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement"
domain: "Requirements Model"
element_id: 1760434
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement1

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement

## 📝 Notes

The goal of the task is extend the current Transaction Supplement processing (see CBL-16738) with additional attributes which should be used for showing transaction information in the Account (AM).

Expected information provided CSI part:

commodity data (referenced by commodityId) - currently only stored in the sales quotes (SQS). commodityId is required to be sent into AM (within transaction authorization). Could be stored in the AccountTransaction (related to TransSuppl).
salesAgentId - could be stored in the ADS and next stored as custom data after Transaction Supplement creation
invoiceNumber + invoiceDate - could be stored as a Document in DMS. I.e. a Document Type must be defined. A local app must create the Invoice Document in DMS and store Document uuid into the transaction application (in ADS). The Document uuid will be stored in the Transaction Supplement. Sent in to the AM?
parentLoanCode, parentTransactionIdForRefund - the data will be stored by ext app in the ADS. The data is required to be sent into AM.
The data will be sent to AM within the transaction confirmation.

## 🔗 Connections (1)

- ← Generalization: [[CSI-2518 Storing defined ADS data in Transaction Supplement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-19794 (CSI-2470) Additional attributes for Transaction Suplement
