---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433090
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Sign contract

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

When contract documentation is signed, contract has to be created for existing application.

## Input
- application code

## Output
- signed contract 

## Detail
Contract can be signed manually or using OTP. When contract is signed, following steps can be performed:

- check if required document types have uploaded content (document types assigned to product profile with check content moment type CS)
- fix contract financial parameters
- for CEL contract - fix the installment schedule
- for REL contract - revolving account is activated in the account management, card is being confirmed in the card management, loyalty account is activated in loyalty management (if a loyalty service is arranged)
- generate disbursement payment by payment channel setting (to the retailer, the client, or the chosen partner bank)
- generate payment to the insurance company if the insurance service is allowed for this event
- set the contract debt tracking
- check consolidation amount if contract is used for consolidation

_Note: at present application is represented in BSL as contract entity. This means when contract is being signed, application (meaning contract) only changes its status to Signed. No new entity is being created._

## 📊 Appears In (1 diagrams)

- Package: LOR
