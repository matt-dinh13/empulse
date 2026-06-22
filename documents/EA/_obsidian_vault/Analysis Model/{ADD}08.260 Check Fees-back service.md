---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model"
domain: "Analysis Model"
element_id: 1838984
diagrams: 2
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}08.260 Check Fees-back service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model

## 📝 Notes

{ADD CBL-5507 PAYM-2254_REQ1 /}

THIS UC WAS ORIGINALLY IMPLEMENTED AS A DB PROCEDURE (PART OF ODS)

This use case evaluates whether the Fees-back service is applicable for the checked contract. If so, the contract is forwarded to processing (see
This service can be only evaluated when the loan is fully repaid (i.e. on events of contract finishing automatically, or manually)
After the service is applied, its activity on the contract is terminated.

## 🔗 Connections (3)

- → Dependency: [[Checking of payment discipline]]
- → Realisation: [[Requirement3 - Extension of ownership validation in services processing]]
- ← UseCase «include»: [[{ADD}08.004 Check and process services on contract]]

## 📊 Appears In (2 diagrams)

- Use Case: Fees-back service evaluation and processing
- Use Case: Fess-back service immediate processing
