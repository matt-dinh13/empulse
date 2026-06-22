---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination"
domain: "Requirements Model"
element_id: 1752468
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 Use new logic for creating/updating bank accounts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination

## 📝 Notes

The goal is to minimize number of newly created bank accounts in the system.

This task solves:

    Avoiding of using unnecessary cloneBankAccount function when saving payment channels. This should settle the cases created whenever SBA bank account is filled in. The same may occur for PBA, needs checking.
    Using a new unified method for creating/updating bank accounts instead

We need to use the new business rule in the following places in the application:

    01.171 Create REL contract termination request
    Saving of Payment Channels
    Create incoming payment rule - saves HC bank account id to incoming payment if provided
    14.421 Create DDM via WS
    14.422 Update DDM via WS
    01.662 Change disbursement channel
    01.663 Edit refunds disbursement channel
    01.425 Update DDM
    01.430 Receive DDM
    05.238 Process outgoing payments for ApplicationDocumentationPreparedNotification

	
-     disbursement channel change request?

## 🔗 Connections (2)

- → Generalization: [[PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination (Requirement 1752470)]]
- → Dependency: [[REQ#3 (PAYM-1552) - Stop duplication bank accounts in Saving of payment channels]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination
