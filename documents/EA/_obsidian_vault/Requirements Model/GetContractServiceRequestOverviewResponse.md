---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2980 (CLM-1238) New functionality SPRAVKA in UFO"
domain: "Requirements Model"
element_id: 1868948
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 GetContractServiceRequestOverviewResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2980 (CLM-1238) New functionality SPRAVKA in UFO

## 📝 Notes

For FER, CET service only. Response contains 0-N records. Record number depends on amount of FER / CET service requests for status Created / Canceled / Executed. Each record include following info:

+ Type of request (Loan Service Request.Request Type)   
+ Status (Loan Service Request.Current Status)  (CREATED, EXECUTED, CANCELED)
+ Early repayment due date (Early Repayment Request.Early Repayment Date)
+ Total amount for Early repayment payment (Early Repayment Request.Communicated Amount)
+ Request creation date (Loan Service Request.Creation Date)

## 🔗 Connections (2)

- ← Usage: [[Contract Service Request Services]]
- → Dependency: [[ContractServiceRequest]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-2980 (CLM-1238) New functionality SPRAVKA in UFO
- Logical: Contract Service Request Overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requests | ContractServiceRequest |  |
