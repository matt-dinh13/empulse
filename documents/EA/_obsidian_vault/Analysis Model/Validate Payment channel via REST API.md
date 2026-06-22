---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via REST API/Use Case Model"
domain: "Analysis Model"
element_id: 1798270
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Validate Payment channel via REST API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via REST API/Use Case Model

## 📝 Notes

System performs several validations for given payment channel:

Presence of contract 
System checks whether provided contract code exists, otherwise CONTRACT_NOT_FOUND

Presence of target contract
If filled in, system checks whether provided contract code exists, otherwise TARGET_CONTRACT_NOT_FOUND

GBA {ADD PAYM-5301} or RTA{/ADD} channel validation
System checks presence of accountNumber and bankBranchCode, if missing, then MISSING_ACCOUNT_NUMBER_AND_BANK_BRANCH_CODE
System checks presence of accountType, if missing, then MISSING_BANK_ACCOUNT_TYPE

CA channel validation
System checks presence of external card ID, if missing then EXTERNAL_CARD_NOT_FOUND

Purpose to type validation
RE -> OTHER, DD
{DEL PAYM-5301}DI,RD -> GBA, PBA, SBA, CA{/DEL}
{ADD PAYM-5301}
DI -> GBA, PBA, SBA, CA
RD -> GBA, PBA, SBA, CA, RTA
{/ADD}
PP -> PBA
DR, RF -> GBA
RW -> OC, GBA, PBA, SBA, CA

otherwise INCORRECT_TYPE_TO_PURPOSE

Bank branch check
If both bank branch sync code and branch code is present, system checks whether sync code matches with code of branch, if not, then INCORRECT_BANK_BRANCH_DATA
If channel type = GBA and provided code/sync code doest not exists, then BANK_BRANCH_NOT_FOUND.
If channel type = GBA and provided code returns multiple records of branches, system returns BANK_BRANCH_NOT_FOUND with message "["Zero or more than " +
                            "one bank branch with code " + bankAccount.getBankBranchCode() + " found. Please use " +  "syncCode."]"
Holder name check
System checks presence of holder name, if missing, then MISSING_ACCOUNT_HOLDER_NAME

## 🔗 Connections (4)

- ← Dependency: [[{ADD}05.339 Update and validate Repayment Channel via REST API (UseCase 1816025)]]
- ← Dependency: [[05.338 Validate Payment Channel via REST API]]
- ← Dependency: [[{ADD}05.331 Create And Validate Payment Channel via REST API (UseCase 1816021)]]
- ← Dependency: [[{ADD}05.332 Update and Validate Payment Channel via REST API]]

## 📊 Appears In (1 diagrams)

- Use Case: Payment Channel via REST WS
