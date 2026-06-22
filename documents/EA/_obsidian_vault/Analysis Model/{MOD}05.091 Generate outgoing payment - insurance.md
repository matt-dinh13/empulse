---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880960
diagrams: 13
connections: 20
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.091 Generate outgoing payment - insurance

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

System executes this UC to generate payments for particular Insurance_Contract (if is passed) or for all Insurance_Contract related to passed Contract. Use case is triggered by events occurred:
- in contract sales processes (contract signing - see 01.180 Sign contract, contract activation - see 01.290 Activate contract)
- in insurance prolongation process - see 11.081 Prolong insurance contract
- at insurance establishing and prolongation based on the EOM billing REL account - see 01.775 Process account EOM billing finished event

## 🔗 Connections (16)

- ← UseCase «include»: [[{MOD}01.290 Activate contract]]
- ← UseCase «include»: [[01.770 Process account transaction notification (UseCase 1875616)]]
- ← UseCase «include»: [[01.739 Process Account Balance Change EOM notification]]
- → NoteLink: [[Use Case Model _ Generate outgoing payments for revolving transaction]]
- ← UseCase «include»: [[11.152 Activate additionally added Insurance (CEL)]]
- ← Dependency: [[{MOD}Sign contract finalization]]
- ← UseCase «include»: [[11.081 Prolong insurance contracts]]
- ← UseCase «include»: [[{MOD}11.775 Activate Standalone Insurance on Cash Loan disbursement]]
- → Realisation: [[Req #4 - Changes in outgoing payment generation]]
- → Realisation: [[05.091 Generate outgoing payment - insurance]]
- → Dependency: [[{ADD}Generate INR outgoing payment]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Realisation: [[REQ-6_ Adjust outgoing payments for premium settlement]]
- → Dependency: [[{ADD}Generate INS outgoing payment]]
- → Realisation: [[REQ#3 Extension of generating outgoing payments - insurance (for REL transactions)]]
- → Dependency: [[Generate outgoing payment code]]

## 📊 Appears In (13 diagrams)

- Custom: Access Rights
- Custom: PAYM-1290 (CBL-2620) New insurance types for REL products
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: Activation of contract on a repayment
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
- Use Case: Contract registration
- Use Case: Contract signing
- Use Case: Generate and Cancel outgoing payments
- Use Case: Generate outgoing payments for revolving transaction
- Use Case: Insurance based on AccountBalanceChange EOM event
- Use Case: Insurance prolongation
- Use Case: Processing of first transaction notification
- Use Case: Replacement of standard insurance upon its cancelation or termination
