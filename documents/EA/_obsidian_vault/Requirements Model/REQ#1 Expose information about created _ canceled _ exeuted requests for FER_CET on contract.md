---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-626 (CBL-399) Adding info about active FER/CET request"
domain: "Requirements Model"
element_id: 1272182
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Expose information about created / canceled / exeuted requests for FER/CET on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-626 (CBL-399) Adding info about active FER/CET request

## 📝 Notes

CLM-626

New API (preferable REST+JSON) which will return following information about created / canceled / executed   FER / CET services based on contract number:

+ Type of request: check for CET / FER 
+ Status of service: check for Created / Executed / Canceled
+ Early repayment due date: Early repayment due date
+ Sum: Total amount for Early repayment payment (Total to paid)

## 🔗 Connections (1)

- ← Realisation: [[01.768 Get Contract Service Request Overview (UseCase 1869800)]]

## 📊 Appears In (1 diagrams)

- Custom: CLM-626 (CBL-399) Adding info about active FER/CET request
