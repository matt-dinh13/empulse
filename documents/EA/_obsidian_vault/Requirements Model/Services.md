---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed"
domain: "Requirements Model"
element_id: 1645616
diagrams: 4
connections: 19
tags:
  - class
  - requirements-model
---

# 🔷 Services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed

## 📝 Notes

LDM: list of services from Contract.ContractService.Service 
where ServiceCategoryType is LOAN_OPTIONS or PAYMENT_CARD 

Default order: Service.ServiceType.Name asc., Service.Code asc.
Paging: No.
Localization code: CON_Services

## 🔗 Connections (19)

- → Dependency: [[08.300 Show Bundle service status (UseCase 1879701)]]
- → Dependency: [[03.035 Show early repayment preview (UseCase 1879635)]]
- → Dependency: [[08.900 Show available collection tools for client's contracts]]
- → Dependency: [[08.353 Browse requests for services]]
- → Dependency: [[08.270 Show CET repayment preview (UseCase 1862238)]]
- → Dependency: [[{MOD}08.095 Cancel contract service manually]]
- → Dependency: [[{MOD}08.060 Change Due Date]]
- → Dependency: [[08.408 Set terms of loan fulfillment]]
- → Dependency: [[08.020 Display status of service on contract (UseCase 1879718)]]
- → Dependency: [[08.010 Show service information (UseCase 1879687)]]
- → Dependency: [[08.090 Terminate Contract Service manually]]
- → Dependency: [[08.085 Replace Contract Service manually]]
- → Dependency: [[08.030 Show service operation status (UseCase 1879674)]]
- → Dependency: [[08.900 Show available collection tools for client's contracts]]
- → Dependency: [[08.600 Show CEL Rewards preview (UseCase 1850693)]]
- → Dependency: [[03.200 Show ER request history (UseCase 1876322)]]
- → Dependency: [[08.255 Show Cooling-off period repayment preview (UseCase 1862255)]]
- → Dependency: [[{MOD}08.207 Set Enforce gift payment flag]]
- → Dependency: [[08.050 Show Partial ER preview]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed
- Custom: CBL-8394 (CLM-2583) Extend contract service information window and add service tooltip
- Custom: Contract - Service tab - Cancel service action
- Custom: Tab-Services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Evaluate | icon |  |
| Evaluate status | icon |  |
| History | icon |  |
| Name | string |  |
| Type | string |  |
| Valid from | date |  |
| Valid to | date |  |
| Evaluate operation status | icon |  |
| Terminate | icon |  |
| {MOD}Status | string |  |
| Enforce gift payment | icon |  |
| Cancel service | icon |  |
| {ADD}Replace service | icon |  |
