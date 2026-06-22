---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination"
domain: "Requirements Model"
element_id: 1826915
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1786 - Create a new method for Transaction authorization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination

## 📝 Notes

The requirement is to make authorization of all transactions created based on the sales quotes to be charged.
For this reason, it will be created a new method of Transaction Supplement API for authorization all transactions in NEW status related to the Contract Supplement and its sales quotes.
If a transaction authorization failed (AM refuses it), all already authorized transactions will be revoked (AccountTransactionWS.CancelAuthorization method will be used) and the requestor is notified about Transaction Supplement processing fails.

AccountTransactionWS.CancelAuthorization method definition:
https://git.homecredit.net/product/hss-integration/-/blob/master/hss-services/hss-account/hss-account-oxm/src/main/resources/net/homecredit/hss/integration/account/xsd/account/v6/AccountTransactionWS.xsd#L186

Open questions:

	
- Which code will be used from CancellationReasonDto when CancelAuthorization is called? -> REVERSAL

## 🔗 Connections (1)

- → Generalization: [[CBL-16736 General requirement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination
