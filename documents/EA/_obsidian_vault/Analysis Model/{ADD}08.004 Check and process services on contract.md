---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model/Service evaluation (IS)"
domain: "Analysis Model"
element_id: 1872537
diagrams: 1
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}08.004 Check and process services on contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model/Service evaluation (IS)

## 📝 Notes

{ADD CBL-5507 PAYM-2254_REQ1 /}

This use case is triggered by ContractServiceEvaluationRequestedSE system event. It finds all contract services to be evaluated for a specified contract and a specified event, orders them by priority and processes the one with the highest priority. If processing fails then it continues with the next one by order. Only one service can be successfully processed on the contract.

## 🔗 Connections (7)

- → UseCase «include»: [[{ADD}08.250 Check cooling-off period]]
- → UseCase «include»: [[{MOD}08.264 Check and process fees-back service]]
- → UseCase «include»: [[{ADD}08.260 Check Fees-back service]]
- → UseCase «include»: [[{ADD}08.254 Check and process Cooling-off period]]
- → UseCase «include»: [[08.054 Check and process Partial early repayment]]
- → UseCase «include»: [[08.055 Check Partial early repayment service]]
- ← Association: [[System event]]

## 📊 Appears In (1 diagrams)

- Use Case: Evaluation of services on system events (Java)
