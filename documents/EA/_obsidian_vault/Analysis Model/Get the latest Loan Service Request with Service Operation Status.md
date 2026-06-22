---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833410
diagrams: 8
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get the latest Loan Service Request with Service Operation Status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes how to get the latest Loan Service Request with Service Operation Status (for service switch on/off).

Input:


	
- Contract Service


Output:


	
- Loan Service Request, null


Steps:

System selects Loan Service Request where CREATION_DATE = MAX(CREATION_DATE) and CURRENT_STATUS != CANCELLED or REJECTED else (there is no previously created Loan Service Request or there are only cancelled requests) system returns null.

## 🔗 Connections (2)

- ← Dependency: [[08.111 Cancel contract insurance common]]
- ← Dependency: [[{MOD}08.121 Terminate contract insurance common]]

## 📊 Appears In (8 diagrams)

- Custom: Business Rules
- Use Case: Change LoanService status on defined Account Closure notifications
- Use Case: CSI-2287 Replace LoanServiceRequest sending for Operation Status change
- Use Case: CSI-2307 Processing AM responses on Service changes
- Use Case: Service - contract detail
- Use Case: Service - Contract Service management via API
- Use Case: Service - Contract Service management via UI
- Use Case: Service - switch on/off
