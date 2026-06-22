---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833408
diagrams: 8
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get initial Contract service status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes way how to find initial status of the Contract Service object.
It is called by {MOD}08.080 Add new available service on contract  (GUI  + API) and {ADD}08.085 Replace service manually  (GUI + API)

Input:

	
- Service Code
	
- SwitchOn (default=false)


Output: 

	
- Contract service status



	
- System checks Service Type[Service Code].Service Type Flag = SERVICE_SWITCH_ALLOWED
  - if it is set then if SwitchOn=TRUE then Contract service status = ACTIVE else Contract service status = NEW

  - else Contract service status = ACTIVE

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.774 Create Contract Service]]

## 📊 Appears In (8 diagrams)

- Custom: Business Rules
- Custom: CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service
- Custom: CBL-8246 (CLM-2557) Implementation of API + UI for service replacement
- Custom: CBL-9632 (CLM-2981) FLIP eligibility validation in AP
- Use Case: Contract Service replacement (flip)
- Use Case: Loan Service - Add a Service to Contract
- Use Case: Service - Contract Service management via API
- Use Case: Service - Contract Service management via UI
