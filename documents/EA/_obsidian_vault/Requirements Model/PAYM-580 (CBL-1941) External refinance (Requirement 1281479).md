---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-580 (CBL-1941) External refinance"
domain: "Requirements Model"
element_id: 1281479
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-580 (CBL-1941) External refinance

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-580 (CBL-1941) External refinance

## 📝 Notes

A new product will be added which allows clients to pay off loans in other banks and optionally receive extra amount (top up). This can be HCB or external clients. Introduction of external refinancing will cause increase of sales from the following clients:
- those who want to increase the loan amount or term;
- HCB clients who took a loan in another bank and couldn’t take a loan in HCB because of the restriction on a monthly payment(DTI) or number of loans opened;
- other banks clients who are not happy with their current conditions or can’t take the loan in HCB due to DTI restriction.

We (ISPAY) have to enable sending multiple outgoing payments to repay client's loans in other banks (one payment for each bank).

Assumptions:
* Payment channel will still read GBA, but a new purpose should be added.
* Disbursement to other banks will be done only when a client withdraws the top up amount (if any) to prevent difficult reverse operations.
* Internal consolidation (consolidation of client's loans in HC) remains to be solved via virtual disbursement using artificial incoming payments

## 🔗 Connections (3)

- ← Generalization: [[Adding new function to OutgoingPaymentsWS]]
- ← Generalization: [[Adding new payment purpose and outgoing payment type for External refinance]]
- ← Generalization: [[Adding new functions to PaymentChannelWS]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-580 (CBL-1941) External refinance
