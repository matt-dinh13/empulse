---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination"
domain: "Requirements Model"
element_id: 1752471
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 (PAYM-1552) - Stop duplication bank accounts in Saving of payment channels

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination

## 📝 Notes

The goal is to minimize number of newly created bank accounts in the system.

This task solves a situation, when bank account are copied from salerooms to payment channels during calling Saving of payments channels.

This task has no impact on documentation in the EA model, because there is no mention about creation/cloning bank account.

There is going only about a bug in the source code.

So, the only one impact is to change private method isBankAccountNecessary as metioned below. Currently, it returns true for GBA, as well as for PBA/SBA.

**
 * check if bank account is necessary for given payment channel
 *
  @param* paymentChannel  * @return  */
*private boolean isBankAccountNecessary(final* PaymentChannel paymentChannel) {
   if (paymentChannel.getType() == null) return false;
   switch (paymentChannel.getType()) {
      case GBA:
         return true;
      case PBA:
      case SBA:
      default:
         return false;
   }
}

## 🔗 Connections (1)

- ← Dependency: [[REQ#3 Use new logic for creating_updating bank accounts]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination
