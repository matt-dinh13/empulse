---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests"
domain: "Analysis Model"
element_id: 1868943
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ContractServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests

## 📝 Notes

For FER, CET service only. Response contains 0-N records. Record number depends on amount of FER / CET service requests for status Created / Canceled / Executed. Each record include following info:

+ Type of request (Loan Service Request.Request Type)   
+ Status (Loan Service Request.Current Status)  (CREATED, EXECUTED, CANCELED)
+ Early repayment due date (Early Repayment Request.Early Repayment Date)
+ Total amount for Early repayment payment (Early Repayment Request.Communicated Amount)
+ Request creation date (Loan Service Request.Creation Date)

## 🔗 Connections (1)

- ← Dependency: [[GetContractServiceRequestOverviewResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Service Request Overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | string |  |
| currentStatus | string |  |
| dueDate | date |  |
| totalToPaid | money |  |
| requestDate | datetime |  |
