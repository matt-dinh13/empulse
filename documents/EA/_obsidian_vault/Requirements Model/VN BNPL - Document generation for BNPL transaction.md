---
type: Requirement
stereotype: "BusinessRequirement"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction"
domain: "Requirements Model"
element_id: 1777268
diagrams: 1
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 VN BNPL - Document generation for BNPL transaction

> **Type**: Requirement · **Stereotype**: «BusinessRequirement»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction

## 📝 Notes

Support for POS (cardless) transaction with accompanying document (similar to the current ALOP process)

Expected range of work:

a new API for creation of this type of transaction (see the current ALOP API). Most of needed data will be stored in ADS. A new Contract Supplement type.
BLAZE approval is not needed (ensured by the Supplement setting)
Generation of data source for this type of transaction - possible usage of applicant domain. In this case isn't needed to call PIF for customer data. Check with AP possibility of providing tariff item data. Will be the same datasource like for ALOP? If so, some optimalization should be performed, i.e. skip some calls for taking external data not needed for this type of transaction.
Exposing generated files (PDFs) via KAFKA topic (message like ALOP notification?)
Accept/reject documents like ALOP
Creation a transaction for AM - it should be directly confirmation (API check with AM)
Final contract supplement status: should be 'paid'?
Notice to performance:

VN business requires document generation take less than 5sec. It should be time between "client accepts an offer" (external system calls CSI API for trx request creation) and KAFKA notification with generated documents.
Others:

Payment channel - it will be used?
Dealer identifier - it will be used, is it needed for AM?

## 🔗 Connections (8)

- ← Dependency: [[CSI-1516 - Transaction Supplements management]]
- ← Generalization: [[CSI-1533 - TransactionSupplement notification through outbox]]
- ← Generalization: [[CSI-1469 - Update transaction supplement data source for printouts]]
- ← Generalization: [[CSI-1497 - Creation of transaction by type of Transaction Supplement]]
- ← Generalization: [[CSI-1455 - Create Transaction Supplement function]]
- ← Generalization: [[CSI-1554 - Changes in Transaction Supplement datasource]]
- ← Generalization: [[Supplement for Transaction Supplement definition]]
- ← Generalization: [[CSI-1506 - Getting information about Transaction Supplements]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction
